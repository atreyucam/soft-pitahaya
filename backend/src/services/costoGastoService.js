const costoGastoRepository = require('../repositories/costoGastoRepository');
const inventarioRepository = require('../repositories/inventarioRepository');
const { Insumo } = require('../models');

exports.getAllCostosGastos = async () => {
    return await costoGastoRepository.findAll();
};

exports.getCostoGastoById = async (id) => {
    const costoGasto = await costoGastoRepository.findById(id);
    if (!costoGasto) throw new Error('Costo o gasto no encontrado');
    return costoGasto;
};

exports.updateCostoGasto = async (id, data) => {
    const result = await costoGastoRepository.update(id, data);
    if (result[0] === 0) throw new Error('Costo o gasto no encontrado');
    return result;
};

exports.deleteCostoGasto = async (id) => {
    const result = await costoGastoRepository.delete(id);
    if (result === 0) throw new Error('Costo o gasto no encontrado');
    return result;
};

exports.createCostoGasto = async (data) => {
    const { categoria, tipo, monto, descripcion, cantidad_adicional, unidad_medida, fecha_caducidad } = data;

    // Validar campos obligatorios
    if (!categoria || !tipo || !monto || !cantidad_adicional) {
        throw new Error('Faltan campos obligatorios');
    }

    if (["Insumos"].includes(categoria)) {
        let inventarioItem = await inventarioRepository.findByNombre(tipo);

        if (inventarioItem) {
            // Si el insumo ya existe en inventario, crea un nuevo registro en "Insumo"
            const nuevoInsumo = {
                item_id: inventarioItem.item_id,
                tipo_insumo: descripcion,
                cantidad_total: cantidad_adicional,
                fecha_caducidad: fecha_caducidad || null,
                estado_insumo: "Lleno",
            };
            await Insumo.create(nuevoInsumo);

            // Actualiza la cantidad en el inventario
            const nuevaCantidad = parseFloat(inventarioItem.cantidad_disponible) + parseFloat(cantidad_adicional);
            await inventarioRepository.updateCantidad(inventarioItem.item_id, nuevaCantidad);
        } else {
            // Si no existe, crea un nuevo registro en inventario e insumo
            const nuevoInventario = {
                nombre: tipo,
                descripcion: descripcion || "Nuevo insumo",
                categoria: "Insumos",
                cantidad_disponible: cantidad_adicional,
                unidad_medida: unidad_medida || "unidad",
                fecha_adquisicion: new Date(),
                ubicacion: "Almacén principal",
            };
            const createdInventario = await inventarioRepository.create(nuevoInventario);

            const nuevoInsumo = {
                item_id: createdInventario.item_id,
                tipo_insumo: descripcion,
                cantidad_total: cantidad_adicional,
                fecha_caducidad: fecha_caducidad || null,
                estado_insumo: "Lleno",
            };
            await Insumo.create(nuevoInsumo);
        }
    } else if (["Herramientas", "Máquinas"].includes(categoria)) {
        // Manejo de herramientas y máquinas
        let item = await inventarioRepository.findByNombre(tipo);

        if (item) {
            const nuevaCantidad = parseFloat(item.cantidad_disponible) + parseFloat(cantidad_adicional);
            await inventarioRepository.updateCantidad(item.item_id, nuevaCantidad);
        } else {
            const nuevoItem = {
                nombre: tipo,
                descripcion: descripcion || `Nueva ${categoria.toLowerCase()}`,
                categoria: categoria,
                cantidad_disponible: cantidad_adicional,
                unidad_medida: unidad_medida || "unidad",
                fecha_adquisicion: new Date(),
                ubicacion: "Almacén principal",
            };
            await inventarioRepository.create(nuevoItem);
        }
    }

    // Registrar el costo o gasto
    return await costoGastoRepository.create(data);
};
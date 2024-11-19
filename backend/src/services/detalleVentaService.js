const detalleVentaRepository = require('../repositories/detalleVentaRepository');

exports.getAllDetalles = async () => {
    return await detalleVentaRepository.findAll();
};

exports.getDetalleById = async (id) => {
    const detalle = await detalleVentaRepository.findById(id);
    if (!detalle) throw new Error('Detalle no encontrado');
    return detalle;
};

exports.createDetalle = async (data) => {
    if (!data.venta_id || !data.producto || !data.cantidad || !data.precio_unitario) {
        throw new Error('Faltan campos obligatorios');
    }
    return await detalleVentaRepository.create(data);
};

exports.updateDetalle = async (id, data) => {
    const result = await detalleVentaRepository.update(id, data);
    if (result[0] === 0) throw new Error('Detalle no encontrado');
    return result;
};

exports.deleteDetalle = async (id) => {
    const result = await detalleVentaRepository.delete(id);
    if (result === 0) throw new Error('Detalle no encontrado');
    return result;
};

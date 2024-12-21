const pagoRepository = require('../repositories/pagoRepository');
const usuarioRepository = require('../repositories/usuarioRepository');
const costoGastoRepository = require("../repositories/costoGastoRepository");

exports.getAllPagos = async () => {
    return await pagoRepository.findAll();
};

exports.getPagoById = async (id) => {
    const pago = await pagoRepository.findById(id);
    if (!pago) throw new Error('Pago no encontrado');
    return pago;
};


exports.getPagosByUsuario = async (usuarioId) => {
    const usuario = await usuarioRepository.findById(usuarioId);
    if (!usuario) throw new Error('Usuario no encontrado');
    const pagos = await pagoRepository.findByUsuarioId(usuarioId);
    return pagos.length > 0 ? pagos : "Sin pagos registrados";
};

exports.updatePago = async (id, data) => {
    const result = await pagoRepository.update(id, data);
    if (result[0] === 0) throw new Error('Pago no encontrado');
    return result;
};

exports.deletePago = async (id) => {
    const result = await pagoRepository.delete(id);
    if (result === 0) throw new Error('Pago no encontrado');
    return result;
};



exports.createPago = async (data) => {
    const { usuario_id, fecha_pago, monto, metodo_pago, detalles, periodo } = data;

    // Validar existencia del usuario
    const usuario = await pagoRepository.findByUsuarioId(usuario_id);
    if (!usuario) {
        throw new Error("Usuario no encontrado.");
    }

    // Crear el gasto asociado al pago
    const gasto = await costoGastoRepository.create({
        fecha: fecha_pago,
        categoria: "Mano de Obra", // Categoría predeterminada para pagos
        tipo: "Pago Usuario",
        monto: monto,
        descripcion: detalles,
    });

    // Crear el pago asociado al gasto
    const pago = await pagoRepository.create({
        usuario_id,
        fecha_pago,
        monto,
        metodo_pago,
        detalles,
        periodo,
    });

    return { gasto, pago }; // Retornar ambos registros
};
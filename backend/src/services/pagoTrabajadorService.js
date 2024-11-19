const pagoTrabajadorRepository = require('../repositories/pagoTrabajadorRepository');

exports.getAllPagos = async () => {
    return await pagoTrabajadorRepository.findAll();
};

exports.getPagoById = async (id) => {
    const pago = await pagoTrabajadorRepository.findById(id);
    if (!pago) throw new Error('Pago no encontrado');
    return pago;
};

exports.createPago = async (data) => {
    if (!data.gasto_id || !data.trabajador_id || !data.fecha_pago || !data.monto || !data.metodo_pago || !data.periodo) {
        throw new Error('Faltan campos obligatorios');
    }
    return await pagoTrabajadorRepository.create(data);
};

exports.updatePago = async (id, data) => {
    const result = await pagoTrabajadorRepository.update(id, data);
    if (result[0] === 0) throw new Error('Pago no encontrado');
    return result;
};

exports.deletePago = async (id) => {
    const result = await pagoTrabajadorRepository.delete(id);
    if (result === 0) throw new Error('Pago no encontrado');
    return result;
};

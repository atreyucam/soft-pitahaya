const ventaRepository = require('../repositories/ventaRepository');

exports.getAllVentas = async () => {
    return await ventaRepository.findAll();
};

exports.getVentaById = async (id) => {
    const venta = await ventaRepository.findById(id);
    if (!venta) throw new Error('Venta no encontrada');
    return venta;
};

exports.createVenta = async (data) => {
    if (!data.comprador_id || !data.fecha || !data.total) {
        throw new Error('Faltan campos obligatorios');
    }
    return await ventaRepository.create(data);
};

exports.updateVenta = async (id, data) => {
    const result = await ventaRepository.update(id, data);
    if (result[0] === 0) throw new Error('Venta no encontrada');
    return result;
};

exports.deleteVenta = async (id) => {
    const result = await ventaRepository.delete(id);
    if (result === 0) throw new Error('Venta no encontrada');
    return result;
};

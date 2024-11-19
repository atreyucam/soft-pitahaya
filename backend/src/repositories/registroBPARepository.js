const { RegistroBPA } = require('../models');

const registroBPARepository = {
    findAll: async () => await RegistroBPA.findAll(),
    findById: async (id) => await RegistroBPA.findByPk(id),
    create: async (data) => await RegistroBPA.create(data),
    update: async (id, data) => await RegistroBPA.update(data, { where: { registro_id: id } }),
    delete: async (id) => await RegistroBPA.destroy({ where: { registro_id: id } }),
};

module.exports = registroBPARepository;

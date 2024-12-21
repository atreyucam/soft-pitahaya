const Pago = require('./pago');
const CostoGasto = require('./CostoGasto');
const Usuario = require('./Usuario');
const Rol = require('./Rol');
const Lote = require('./Lote');
const Actividad = require('./Actividad');
const TipoActividad = require("./TipoActividad");
const Inventario = require('./Inventario');
const Insumo = require('./Insumo');
const UsoInsumo = require('./UsoInsumo');
const Comprador = require('./Comprador');
const Venta = require('./Venta');
const DetalleVenta = require('./DetalleVenta');
const Mensaje = require('./Mensaje');
const Notificacion = require('./Notificacion');
const RegistroBPA = require('./RegistroBPA');
const Cosecha = require('./Cosecha');
const Solicitud = require('./Solicitud');


Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

Lote.hasMany(Actividad, { foreignKey: 'lote_id' });
Actividad.belongsTo(Lote, { foreignKey: 'lote_id' });

TipoActividad.hasMany(Actividad, { foreignKey: "tipo_id" });
Actividad.belongsTo(TipoActividad, { foreignKey: "tipo_id" });


Inventario.hasOne(Insumo, { foreignKey: 'item_id' });
Insumo.belongsTo(Inventario, { foreignKey: 'item_id' });

Insumo.hasMany(UsoInsumo, { foreignKey: 'insumo_id' });
UsoInsumo.belongsTo(Insumo, { foreignKey: 'insumo_id' });

Actividad.hasMany(UsoInsumo, { foreignKey: 'actividad_id' });
UsoInsumo.belongsTo(Actividad, { foreignKey: 'actividad_id' });

Actividad.hasMany(CostoGasto, { foreignKey: 'actividad_id' });
CostoGasto.belongsTo(Actividad, { foreignKey: 'actividad_id' });

CostoGasto.hasOne(Pago, { foreignKey: 'gasto_id' });
Pago.belongsTo(CostoGasto, { foreignKey: 'gasto_id' });

Usuario.hasMany(Pago, { foreignKey: 'usuario_id' });
Pago.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Comprador.hasMany(Venta, { foreignKey: 'comprador_id' });
Venta.belongsTo(Comprador, { foreignKey: 'comprador_id' });

Venta.hasMany(DetalleVenta, { foreignKey: 'venta_id' });
DetalleVenta.belongsTo(Venta, { foreignKey: 'venta_id' });

Lote.hasMany(DetalleVenta, { foreignKey: 'lote_id' });
DetalleVenta.belongsTo(Lote, { foreignKey: 'lote_id' });

Usuario.hasMany(Mensaje, { foreignKey: 'emisor_id'});
Usuario.hasMany(Mensaje, { foreignKey: 'receptor_id'});

Usuario.hasMany(Notificacion, { foreignKey: 'usuario_id' });
Notificacion.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Usuario.hasMany(RegistroBPA, { foreignKey: 'usuario_id' });
RegistroBPA.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Lote.hasMany(Cosecha, { foreignKey: 'lote_id' });
Cosecha.belongsTo(Lote, { foreignKey: 'lote_id' });


// Relación con Actividad
Actividad.hasOne(Cosecha, { foreignKey: 'actividad_id' });
Cosecha.belongsTo(Actividad, { foreignKey: 'actividad_id' });

// Relación con Usuario
Usuario.hasMany(Solicitud, { foreignKey: 'usuario_id' });
Solicitud.belongsTo(Usuario, { foreignKey: 'usuario_id' });

// Relación con Inventario
Inventario.hasMany(Solicitud, { foreignKey: 'item_id' });
Solicitud.belongsTo(Inventario, { foreignKey: 'item_id' });



module.exports = { Usuario, Rol, Lote, Actividad, TipoActividad,
    Inventario, Insumo, UsoInsumo, CostoGasto, Pago, Comprador, Venta, DetalleVenta,
    Mensaje, Notificacion, RegistroBPA, Cosecha, Solicitud
 };

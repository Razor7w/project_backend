import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "arriendos" })
class RegistroArriendo extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: "fecha_inicio",
    defaultValue: DataType.NOW,
  })
  declare fechaInicio: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    field: "fecha_fin",
    defaultValue: null,
  })
  declare fechaFin: Date | null;

  @Column({ type: DataType.STRING(6), allowNull: false, field: "patente_vehiculo" })
  declare patenteVehiculo: string;

  @Column({ type: DataType.STRING(20), allowNull: false, field: "tipo_vehiculo" })
  declare tipoVehiculo: string;

  @Column({ type: DataType.STRING(10), allowNull: false, field: "rut_cliente" })
  declare rutCliente: string;

  @Column({ type: DataType.STRING(50), allowNull: false, field: "nombre_cliente" })
  declare nombreCliente: string;
}

export default RegistroArriendo;

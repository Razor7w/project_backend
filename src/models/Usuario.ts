import { Model, Table, Column, DataType } from "sequelize-typescript";
import Usuario from "./Usuario";

@Table({ tableName: "usuarios" })
class RegistroUsuario extends Model {
  @Column({ type: DataType.STRING(50), primaryKey: true, allowNull: false, field: 'email' })
  declare correo: string;

  @Column({ type: DataType.STRING(60), allowNull: false, field: 'password' })
  declare contrasena: string;
}

export default RegistroUsuario;

import { Model, Table, Column, DataType } from "sequelize-typescript";
import Usuario from "./Usuario";

@Table({ tableName: "usuarios" })
class RegistroUsuario extends Model {
  @Column({ type: DataType.STRING(20), primaryKey: true, allowNull: false })
  declare email: string;

  @Column({ type: DataType.STRING(20), allowNull: false })
  declare password: string;
}

export default RegistroUsuario;

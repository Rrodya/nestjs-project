import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles>{
  @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
  id: number;

  @ForeignKey(() => Role)
  @Column({type: DataType.NUMBER})
  roleId: number;

  @ForeignKey(() => User)
  @Column({type: DataType.NUMBER})
  userId: number;
}

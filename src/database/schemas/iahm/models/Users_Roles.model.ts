import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";
import { IUsers_Roles } from "../interfaces/Users_Roles.interface";

class UsersRoles extends Model<IUsers_Roles>{ }

UsersRoles.init({
    user_role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    role_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize: IAHM,
    tableName: "Users_Roles",
    timestamps: false
})

export default UsersRoles
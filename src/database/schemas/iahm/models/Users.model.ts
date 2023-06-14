import { IUsers } from "../interfaces/Users.interface";
import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";

class Users extends Model<IUsers>{}

Users.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    enable: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    charge: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    rank: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    image: {
        type: DataTypes.CHAR(-1),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize: IAHM,
    tableName: "Users",
    timestamps: false
});

export default Users;
    

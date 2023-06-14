import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize"
import { IModule_Types } from "../interfaces/Module_Types.interface";

class Module_Types extends Model<IModule_Types> { }

Module_Types.init(
    {
        type_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        module: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: IAHM,
        tableName: "Module_Types",
        timestamps: false,
    }
);

export default Module_Types;

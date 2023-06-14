import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";
import { IImagen_Module } from "../interfaces/Imagen_Module.interface";

class Imagen_Module extends Model<IImagen_Module> { }

Imagen_Module.init(
    {
        image_module_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagen_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type_module_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        module_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        sequelize: IAHM,
        tableName: "Imagen_Module",
        timestamps: false,
    }
);

export default Imagen_Module;
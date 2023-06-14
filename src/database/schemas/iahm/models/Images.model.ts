import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";
import { IImages } from "../interfaces/Images.interface";

class Images extends Model<IImages> {}

Images.init(
    {
        image_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: IAHM,
        tableName: "Images",
        timestamps: false,
    }
);

export default Images;
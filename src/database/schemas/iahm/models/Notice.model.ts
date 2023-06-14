import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";
import { INotice } from "../interfaces/Notice.interface";

class Notices extends Model<INotice> {}

Notices.init(
    {
        notice_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        states_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: IAHM,
        tableName: "Notices",
        timestamps: false,
    }
);

export default Notices;
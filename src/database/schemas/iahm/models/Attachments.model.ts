import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";
import { IAttachments } from "../interfaces/Attachments.interface";

class Attachments extends Model<IAttachments> { }

Attachments.init(
    {
        attachment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        attach: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notice_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: IAHM,
        tableName: "Attachments",
        timestamps: false,
    }
);

export default Attachments;
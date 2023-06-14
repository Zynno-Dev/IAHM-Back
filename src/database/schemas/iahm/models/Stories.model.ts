import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";
import { IStories } from "../interfaces/Stories.interface";

class Stories extends Model<IStories> {}

Stories.init(
    {
        history_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: IAHM,
        tableName: "Stories",
        timestamps: false,
    }
);

export default Stories;

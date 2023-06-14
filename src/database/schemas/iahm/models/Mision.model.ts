import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";
import { IMision } from "../interfaces/Mision.interface";

class Mision extends Model<IMision> {}

Mision.init(
    {
        mision_id: {
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
        tableName: "Mision",
        timestamps: false,
    }
);

export default Mision;
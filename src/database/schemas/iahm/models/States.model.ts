import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize"
import { IState } from "../interfaces/State.interface";

class States extends Model<IState> { }

States.init(
    {
        state_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        state: {
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
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: IAHM,
        tableName: "States",
        timestamps: false,
    }
);

export default States;
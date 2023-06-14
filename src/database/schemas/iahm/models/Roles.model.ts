import { IRoles } from "../interfaces/Roles.interface";
import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";

class Roles extends Model<IRoles> {}

Roles.init(
    {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: IAHM,
        tableName: "Roles",
        timestamps: false,
    }
);

export default Roles;

import { IAHM } from "../../../connection";
import { Model, DataTypes } from "sequelize";
import { IAuthorities } from "../interfaces/Authorities.interface";

class Authorities extends Model<IAuthorities> { }

Authorities.init(
    {
        authority_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        grade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize: IAHM,
        tableName: "Authorities",
        timestamps: false,
    }
);

export default Authorities;
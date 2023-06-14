import Roles from "../models/Roles.model";
import Users from "../models/Users.model";
import UsersRoles from "../models/Users_Roles.model";

export const userAssociations = () => {
    Users.belongsToMany(Roles,{
        through: UsersRoles,
        as: 'roles',
        foreignKey: 'user_id'
    })
};
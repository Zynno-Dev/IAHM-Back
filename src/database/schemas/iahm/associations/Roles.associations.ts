import Roles from "../models/Roles.model"
import Users from "../models/Users.model"
import UsersRoles from "../models/Users_Roles.model"

export const rolesAssociations = () => {
    Roles.belongsToMany(Users,{
        through: UsersRoles,
        as: 'users',
        foreignKey: 'role_id'
    })
}
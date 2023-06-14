import Roles from "../../../../database/schemas/iahm/models/Roles.model";

export const getRoleList = async () => {
    try {
        const roles = await Roles.findAll();
        return roles;
    } catch (error) {
        console.log(error);
    }
}
import Roles from "../../../../database/schemas/iahm/models/Roles.model";
import Users from "../../../../database/schemas/iahm/models/Users.model";

export const userValidator = async (
    username: string,
    name: string,
    surname: string,
    password: string,
    charge: string,
    rank: string,
    image: string,
    dni: string,
    role_id: number,
) => {
    let isValid = true;
    let message: string = '';
    try {
        //USERNAME
        if (!username) {
            isValid = false;
            message = 'El nombre de usuario no puede estar vacío';
        } else {
            const user = await Users.findOne({
                where: {
                    username,
                },
            });
            if (user) {
                isValid = false;
                message = 'El nombre de usuario ya existe';
            }
        }

        //NAME
        if (!name) {
            isValid = false;
            message = 'El nombre no puede estar vacío';
        }

        //SURNAME
        if (!surname) {
            isValid = false;
            message = 'El apellido no puede estar vacío';
        }

        //PASSWORD
        if (!password) {
            isValid = false;
            message = 'La contraseña no puede estar vacía';
        }

        //CHARGE
        if (!charge) {
            isValid = false;
            message = 'El cargo no puede estar vacío';
        }

        //RANK
        if (!rank) {
            isValid = false;
            message = 'El grado no puede estar vacío';
        }

        //DNI
        if (!dni) {
            isValid = false;
            message = 'El DNI no puede estar vacío';
        } else {
            const user = await Users.findOne({
                where: {
                    dni,
                },
            });
            if (user) {
                isValid = false;
                message = 'El DNI ya existe';
            }
        }

        //ROLE_ID
        if (!role_id) {
            isValid = false;
            message = 'El rol no puede estar vacío';
        } else {
            const role = await Roles.findOne({
                where: {
                    role_id,
                },
            });
            if (!role) {
                isValid = false;
                message = 'El rol no existe';
            }
        }

        return [isValid, message];
    } catch (error) {
        return [false, error];
    }
}

export const userUpdateValidator = async (
    username: string,
    name: string,
    surname: string,
    password: string,
    charge: string,
    rank: string,
    image: string,
    dni: string,
    role_id: number,
    user_id: number,
) => {
    let isValid: boolean = true;
    let message: string = '';
    try {

        //USER_ID
        if (!user_id) {
            isValid = false;
            message = 'El usuario no existe';
        } else {
            const user = await Users.findOne({
                where: {
                    user_id,
                },
            });
            if (!user) {
                isValid = false;
                message = 'El usuario no existe';
            }
        }

        //USERNAME
        if (username) {
            const user = await Users.findOne({
                where: {
                    username,
                },
            });
            if (user) {
                isValid = false;
                message = 'El nombre de usuario ya existe';
            }
        }


        //PASSWORD
        if (password) {
            if (password.length < 8) {
                isValid = false;
                message = 'La contraseña debe tener al menos 8 caracteres';
            }
        }

        //DNI
        if (dni) {
            const user = await Users.findOne({
                where: {
                    dni,
                },
            });
            if (user) {
                isValid = false;
                message = 'El DNI ya existe';
            }
        }

        //ROLE_ID
        if (role_id) {
            const role = await Roles.findOne({
                where: {
                    role_id,
                },
            });
            if (!role) {
                isValid = false;
                message = 'El rol no existe';
            }
        }




        return [isValid, message];
    } catch (error) {
        console.log(error);
        return [false, error];
    }
}
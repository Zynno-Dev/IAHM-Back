import jwt from 'jsonwebtoken';
import { FindAndCountOptions, Includeable, cast } from "sequelize";
import { errorHandler, getPagination } from "../../helpers";
import Users from "../../../../database/schemas/iahm/models/Users.model";
import { ISignInParams, IUserAPI, IUserParams } from "./types";
import Roles from "../../../../database/schemas/iahm/models/Roles.model";
import { userUpdateValidator, userValidator } from './middlewares';
import UsersRoles from '../../../../database/schemas/iahm/models/Users_Roles.model';

const AUTH_KEY = process.env.AUTH_KEY || '';

const rolIncludeable: Includeable = {
  model: Roles,
  as: 'roles',
};

export const getUserList = async (userParams: IUserParams) => {
  try {
    const { page, pageSize } = userParams;

    let attributes: string[] = [
      'name',
      'surname',
      'dni',
      'charge',
      'rank',
      'image',
      'enable',
    ];

    /* const include: Includeable[] = []; */
    let findOptions: FindAndCountOptions = {
      attributes,
    };

    if (page && pageSize) {
      const { limit, offset } = getPagination(page, pageSize);
      findOptions = { ...findOptions, offset, limit };
    }

    const users = await Users.findAndCountAll(findOptions);
    /* Grado, nombre y apellido, DNI, */
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (
  username: string,
  pass: string
): Promise<ISignInParams> => {
  try {
    const include: Includeable[] = [rolIncludeable /*userDealerIncludeable*/];
    const user = await Users.findOne({
      where: {
        username,
      },
      include,
    });
    if (!user) errorHandler(403, 'El usuario no existe');
    const {
      password = '',
      user_id = 0,
      roles,
    } = (user?.toJSON() as IUserAPI) || {};

    if (pass !== password) errorHandler(403, 'Contraseña incorrecta');


    const token = jwt.sign({ user_id, roles }, AUTH_KEY, {});

    return { user_id, username, roles, token };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const userCreate = async (
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
  try {

    let [isValid, message] = await userValidator(username, name, surname, password, charge, rank, image, dni, role_id);

    if (!isValid) {
      return { message };
    };

    //convert to BASE64 string image
    let base64Image = '';
    if (image) {
      base64Image = Buffer.from(image, 'binary').toString('base64');
    }

    const date = new Date();

    let castDate = cast(date.toISOString(), 'datetime');

    const user = await Users.create({
      username,
      name,
      surname,
      password,
      charge,
      rank,
      image: base64Image ? base64Image : '',
      dni,
      enable: true,
      created_at: castDate,
      updated_at: castDate
    });

    const userRole = await UsersRoles.create({
      user_id: user.toJSON().user_id,
      role_id,
    });

    if (!user || !userRole) {
      return { message: 'No se pudo crear el usuario' };
    }

    return { user };

  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const userUpdate = async (
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
  try {

    let [isValid, message] = await userUpdateValidator(username, name, surname, password, charge, rank, image, dni, role_id, user_id);

    if (!isValid) {
      return { message };
    };

    //convert to BASE64 string image
    let base64Image = '';
    if (image) {
      base64Image = Buffer.from(image, 'binary').toString('base64');
    }

    const date = new Date();

    let castDate = cast(date.toISOString(), 'datetime');

    const user = await Users.update({
      username,
      name,
      surname,
      password,
      charge,
      rank,
      image: base64Image ? base64Image : '',
      dni,
      updated_at: castDate
    }, {
      where: {
        user_id
      }
    });

    if (role_id) {
      await UsersRoles.update({
        role_id,
      }, {
        where: {
          user_id
        }
      });
    }
    if (!user) {
      return { message: 'No se pudo actualizar el usuario' };
    }

    return { user };

  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const userDelete = async (user_id: number) => {
  try {

    const usertoDelete = await Users.findOne({
      where: {
        user_id
      }
    });

    if (!usertoDelete) {
      return { message: 'El usuario no existe' };
    }

    const date = new Date();

    let deleted_at = cast(date.toISOString(), 'datetime');

    const user = await Users.update({
      enable: false,
      deleted_at
    }, {
      where: {
        user_id
      }
    });

    if (!user) {
      return { message: 'No se pudo eliminar el usuario' };
    }

    return { user };

  } catch (error) {
    console.log(error);
    throw error;
  }
}
import { IRoles } from "../../../../database/schemas/iahm/interfaces/Roles.interface";
import { IUsers } from "../../../../database/schemas/iahm/interfaces/Users.interface";
import { IRequestParams } from "../../types/requestParam.interface";

export interface IUserParams extends IRequestParams {
    //id_rol: string;
}

export interface ISignInParams {
    user_id: number;
    username: string;
    roles: IRoles[],
    token: string;
}
export interface IUserAPI extends IUsers {
    password: string;
    roles: IRoles[];
  }
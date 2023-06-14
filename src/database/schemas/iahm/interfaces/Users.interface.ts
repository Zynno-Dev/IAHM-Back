import { Cast } from "sequelize/types/utils";

export interface IUsers {
    user_id?: number;
    username: string;
    name: string;
    surname: string;
    dni: string;
    password: string;
    enable: boolean;
    charge: string;
    rank: string;
    image: string;
    created_at?: Date | Cast;
    updated_at?: Date | Cast;
    deleted_at?: Date | Cast;
}
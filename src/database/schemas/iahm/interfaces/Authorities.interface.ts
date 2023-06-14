import { Cast } from "sequelize/types/utils";

export interface IAuthorities {
    authority_id?: number;
    grade: string;
    first_name: string;
    last_name: string;
    description: string;
    position: string;
    date: Date | Cast;
}
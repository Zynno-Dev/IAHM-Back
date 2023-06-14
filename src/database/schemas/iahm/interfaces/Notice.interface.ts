import { Cast } from "sequelize/types/utils";

export interface INotice{
    notice_id?: number;
    title: string;
    subtitle: string;
    description: string;
    created_at: Date | Cast;
    updated_at: Date | Cast;
    deleted_at?: Date | Cast;
    states_id: number;
}
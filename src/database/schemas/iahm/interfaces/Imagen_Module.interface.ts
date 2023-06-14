import { Cast } from "sequelize/types/utils";

export interface IImagen_Module {
    image_module_id?: number;
    imagen_id?: number;
    type_module_id?: number;
    module_id?: number;
    created_at?: Date | Cast;
    deleted_at?: Date | Cast;
}
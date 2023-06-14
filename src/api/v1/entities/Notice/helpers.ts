import { FindAndCountOptions, Includeable, cast } from "sequelize";
import { INoticeParams } from "./types";
import { getPagination } from "../../helpers";
import Notices from "../../../../database/schemas/iahm/models/Notice.model";
import Images from "../../../../database/schemas/iahm/models/Images.model";
import { noticeCreateValidator } from "./middlewares";
import Imagen_Module from "../../../../database/schemas/iahm/models/Imagen_Modules.model";

const imageIncludeable: Includeable = {
    model: Images,
    as: 'images',
}

export const getNotices = async (noticesParams: INoticeParams) => {
    const { page, pageSize } = noticesParams;
    try {
        let findOptions: FindAndCountOptions = {
            include: [imageIncludeable]
        }

        if (page && pageSize) {
            const { limit, offset } = getPagination(page, pageSize);
            findOptions = {
                limit,
                offset
            }
        }

        const notices = await Notices.findAndCountAll(findOptions);

        return notices;
    } catch (error) {
        throw error;
    }
}

export const getNotice = async (notice_id: number) => {
    try {
        const notice = await Notices.findOne({
            where: {
                notice_id: notice_id,
            },
        });
        return notice;
    } catch (error) {
        throw error;
    }
}

export const noticeCreate = async (
    title: string,
    subtitle: string,
    description: string,
    image: string,
    pdf: string,
    state_id: number,
) => {
    try {
        const [isValid, message] = await noticeCreateValidator(title, subtitle, description, image, pdf, state_id);
        if (!isValid) {
            throw { code: 400, message }
        }

        let date = new Date();

        date.setHours(date.getHours() - 3);

        const castedDate = cast(date.toISOString(), 'datetime');

        const notice = await Notices.create({
            title,
            subtitle,
            description,
            states_id: state_id,
            created_at: castedDate,
            updated_at: castedDate,
        });

        if (!notice) {
            throw { code: 400, message: "Error al crear la noticia" };
        }

        if(image){
            const imageCreated = await Images.create({
            title,
            img: image,
        });

        if (!imageCreated) {
            throw { code: 400, message: "Error al crear la imagen" };
        }

        const { image_id } = imageCreated?.toJSON();
        const { notice_id } = notice?.toJSON();

        const imageRalation = await Imagen_Module.create({
            imagen_id: image_id,
            module_id: notice_id,
            type_module_id: 0,
            created_at: castedDate,
        })

        if (!imageRalation) {
            throw { code: 400, message: "Error al crear la relación" };
        }
    }

        return { notice };

    } catch (error) {
        console.log(error);
        throw error;
    }
}
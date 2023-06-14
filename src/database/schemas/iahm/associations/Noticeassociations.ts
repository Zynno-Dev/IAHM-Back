import Attachments from "../models/Attachments.model"
import Imagen_Module from "../models/Imagen_Modules.model"
import Images from "../models/Images.model"
import Notices from "../models/Notice.model"
import States from "../models/States.model"

export const noticeAssociations = () => {
    Notices.hasMany(Attachments, {
        as: 'attachments',
        foreignKey: 'notice_id'
    })
    Notices.belongsToMany(Images, {
        through: Imagen_Module,
        as: 'images',
    })
    Notices.hasOne(States, {
        as: 'states',
        foreignKey: 'states_id'
    })
}
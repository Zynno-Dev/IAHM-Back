import Authorities from "../models/Authorities.interface"
import Imagen_Module from "../models/Imagen_Modules.model"
import Images from "../models/Images.model"
import Mision from "../models/Mision.model"
import Notices from "../models/Notice.model"
import Stories from "../models/Stories.model"

export const ImagesAssociations = () => {
    Images.belongsToMany(Notices, {
        through: Imagen_Module,
        as: 'notices',
    })
    Images.belongsToMany(Authorities,{
        through: Imagen_Module,
        as: 'authorities',
    })
    Images.belongsToMany(Mision,{
        through: Imagen_Module,
        as: 'mision',
    })
    Images.belongsToMany(Stories,{
        through: Imagen_Module,
        as: 'stories',
    })
}
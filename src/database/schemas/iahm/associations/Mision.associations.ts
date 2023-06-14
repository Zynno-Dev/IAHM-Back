import Imagen_Module from "../models/Imagen_Modules.model"
import Images from "../models/Images.model"
import Mision from "../models/Mision.model"

export const MisionAssociations = () => {
    Mision.belongsToMany(Images, {
        through: Imagen_Module,
        as: 'images',
    })
}
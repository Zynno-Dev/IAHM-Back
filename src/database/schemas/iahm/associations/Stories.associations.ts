import Imagen_Module from "../models/Imagen_Modules.model"
import Images from "../models/Images.model"
import Stories from "../models/Stories.model"

export const StoriesAssociations = () => {
    Stories.belongsToMany(Images, {
        through: Imagen_Module,
        as: 'images',
    })
}

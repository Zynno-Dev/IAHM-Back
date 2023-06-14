import Authorities from "../models/Authorities.interface"
import Imagen_Module from "../models/Imagen_Modules.model"
import Images from "../models/Images.model"

export const AuthoritiesAssociations = ()=>{
    Authorities.belongsToMany(Images,{
        through: Imagen_Module,
        as: 'images',
    })
}
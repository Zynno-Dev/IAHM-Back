import { AuthoritiesAssociations } from "./schemas/iahm/associations/Authorities.associations";
import { ImagesAssociations } from "./schemas/iahm/associations/Images.associations";
import { MisionAssociations } from "./schemas/iahm/associations/Mision.associations";
import { noticeAssociations } from "./schemas/iahm/associations/Noticeassociations";
import { rolesAssociations } from "./schemas/iahm/associations/Roles.associations";
import { StoriesAssociations } from "./schemas/iahm/associations/Stories.associations";
import { userAssociations } from "./schemas/iahm/associations/User.associations";

export const initAllAssociations = () => {
    rolesAssociations();
    userAssociations();
    noticeAssociations();
    StoriesAssociations();
    AuthoritiesAssociations();
    ImagesAssociations();
    MisionAssociations();
    console.log('Init Assocations');
  };
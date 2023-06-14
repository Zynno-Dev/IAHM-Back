export const noticeCreateValidator = async(
    title: string,
    subtitle: string,
    description: string,
    image: string,
    pdf: string,
    state_id: number,
) => {
    let isValid: boolean = true;
    let message: string = "";
    try {
        //TITLE
        if(!title){
            isValid = false;
            message = "El título es requerido";
        }
        
        //SUBTITLE
        if(!subtitle){
            isValid = false;
            message = "El subtítulo es requerido";
        }

        //DESCRIPTION
        if(!description){
            isValid = false;
            message = "La descripción es requerida";
        }

        //STATE_ID
        if(!state_id){
            isValid = false;
            message = "El estado es requerido";
        }

        return [isValid, message];
    } catch (error) {
        return [false, message]
    }
}
import States from "../../../../database/schemas/iahm/models/States.model";

export const getStates = async () => {
    try {
        const states = await States.findAll();
        return { states };
    } catch (error) {
        throw error;
    }
}
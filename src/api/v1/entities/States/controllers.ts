import { Request, Response } from "express";
import { getStates } from "./helpers";
import { IErrorResponse } from "../../types/errorResponse.interface";

export const getAllStates = async (req: Request, res: Response) => {
    try {
        const response = await getStates();
        res.status(200).send(response);
    } catch (error: any) {
        const { code = 400, message = "Unknown error" } = error as IErrorResponse;
        res.status(code).send({ message });
    }
}
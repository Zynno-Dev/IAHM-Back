import { Request, Response } from "express";
import { responseHandler } from "../../helpers";
import { getRoleList } from "./helpers";
import { IErrorResponse } from "../../types/errorResponse.interface";

export const getAllRoles = async (req: Request, res: Response) => {
    try {
        const response = await getRoleList();
        responseHandler(response, res);
    } catch (error: any) {
        const { code = 400, message = "Unknown error" } = error as IErrorResponse;
        res.status(code).send({ message });
    }
}
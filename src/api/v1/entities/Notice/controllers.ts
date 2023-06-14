import { Request, Response, response } from "express";
import { responseHandler } from "../../helpers";
import { getNotice, getNotices, noticeCreate } from "./helpers";
import { IErrorResponse } from "../../types/errorResponse.interface";

export const getAllNotices = async (req: Request, res: Response) => {
    const {
        query: { page, pageSize },
    } = req
    try {
        const response = await getNotices(
            JSON.parse(
                JSON.stringify({ page: Number(page), pageSize: Number(pageSize) })
            )
        )
        responseHandler(response, res, Number(page), Number(pageSize))
    } catch (error: any) {
        const { code = 400, message = "Unknown error" } = error as IErrorResponse;
        res.status(code).send({ message });
    }
}

export const getNoticeById = async (req: Request, res: Response) => {
    const {
        params: { notice_id },
    } = req

    try {
        const response = await getNotice(Number(notice_id))
        res.status(200).send(response)
    }catch(error: any){
        const { code = 400, message = "Unknown error" } = error as IErrorResponse;
        res.status(code).send({ message });
    }
}

export const postNotice = async (req: Request, res: Response) => {
    const {
        body: { title, subtitle, description, image, pdf, state_id },
    } = req

    try {
        const response = await noticeCreate(title, subtitle, description, image, pdf, state_id)
        res.status(200).send(response)
    }catch(error: any){
        const { code = 400, message = "Unknown error" } = error as IErrorResponse;
        res.status(code).send({ message });
    }
}
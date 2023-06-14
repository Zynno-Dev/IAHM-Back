import { Request, Response } from "express";
import { responseHandler } from "../../helpers";
import { IErrorResponse } from "../../types/errorResponse.interface";
import { getUserList, signIn, userCreate, userDelete, userUpdate } from "./helpers";

export const getUsers = async (req: Request, res: Response) => {
  const {
    query: { page, pageSize },
  } = req;
  try {
    const response = await getUserList(
      JSON.parse(
        JSON.stringify({ page: Number(page), pageSize: Number(pageSize) })
      )
    );
    responseHandler(response, res, Number(page), Number(pageSize));
  } catch (error: any) {
    const { code = 400, message = "Unknown error" } = error as IErrorResponse;
    res.status(code).send({ message });
  }
}

export const logIn = async (req: Request, res: Response) => {
  const {
    body: { username, password },
  } = req;
  try {
    const response = await signIn(username, password);
    res.status(200).send(response);
  } catch (error: any) {
    const { code = 400, message = "Unknown error" } = error as IErrorResponse;
    res.status(code).send({ message });
  }
}

export const createUser = async (req: Request, res: Response) => {
  const {
    body: { username, name, surname, password, charge, rank, image, dni, role_id },
  } = req;
  try {
    const response = await userCreate(username, name, surname, password, charge, rank, image, dni, role_id);
    res.status(200).send(response);
  } catch (error: any) {
    const { code = 400, message = "Unknown error" } = error as IErrorResponse;
    res.status(code).send({ message });
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const {
    body: { username, name, surname, password, charge, rank, image, dni, role_id },
    params: { user_id },
  } = req;
  try {
    const response = await userUpdate(username, name, surname, password, charge, rank, image, dni, role_id, Number(user_id));
    res.status(200).send(response);
  } catch (error: any) {
    const { code = 400, message = "Unknown error" } = error as IErrorResponse;
    res.status(code).send({ message });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const {
    params: { user_id },
  } = req;
  try {
    const response = await userDelete(Number(user_id));
    res.status(200).send(response);
  } catch (error: any) {
    const { code = 400, message = "Unknown error" } = error as IErrorResponse;
    res.status(code).send({ message });
  }
}
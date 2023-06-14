import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import Users from "../../../database/schemas/iahm/models/Users.model";
import Roles from "../../../database/schemas/iahm/models/Roles.model";
import { IUserAPI } from "../entities/Users/types";
import { ERoles } from "../entities/Roles/types";

export const jwtValidator = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
    try {
        let payload = jwt.verify(token, process.env.AUTH_KEY || '');
        const { user_id } = payload as any;
        let roles = [];
        if (!user_id) {
            return res.status(401).send({ message: 'Unauthorized' });
        }
        const user = await Users.findOne({
            where: {
                user_id,
            },
            include: [
                {
                    model: Roles,
                    as: 'roles',
                },
            ],
        }) as IUserAPI | null;
        if (!user) {
            return res.status(401).send({ message: 'Unauthorized' });
        }
        roles = user?.roles.map((role: any) => role.role_id) || [];

        req.body.user_id = user_id;
        req.body.roles = roles;
        req.body.roleValid = false;
        next();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const adminRoleValidator = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { roles = [] } = req.body;
      console.log(roles);
      if (roles.includes(String(ERoles.ADMIN))) {
        req.body.roleValid = true
      }
      return next();
    } catch (error) {
      console.log(error);
    }
  };
  
  export const editorRoleValidator = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { roles = [] } = req.body;
      if (roles.includes(String(ERoles.EDITOR))) {
        req.body.roleValid = true
      }
      next();
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  export const publicadorRoleValidator = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { roles = [] } = req.body;
      console.log(roles);
      if (roles.includes(String(ERoles.PUBLICADOR)) ) {
        req.body.roleValid = true
      }
      return next();
    } catch (error) {
      console.log(error);
    }
  }

  export const validRole = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { roleValid } = req.body;
      if (roleValid) {
        return next();
      } else {
        return res.status(401).send({ message: 'Unauthorized' });
      }
    } catch (error) {
      console.log(error);
    }
  }
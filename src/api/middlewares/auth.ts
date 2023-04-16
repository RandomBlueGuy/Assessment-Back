import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../../auth/auth.services";
import { AuthUser } from "../../auth/auth.types";

export const isAuthenticated = (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("You need to be authorized to access this information");
    }

    const[, token] = authorization.split(" ");
    
    if (!token) {
      throw new Error("Ivalid Token!");
    }
    
    const {id} = verifyToken(token) as { id: string };
    console.log("ID =>" , id)

    if (!id){
      throw new Error("Ivalid Token!");
    }

     req.user = id;

    next();
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

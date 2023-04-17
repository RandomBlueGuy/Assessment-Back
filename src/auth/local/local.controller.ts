import { createUser } from "../../api/users/users.services";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { login } from "../auth.services";
import { signToken } from "../auth.services";

interface SignupRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

interface LoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export const signupController = async (req: SignupRequest, res: Response) => {
  try {
    const { email, password } = req.body;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(500).json({
        message:
          "Password must have at least 8 characters, 1 upper case and 1 number to be accepted",
      });
    }

    const encPassword = await bcrypt.hash(password, 10);
    const user = await createUser({ ...req.body, password: encPassword });
    const { id } = user;

    const expirationIn = 60 * 60 * 24;
    const token = signToken({ email, password, id, expirationIn });

    res.status(201).json({
      message: "The user has been Created successfully",
      data: { email, encPassword },
      token,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const loginController = async (req: LoginRequest, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await login(email);
    
    if (!user) {
      throw new Error("Invalid email or password");
    }
    
    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      throw new Error("Invalid email or password");
    }
    
    const expirationIn = 60 * 60 * 24;
    
    const {id} = user;
    const token = signToken({ email, password, id, expirationIn });
    
    res.status(201).json({
      message: "User login successful",
      data: { email, password },
      token,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

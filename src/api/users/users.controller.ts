import { Response, Request, NextFunction } from "express";

import { getAllUsers, getUserById, createUser } from "./users.services";

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getAllUsers()
    res.status(200).json({ message: 'Users found', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body)
    res.status(201).json({ message: 'User created successfully', data: user })
  } catch(error: any) {
    res.status(500).json({ message: "ERROR: User couldn't be created" })
  }
}

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)

    if(!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(201).json({ message: 'User found', data: user })
  } catch(error: any) {
    res.status(500).json({ message: error.message })
  }
  
}

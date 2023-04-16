import { Response, Request, NextFunction } from "express";
import { AuthUser } from '../../auth/auth.types';

import {
  getAllLists,
  getSingleList,
  deleteSingleList,
  createList
} from "./lists.services";

export const getAllListsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const lists = await getAllLists();
    res.status(200).json({ message: "Lists found", data: lists });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};


export const getSingleListController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
   try {
      const { id } = req.params
      const list = await getSingleList(Number(id))
  
      if(!list) {
        return res.status(404).json({ message: `List ${id} not found` })
      }
      res.status(201).json({ message: `List ${id} found!`, Lists: list })
    } catch(error: any) {
      res.status(500).json({ message: error.message })
    }
};


export const deleteSingleListController = async (
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
   try {
     const { id } = req.params;

     const list = await deleteSingleList(Number(id));
     res.json({message: `the list with the id:${id} was eliminated!`, deletedList: list});
   } catch(error: any) {
     res.status(500).json({ message: error.message })
   }
 }
   

export const createListController = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const ownerId = req.user;
    const { listName } = req.body;

    if (!ownerId) {
      return res.status(400).json({ message: 'User id is missing' });
    }

    const list = await createList(listName, ownerId);
    res.status(201).json({ message: 'List created', data: list });
  } catch (error: any) {
    res.status(500).json({ message: "List couldn't be created" });
  }
};
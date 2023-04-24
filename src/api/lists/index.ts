import { Router } from "express";

import {
  getAllListsController,
  createListController,
  getSingleListController,
  deleteSingleListController,
} from "./lists.controller";
import { isAuthenticated } from "../middlewares/auth";

const router = Router();

router.get("/", isAuthenticated, getAllListsController);
router.post("/", isAuthenticated, createListController);
router.get("/:id", isAuthenticated, getSingleListController);
router.delete("/:id", isAuthenticated, deleteSingleListController);

export default router;

import { Router, Request, Response } from "express";

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Your Server is running just fine' })
})

export default router
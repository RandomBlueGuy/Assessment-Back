import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const DeveloperKey = "HERE WOULD BE THE SECRET KEY BUT THERE'S NO NEED TO USE MORE SECURITY JUST IN THIS TASK" as string

export const login = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email: email     
    }
  })
}

export const signToken = (payload: any) => {
  const expiresIn: number = 60 * 60 * 24;
  const token = jwt.sign(
    payload,
    DeveloperKey,
    {expiresIn}
  )
  return token
}

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, DeveloperKey)
    return decoded
  } catch(error) {
    return false
  }
}

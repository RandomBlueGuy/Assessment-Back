import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = () => {
  return prisma.user.findMany({
    select: {
      email: true,
      lists: {
        select: {
          id: true,
          listName: true,
        },
      },
    },
  });
};

export const createUser = async (input: any) => {
  const totalItems = await prisma.fav.count();
  const indexArr = [];

  for (let i = 0; i < (Math.floor(Math.random() * 4) + 3); i++) {
    indexArr.push(Math.floor(Math.random() * totalItems))
  }
  
  const fav_data = await prisma.fav.findMany({
    where: {
      OR: Array.from(indexArr).map(index => ({ id: index })),
    },
  });

  return prisma.user.create({
    data: {
      email: input.email,
      password: input.password,
      lists: {
        create: {
          listName: "My first list",
          favs: {
            connect: fav_data.map((fav) => ({ id: fav.id })),
          },
        },
      },
    },
  });
};

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      email: true,
      lists: {
        select: {
          id: true,
          listName: true,
          favs: true,
        },
      },
    },
  });
};

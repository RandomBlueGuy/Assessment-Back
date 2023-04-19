import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllLists = () => {
  return prisma.list.findMany({
    select: {
      id: true,
      listName: true,
      favs: true,
    },
  });
};

export const createList = async (listName: string, ownerId: string) => {
  const totalItems = await prisma.fav.count();
  const indexArr = [];

  for (let i = 0; i < Math.floor(Math.random() * 4) + 3; i++) {
    indexArr.push(Math.floor(Math.random() * totalItems));
  }

  const fav_data = await prisma.fav.findMany({
    where: {
      OR: Array.from(indexArr).map((index) => ({ id: index })),
    },
  });

  const listOwner = await prisma.user.findUnique({
    where: {
      id: ownerId,
    },
  });

  if (listOwner === null) {
    return "Invalid User identification";
  } else {
    return prisma.list.create({
      data: {
        listName,
        owner:{
          connect: {
            id:ownerId,
          }
        },
        favs: {
          connect: fav_data.map((fav) => ({ id: fav.id })),
        },
      },
    });
  }
};

export const getSingleList = (id: number) => {
  
  return prisma.list.findUnique({
    where: {
      id: id,
    },
    select: {
      listName: true,
      favs: true,
    },
  });
};

export const deleteSingleList = (id: number) => {
  return prisma.list.delete({
    where: {
      id: id,
    },
  });
};

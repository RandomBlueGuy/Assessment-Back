import { PrismaClient } from "@prisma/client"
import  { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const seedFav = async (prisma: PrismaClient): Promise<void> => {
  const favs = []
   
  for(let i = 0; i < 100; i++) {
   const newTitle= faker.commerce.productName();
    const fav = {
      title: newTitle,
      description: faker.commerce.productDescription(),
      link: `http://www.${newTitle
      .split(" ")
      .join("")
      .split(",")
      .join("")
      .split(".")
      .join("")
      .split("-")
      .join("")
      .toLowerCase()}.com`,
    }
    favs.push(fav)
  }

  await prisma.fav.createMany({
    data: favs
  })

  console.log('<< A bunch of Favs have been created successfully, hurray!!! >>');
}

export default seedFav
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUsers = async () => {
  const allUsers = await prisma.user.findMany({
    include: {
      kites: true,
    },
  });
  return allUsers;
};

export const addUser = async (
  name,
  email,
  kitePrice,
  kiteBrand,
  kiteModel,
  kiteYear,
  kiteSize,
  kiteCountry,
  kiteCity,
  kiteAdress
) => {
  await prisma.user.create({
    data: {
      name,
      email,
      kites: {
        create: {
          price: kitePrice,
          brand: kiteBrand,
          model: kiteModel,
          year: kiteYear,
          size: kiteSize,
          country: kiteCountry,
          city: kiteCity,
          address: kiteAdress,
        },
      },
    },
  });
};

export const setKiteSellability = async (id, onSale) => {
  const kite = await prisma.kite.update({
    where: { id },
    data: { onSale },
  });
  return kite;
};

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUsers = async () => {
    const allUsers = await prisma.user.findMany({
        include: {
            kites: true
        }
    });
    return allUsers;
};

export const getKites = async () => {
    const allKites = await prisma.kite.findMany({
        where: { onSale: true }
    });
    return allKites;
};

export const addUser = async (email, name = undefined) => (
	(await prisma.user.create({
		data: {
			name,
			email
		}
	})).id
);

export const addKite = async (
    sellerId,
    price,
    brand,
    model,
    year,
    size,
    country,
    city,
    address,
    notes = undefined
) => {
    await prisma.kite.create({
        data: {
            price,
            brand,
            model,
            year,
            size,
            country,
            city,
            address,
            notes,
            sellerId
        }
    });
};

export const setKiteSellability = async (id, onSale) => {
    await prisma.kite.update({
        where: { id },
        data: { onSale }
    });
};

export const deleteUser = async (id) => {
    await prisma.kite.deleteMany({
        where: { sellerId: id }
    });

    await prisma.user.delete({
        where: { id }
    });
};

export const deleteKite = async (id) => {
    await prisma.kite.delete({
        where: { id }
    });
};

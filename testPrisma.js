import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getUsers = async () => {
	const allUsers = await prisma.user.findMany({
		include: {
			kites: true,
		},
	})
	return allUsers
}

export const addUser = async () => {
	await prisma.user.create({
		data: {
			name: 'Yechiel Klein',
			email: 'kleinyechiel@gmail.com',
			kites: {
				create: {
					price: 1000,
					brand: 'testBrand',
					model: 'testModel',
					year: 2007,
					size: 5.5,
					country: 'canada',
					city: 'montreal',
					address: '1972 ekers'
				},
			},
		},
	})
}

export const addKite =  async () => {
	const kite = await prisma.kite.update({
		where: { id: 1 },
		data: { onSale: true },
	})
	console.log(kite)
	return kite
}
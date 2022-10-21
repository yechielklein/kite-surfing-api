import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getUsers = async () => {
	const allUsers = await prisma.user.findMany({
		include: {
			kite: true,
		},
	})
	console.dir(allUsers, { depth: null })
	return allUsers
}

export const addUser = async () => {
	await prisma.user.create({
		data: {
			name: 'test',
			email: 'test@prisma.io',
			kites: {
				create: { size: 5.5 },
			},
		},
	})
}

export const addKite =  async () => {
	const kite = await prisma.kite.update({
		where: { id: 1 },
		data: { published: true },
	})
	console.log(kite)
}
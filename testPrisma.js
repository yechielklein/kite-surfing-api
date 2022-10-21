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

	const allUsers = await prisma.user.findMany({
		include: {
			posts: true,
			profile: true,
		},
	})
	console.dir(allUsers, { depth: null })
}
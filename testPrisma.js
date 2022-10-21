import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getUsers = async () => {
	// ... you will write your Prisma Client queries here
	const allUsers = await prisma.user.findMany()
	console.log(allUsers)
	return allUsers
}
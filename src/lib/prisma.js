import { PrismaClient } from "@prisma/client"

const prima = global.prisma || new PrismaClient()
if (process.env.NODE_ENV != 'production') global.prisma = prisma;

export default prisma
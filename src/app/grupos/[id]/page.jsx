import Grupo from "@/components/Grupos/Item";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()

async function PaginaGrupo({ params, searchParams }) {
    const { id } = await params

    return (
        <div>
            <h1>DATOS DE GRUPO</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Grupo id={id} />
            </Suspense>
        </div>
    )

}

export default PaginaGrupo;


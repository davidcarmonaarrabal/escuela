import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()

async function PaginaAsignatura({ params, searchParams }) {
    const { id } = await params

    return (
        <div>
            <h1>DATOS DE ASIGNATURA</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Asignatura id={id} />
            </Suspense>
        </div>
    )

}

export default PaginaAsignatura;
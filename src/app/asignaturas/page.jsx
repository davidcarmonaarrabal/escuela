import Asignaturas from "@/components/Asignaturas/Lista";
import { PrismaClient } from "@prisma/client"
import { Suspense } from "react";
const prisma = new PrismaClient()


async function PaginaAsignaturas() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE ASIGNATURAS</h1>

            <Suspense fallback={"Obteniendo asignatura ..."}>
                <Asignaturas />
            </Suspense>
        </div>
    )

}

export default PaginaAsignaturas;
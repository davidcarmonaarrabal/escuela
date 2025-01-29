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

// ----------------  Componentes de servidor --------------

async function Asignatura({ id }) {
    const asignatura = await prisma.asignatura.findUnique({
        where: {
            id: +id
        }
    })
    //console.log(asignatura);

    return (
        <div>
            <p> {asignatura.nombre} </p>
            <p> {asignatura.profesor} </p>
            <p> {asignatura.num_horas} </p>
        </div>
    );
}


function Skeleton() {
    return (
        <div className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-4">
                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-52"></div>
                    <div className="skeleton h-4 w-80"></div>
                </div>
            </div>
            <div className="skeleton h-72 w-full"></div>
        </div>
    )

}
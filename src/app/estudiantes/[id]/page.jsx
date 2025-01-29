import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient()

async function PaginaEstudiante({ params, searchParams }) {
    const { id } = await params

    return (
        <div>
            <h1>DATOS DE ESTUDIANTE</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Estudiante id={id} />
            </Suspense>
        </div>
    )

}

export default PaginaEstudiante;

// ----------------  Componentes de servidor --------------

async function Estudiante({ id }) {
    const estudiante = await prisma.estudiante.findUnique({
        where: {
            id: +id
        }
    })
    //console.log(estudiante);

    return (
        <div>
            <p><img src={estudiante.foto} /></p>
            <p> {estudiante.nombre} </p>
            <p> {estudiante.fecha_nacimiento.toLocaleDateString()} </p>
            <p> {estudiante.tutor_legal} </p>
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
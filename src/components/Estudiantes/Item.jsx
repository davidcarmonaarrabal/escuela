import { obtenerEstudiante } from "@/lib/data";

async function Estudiante({ id }) {
    const estudiante = await obtenerEstudiante(id);
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
import { obtenerAsignatura } from "@/lib/data";

async function Asignatura({ id }) {
    const asignatura = await obtenerAsignatura(id);
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
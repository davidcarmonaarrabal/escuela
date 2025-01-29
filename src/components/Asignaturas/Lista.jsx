import Modal from "@/components/Modal";
import { eliminarAsignatura, insertarAsignatura, modificarAsignatura } from "@/lib/actions";
import { obtenerAsignaturas } from "@/lib/data";
import AsignaturasInsertar from "./Insertar";
import AsignaturasModificar from "./Modificar";
import AsignaturasEliminar from "./Eliminar";

export default async function Asignaturas() {
    const asignaturas = await obtenerAsignaturas();
    //console.log(asignaturas);
    return (
        <div>

            <AsignaturasInsertar/>


            {
                asignaturas.map(asignatura =>
                    <div key={asignatura.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <p>{asignatura.nombre}</p>
                            < p>{asignatura.profesor}</p>
                            <p>{asignatura.num_horas}</p>
                        </div>

                        <AsignaturasModificar asignatura={asignatura}/>

                        <AsignaturasEliminar asignatura={asignatura}/>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}
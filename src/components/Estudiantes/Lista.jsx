import Modal from "@/components/Modal";
import { eliminarEstudiante, insertarEstudiante, modificarEstudiante } from "@/lib/actions";
import { obtenerEstudiantes } from "@/lib/data";
import GrupoInsertar from "./Insertar";
import GrupoModificar from "./Modificar";
import EstudianteEliminar from "./Eliminar";

export default async function Estudiantes() {
    const estudiantes = await obtenerEstudiantes();
    console.log(estudiantes);
    return (
        <div>
            <EstudianteInsertar></EstudianteInsertar>

            {
                estudiantes.map(estudiante =>
                    <div key={estudiante.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div >
                            <p>{estudiante.nombre}</p>
                            <p>{estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                            <p><img src={estudiante.foto} className="size-48 object-cover rounded-full" /></p>
                            <p>{estudiante.tutor_legal}</p>
                        </div>

                        <EstudianteModificar estudiante={estudiante}/>

                        <EstudianteEliminar estudiante={estudiante}/>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}
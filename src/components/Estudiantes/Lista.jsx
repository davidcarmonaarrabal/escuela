import Modal from "@/components/Modal";
import { eliminarEstudiante, insertarEstudiante, modificarEstudiante } from "@/lib/actions";
import { obtenerEstudiantes } from "@/lib/data";
import GrupoInsertar from "./Insertar";
import GrupoModificar from "./Modificar";

export default async function Estudiantes() {
    const estudiantes = await obtenerEstudiantes();
    console.log(estudiantes);
    return (
        <div>
            <GrupoInsertar></GrupoInsertar>

            {
                estudiantes.map(estudiante =>
                    <div key={estudiante.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div >
                            <p>{estudiante.nombre}</p>
                            <p>{estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                            <p><img src={estudiante.foto} className="size-48 object-cover rounded-full" /></p>
                            <p>{estudiante.tutor_legal}</p>
                        </div>

                        <GrupoModificar estudiante={estudiante}/>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <h1 className="text-2xl text-red-600">¿Está seguro que desea eliminar los siguentes datos?</h1>
                            <p>ESTUDIANTE: {estudiante.nombre}</p>
                            <p>FECHA NACIMIENTO: {estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                            <p>FOTO: <img src={estudiante.foto} className="size-48 object-cover rounded-full" /></p>
                            <p>TUTOR LEGAL: {estudiante.tutor_legal}</p>
                            <form action={eliminarEstudiante}>
                                <input type="hidden" name="id" defaultValue={estudiante.id} />
                                <button className="border-2 border-black">Eliminar</button>
                            </form>
                        </Modal>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}
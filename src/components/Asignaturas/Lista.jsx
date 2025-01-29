import Modal from "@/components/Modal";
import { eliminarAsignatura, insertarAsignatura, modificarAsignatura } from "@/lib/actions";
import { obtenerAsignaturas } from "@/lib/data";

export default async function Asignaturas() {
    const asignaturas = await obtenerAsignaturas();
    //console.log(asignaturas);
    return (
        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar asignatura</p>}>
                <form action={insertarAsignatura}>
                    <input name="nombre" placeholder="Nombre" />
                    <input name="profesor" placeholder="Profesor/a" />
                    <input name="num_horas" placeholder="Num_horas" />
                    <button className="border-2 border-black">Insertar asignatura</button>
                </form>
            </Modal>


            {
                asignaturas.map(asignatura =>
                    <div key={asignatura.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <p>{asignatura.nombre}</p>
                            < p>{asignatura.profesor}</p>
                            <p>{asignatura.num_horas}</p>
                        </div>

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <form action={modificarAsignatura}>
                                <input type="hidden" name="id" defaultValue={asignatura.id} />
                                <input name='nombre' defaultValue={asignatura.nombre} />
                                <input name='profesor' defaultValue={asignatura.profesor} />
                                <input name='num_horas' defaultValue={asignatura.num_horas} />

                                <button className="border-2 border-black">Modificar</button>
                            </form>
                        </Modal>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
                            <p>ASIGNATURA: {asignatura.nombre}</p>
                            <p>PROFESOR/A: {asignatura.profesor}</p>
                            <p>NUM_HORAS: {asignatura.num_horas}</p>
                            <form action={eliminarAsignatura}>
                                <input type="hidden" name="id" defaultValue={asignatura.id} />
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
import { eliminarAsignatura } from "@/lib/actions";

function AsignaturasEliminar({ asignatura }) {
    return (
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
    );
}

export default AsignaturasEliminar;
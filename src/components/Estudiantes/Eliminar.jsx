import { eliminarEstudiante } from "@/lib/actions";

function EstudianteEliminar({estudiante}) {
    return (
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
    );
}

export default EstudianteEliminar;
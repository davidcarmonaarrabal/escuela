import { eliminarGrupo } from "@/lib/actions";

function GruposEliminar({grupo}) {
    return (
        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>GRUPO: {grupo.nombre}</p>
            <p>TUTOR/A: {grupo.tutor}</p>
            <p>AULA: {grupo.aula}</p>
            <form action={eliminarGrupo}>
                <input type="hidden" name="id" defaultValue={grupo.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </Modal>
    );
}

export default GruposEliminar;
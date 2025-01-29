import { modificarEstudiante } from "@/lib/actions";

function GrupoModificar({estudiante}) {
    return (
        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
            <form action={modificarEstudiante}>
                <input type="hidden" name="id" defaultValue={estudiante.id} />
                <input name='nombre' defaultValue={estudiante.nombre} />
                <input name='fecha_nacimiento' type='date' defaultValue={estudiante.fecha_nacimiento.toISOString().split('T')[0]} />
                <input name='foto' defaultValue={estudiante.foto} />
                <input name='tutor_legal' defaultValue={estudiante.tutor_legal} />

                <button className="border-2 border-black">Modificar</button>
            </form>
        </Modal>
    );
}

export default GrupoModificar;
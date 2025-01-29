import { modificarAsignatura } from "@/lib/actions";

function AsignaturasModificar({asignatura}) {
    return (
        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
            <form action={modificarAsignatura}>
                <input type="hidden" name="id" defaultValue={asignatura.id} />
                <input name='nombre' defaultValue={asignatura.nombre} />
                <input name='profesor' defaultValue={asignatura.profesor} />
                <input name='num_horas' defaultValue={asignatura.num_horas} />

                <button className="border-2 border-black">Modificar</button>
            </form>
        </Modal>
    );
}

export default AsignaturasModificar;
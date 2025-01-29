import { insertarAsignatura } from "@/lib/actions";

function AsignaturasInsertar() {
    return (
        <Modal openElement={<p className="inline border-2 border-black">Insertar asignatura</p>}>
            <form action={insertarAsignatura}>
                <input name="nombre" placeholder="Nombre" />
                <input name="profesor" placeholder="Profesor/a" />
                <input name="num_horas" placeholder="Num_horas" />
                <button className="border-2 border-black">Insertar asignatura</button>
            </form>
        </Modal>
    );
}

export default AsignaturasInsertar;
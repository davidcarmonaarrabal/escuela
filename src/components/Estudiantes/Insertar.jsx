import { insertarEstudiante } from "@/lib/actions";

function EstudianteInsertar() {
    return (
        <Modal openElement={<p className="inline border-2 border-black">Insertar estudiante</p>}>
            <form action={insertarEstudiante}>
                <input name="nombre" placeholder="Nombre" />
                <input name="fecha_nacimiento" type='date' />
                <input name="foto" placeholder="Foto" />
                <input name="tutor_legal" placeholder="Tutor legal" />
                <button className="border-2 border-black" >Insertar estudiante</button>
            </form>
        </Modal>
    );
}

export default EstudianteInsertar;
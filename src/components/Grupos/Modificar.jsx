import { modificarGrupo } from "@/lib/actions";

function GruposModificar({grupo}) {
    return (
        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
            <form action={modificarGrupo}>
                <input type="hidden" name="id" defaultValue={grupo.id} />
                <input name='nombre' defaultValue={grupo.nombre} />
                <input name='tutor' defaultValue={grupo.tutor} />
                <input name='aula' defaultValue={grupo.aula} />

                <button className="border-2 border-black">Modificar</button>
            </form>
        </Modal>
    );
}

export default GruposModificar;
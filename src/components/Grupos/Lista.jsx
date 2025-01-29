import Modal from "@/components/Modal";
import { eliminarGrupo, insertarGrupo, modificarGrupo } from "@/lib/actions";
import { obtenerGrupos } from "@/lib/data";
import GruposInsertar from "./Insertar";
import GruposModificar from "./Modificar";
import GruposEliminar from "./Eliminar";

export default async function Grupos() {
    const grupos = await obtenerGrupos();
    console.log(grupos);
    return (
        <div>

            <GruposInsertar/>


            {
                grupos.map(grupo =>
                    <div key={grupo.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <p>{grupo.nombre}</p>
                            < p>{grupo.tutor}</p>
                            <p>{grupo.aula}</p>
                        </div>

                        <GruposModificar grupo={grupo}/>

                        <GruposEliminar grupo={grupo}/>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}
import Modal from "@/components/Modal";
import { eliminarGrupo, insertarGrupo, modificarGrupo } from "@/lib/actions";
import { PrismaClient } from "@prisma/client"
import { Suspense } from "react";
const prisma = new PrismaClient()


async function PaginaGrupos() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE GRUPOS</h1>

            <Suspense fallback={"Obteniendo grupos ..."}>
                <Grupos />
            </Suspense>
        </div>
    )

}

export default PaginaGrupos;


// ------------------- Componente de servidor 

async function Grupos() {
    const grupos = await prisma.grupo.findMany()
    //console.log(grupos);
    return (
        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar grupo</p>}>
                <form action={insertarGrupo}>
                    <input name="nombre" placeholder="Nombre" />
                    <input name="tutor" placeholder="Tutor/a" />
                    <input name="aula" placeholder="Aula" />
                    <button className="border-2 border-black">Insertar grupo</button>
                </form>
            </Modal>


            {
                grupos.map(grupo =>
                    <div key={grupo.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div>
                            <p>{grupo.nombre}</p>
                            < p>{grupo.tutor}</p>
                            <p>{grupo.aula}</p>
                        </div>

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <form action={modificarGrupo}>
                                <input type="hidden" name="id" defaultValue={grupo.id} />
                                <input name='nombre' defaultValue={grupo.nombre} />
                                <input name='tutor' defaultValue={grupo.tutor} />
                                <input name='aula' defaultValue={grupo.aula} />

                                <button className="border-2 border-black">Modificar</button>
                            </form>
                        </Modal>

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

                        <hr />
                    </div>
                )
            }
        </div>
    );
}
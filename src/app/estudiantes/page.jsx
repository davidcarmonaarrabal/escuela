import Modal from "@/components/Modal";
import { eliminarEstudiante, insertarEstudiante, modificarEstudiante } from "@/lib/actions";
import { obtenerEstudiantes } from "@/lib/data";
import { PrismaClient } from "@prisma/client"
import { Suspense } from "react";
const prisma = new PrismaClient()


async function PaginaEstudiantes() {

    return (
        <div>
            <h1 className="text-3xl font-bold">LISTA DE ESTUDIANTES</h1>

            <Suspense fallback={"Obteniendo estudiantes ..."}>
                <Estudiantes />
            </Suspense>
        </div>
    )

}

export default PaginaEstudiantes;


// ------------------- Componente de servidor 

async function Estudiantes() {
    const estudiantes = await obtenerEstudiantes();
    console.log(estudiantes);
    return (
        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar estudiante</p>}>
                <form action={insertarEstudiante}>
                    <input name="nombre" placeholder="Nombre" />
                    <input name="fecha_nacimiento" type='date' />
                    <input name="foto" placeholder="Foto" />
                    <input name="tutor_legal" placeholder="Tutor legal" />
                    <button className="border-2 border-black" >Insertar estudiante</button>
                </form>
            </Modal>


            {
                estudiantes.map(estudiante =>
                    <div key={estudiante.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div >
                            <p>{estudiante.nombre}</p>
                            <p>{estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                            <p><img src={estudiante.foto} className="size-48 object-cover rounded-full" /></p>
                            <p>{estudiante.tutor_legal}</p>
                        </div>

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

                        <hr />
                    </div>
                )
            }
        </div>
    );
}
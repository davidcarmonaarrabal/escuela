import Grupos from "@/components/Grupos/Lista";
import { Suspense } from "react";

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



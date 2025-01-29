'use server'
import prisma from '@/lib/prisma';

export async function obtenerGrupos(){
    const grupos = await prisma.grupo.findMany();
    return grupos;
}

export async function obtenerGrupo(id){
    const grupo = await prisma.grupo.findUnique({
        where: {id: +id}
    });
    return grupo;
}

export async function obtenerAsignaturas(){
    const asignaturas = await prisma.asignatura.findMany();
    return asignaturas;
}

export async function obtenerAsignatura(id){
    const asignatura = await prisma.asignatura.findUnique({
        where: {id: +id}
    });
    return asignatura;
}

export async function obtenerEstudiantes(){
    const estudiantes = await prisma.estudiante.findMany();
    return estudiantes;
}

export async function obtenerEstudiante(id){
    const estudiante = await prisma.estudiante.findUnique({
        where: {id: +id}
    });
    return estudiante;
}
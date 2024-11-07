"use server"
import { PrismaClient } from "@prisma/client"
import { Post } from "../model/post";

const db = new PrismaClient();

export async function salvar(post: Post) {
    return await db.post.upsert({
        where: {id: post.id},
        update: post,
        create: post,
    })
}

export async function obterTodos(): Promise<Post[]> {
    return await db.post.findMany();
}

export async function obterPorSlug(slug: string): Promise<Post> {
    const post = await db.post.findUnique({
        where: { slug },
    });
    return post as Post;
}

export async function excluir(id: string): Promise<void> {
    await db.post.delete({
        where: { id },
    });
}
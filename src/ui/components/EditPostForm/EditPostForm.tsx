"use client"

import styles from './edit.module.css';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import * as postRepository from '@/backend/repository/post.respository';
import { Post } from '@/backend/model/post';


export default function EditPostForm( {post} : {post: Post}) {
  const router = useRouter();

  const sendPostAction = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const picture = formData.get("picture") as string;
    const content = formData.get("content") as string;

    try {
      const updatedPost: Post = {
        id: post.id,
        title,
        description,
        content,
        picture,
        slug: title.toLowerCase().replace(/\s/g, '-').replace(/[^\w-]+/g, '')
      }

      await postRepository.salvar(updatedPost);

      alert(`Post: ${title} - Foi atualizado com sucesso!`);
      router.push('/');
      router.refresh();
    } catch (error) {
      alert('Erro ao cadastrar post!');
      console.error(error);
    }
  }

    return (
      <>
        <h2 className={styles.pageTitle}>Editar Post</h2>
        <form action={sendPostAction} className={styles.postForm}>
          <input type="text" defaultValue={post.title} placeholder="Titulo" name="title" required />
          <input type="text" defaultValue={post.description} placeholder="Descrição" name="description" required />
          <input type="url" defaultValue={post.picture} placeholder="Link da Imagem" name="picture" required />
          <textarea name="content" defaultValue={post.content} className={styles.postContent} required />
          <button type="submit">Atualizar</button>
        </form>
      </>
  )
}
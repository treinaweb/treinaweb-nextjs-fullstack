"use client"

import styles from './publish.module.css';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import * as postRepository from '@/backend/repository/post.respository';


export default function PostPublish() {
  const router = useRouter();

  const sendPostAction = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const picture = formData.get("picture") as string;
    const content = formData.get("content") as string;

    try {
      await postRepository.salvar({
        id: uuidv4(),
        title,
        description,
        content,
        picture,
        slug: title.toLowerCase().replace(/\s/g, '-').replace(/[^\w-]+/g, '')
      });

      alert(`Post: ${title} - Foi cadastrado com sucesso!`);
      router.push('/');
    } catch (error) {
      alert('Erro ao cadastrar post!');
      console.error(error);
    }
  }

    return (
      <>
        <h2 className={styles.pageTitle}>Novo Post</h2>
        <form action={sendPostAction} className={styles.postForm}>
          <input type="text" placeholder="Titulo" name="title" required />
          <input type="text" placeholder="Descrição" name="description" required />
          <input type="url" placeholder="Link da Imagem" name="picture" required />
          <textarea name="content" className={styles.postContent} required />
          <button type="submit">Publicar</button>
        </form>
      </>
  )
}
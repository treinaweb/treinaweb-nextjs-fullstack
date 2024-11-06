"use client"
import styles from './publish.module.css';

export default function PostPublish() {
    return (
      <>
        <h2 className={styles.pageTitle}>Novo Post</h2>
        <form action="" className={styles.postForm}>
          <input type="text" placeholder="Titulo" name="title" required />
          <input type="text" placeholder="Descrição" name="description" required />
          <input type="url" placeholder="Link da Imagem" name="picture" required />
          <textarea name="content" required />
          <button type="submit">Publicar</button>
        </form>
      </>
  )
}
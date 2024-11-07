import { Post } from '@/backend/model/post';
import styles from './PostBody.module.css';

export default function PostBody({ post }: { post: Post }) {
  return (
    <div className={styles.postContainer}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <img className={styles.postPicture} src={post.picture} alt={post.title} />
      <div className={styles.postContent} dangerouslySetInnerHTML={{__html: post.content}} />
    </div>
  )
}
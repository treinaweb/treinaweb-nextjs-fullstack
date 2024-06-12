import { BlogPost } from "@/data/@types/BlogPostInterface";
import styles from './PostList.module.css';
import Link from "next/link";

export default function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className={styles.postList}>
      {posts.map((post) => {
        return <PostListItem key={post.id} post={post} />
      })}
    </ul>
  )
}

export function PostListItem({ post }: { post: BlogPost }) {
  return (
    <li className={styles.postListItem}>
      <Link href={`posts/${post.slug}`}>
        <img className={styles.postPicture} src={post.picture} alt={post.title} />
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p>{post.description}</p>
      </Link>
    </li>
  )
}
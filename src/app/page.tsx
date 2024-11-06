import useIndex from "@/data/hooks/pages/useIndex.page";
import Link from "next/link";
import PostList from "../ui/components/PostList/PostList";
import * as postRepository from '@/backend/repository/post.respository';

export default async function Home() {
  console.log('Server Component');
  const posts = await postRepository.obterTodos();
  return (
    <main>
      <PostList posts={posts}/>
    </main>
  )
}

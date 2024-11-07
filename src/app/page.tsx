import PostList from "../ui/components/PostList/PostList";
import * as postRepository from '@/backend/repository/post.respository';

export default async function Home() {
  const posts = await postRepository.obterTodos();
  return (
    <main>
      <PostList posts={posts}/>
    </main>
  )
}

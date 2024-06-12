import useIndex from "@/data/hooks/pages/useIndex.page";
import Link from "next/link";
import PostList from "../ui/components/PostList/PostList";

export default function Home() {
  const { posts } = useIndex();
  return (
    <main>
      <PostList posts={posts}/>
    </main>
  )
}

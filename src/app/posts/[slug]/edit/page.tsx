import * as postRepository from "@/backend/repository/post.respository";
import EditPostForm from "@/ui/components/EditPostForm/EditPostForm";
import { notFound } from "next/navigation";


export default async function PostEdit( {params} : {params: {slug: string}}) {
  const { slug } = await params;
  const post = await postRepository.obterPorSlug(slug);

  if(!post) {
    notFound();
  };

  return (
    <EditPostForm post={post}/>
  )
}
"use client"

import { useRouter } from "next/navigation";
import * as postRepository from "@/backend/repository/post.respository";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeletePost( {id} : {id: string}) {
    const router = useRouter();

    const handleDelete = async() => {
        const isConfirmed = confirm("você tem certeza que deseja excluir o post?");
        if(isConfirmed) {
            try {
                await postRepository.excluir(id);
                router.refresh();
            } catch (error) {
                alert("A exclusão não foi efetuada!");
                console.error(error);
            }
        }
    };

    return (
      <div onClick={handleDelete} style={{cursor: 'pointer', color:'#000', padding: 0, margin: 0}}>
        <FontAwesomeIcon icon={faTrash} style={{width: '15px'}} />
      </div>
    )
}
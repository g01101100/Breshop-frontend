'use client'
import { Tag } from "@/app/types/Tag";
import { useEffect, useState } from "react";



export default function TagList(){
    function deleteTag(pk: number){
        fetch(`http://localhost:8000/tags/${pk}/`, {
            method: "DELETE"
        })
        .then(res => {
            if(!res.ok) throw new Error("Tag não encontrada");
            return res.json()
        })
        .then(data => {
            setTags(prev => prev.filter(tag => tag.id !== pk))
        })
        .catch(error => console.log(error));
    }

    const [tags, setTags] = useState<Tag[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/tags/")
        .then((res) => res.json())
        .then((data) => setTags(data))
        .catch((error) => console.error(error))
    }, [])


    return(
        <div className="space-y-12">
            <h2 className="text-white text-xl font-bold">Tag list</h2>

            <div className="flex flex-col gap-10">
                {tags.map((tag: any) => (
                    <div key={tag.id} className="flex justify-between outline-white/20 outline-1 outline-offset-2 px-4 py-3 rounded-md bg-gray-800">
                        <div className="flex gap-10">
                            <p>Id: {tag.id}</p>
                            <p>Name: {tag.name}</p>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <button className="px-2 py-1 rounded-md bg-sky-600 font-bold text-sm">Atualizar</button>
                            <button onClick={() => deleteTag(tag.id)} className="px-2 py-1 rounded-md bg-red-600 font-bold text-sm">Excluir</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>      
    )
}
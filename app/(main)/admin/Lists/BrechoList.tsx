import { Brecho } from "@/app/types/Brecho"
import { useEffect, useState } from "react"

export default function BrechoList(){

    function deleteBrecho(pk: number){
        fetch(`http://localhost:8000/brechos/${pk}/`, {
            method: "DELETE"
        })
        .then(res => {
            if(!res.ok) throw new Error("brecho não encontrada");
            return res.json()
        })
        .then(data => {
            setBrechos(prev => prev.filter(brecho => brecho.id !== pk))
        })
        .catch(error => console.log(error));
    }

    const [brechos, setBrechos] = useState<Brecho[]>([])
    
    useEffect(() => {
        fetch('http://localhost:8000/brechos')
        .then(response => response.json())
        .then(data => setBrechos(data))
        .catch(erro => console.log(erro))
    }, [])
    
    return(
       <div className="space-y-12">
            <h2 className="text-white text-xl font-bold">Brecho list</h2>

            <div className="flex flex-col gap-10">
                {brechos.map((brecho: any) => (
                    <div key={brecho.id} className="flex justify-between outline-white/20 outline-1 outline-offset-2 px-4 py-3 rounded-md bg-gray-800">
                        <div className="flex gap-10">
                            <p>Id: {brecho.id}</p>
                            <p>Name: {brecho.name}</p>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <button className="px-2 py-1 rounded-md bg-sky-600 font-bold text-sm">Atualizar</button>
                            <button onClick={() => deleteBrecho(brecho.id)} className="px-2 py-1 rounded-md bg-red-600 font-bold text-sm">Excluir</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>      
    )
}
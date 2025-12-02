import { Address } from "@/app/types/Address"
import { useEffect, useState } from "react"

export default function AddressList(){

    function deleteAddress(pk: number){
        fetch(`http://localhost:8000/addresses/${pk}/`, {
            method: "DELETE"
        })
        .then(res => {
            if(!res.ok) throw new Error("Address não encontrada");
            return res.json()
        })
        .then(data => {
            setAddresses(prev => prev.filter(address => address.id !== pk))
        })
        .catch(error => console.log(error));
    }

    
    const [addresses, setAddresses] = useState<Address[]>([])

    useEffect(() => {
        fetch('http://localhost:8000/addresses')
        .then(response => response.json())
        .then(data => setAddresses(data))
        .catch(erro => console.log(erro))
    }, [])
    
    return(
        <div className="space-y-12">
            <h2 className="text-white text-xl font-bold">Endereço list</h2>

            <div className="flex flex-col gap-10">
                {addresses.map((address: any) => (
                    <div key={address.id} className="flex justify-between outline-white/20 outline-1 outline-offset-2 px-4 py-3 rounded-md bg-gray-800">
                        <div className="flex gap-10">
                            <p>Id: {address.id}</p>
                            <p>Estado: {address.state}</p>
                            <p>Cidade: {address.city}</p>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <button className="px-2 py-1 rounded-md bg-sky-600 font-bold text-sm">Atualizar</button>
                            <button onClick={() => deleteAddress(address.id)} className="px-2 py-1 rounded-md bg-red-600 font-bold text-sm">Excluir</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>      
    )
}
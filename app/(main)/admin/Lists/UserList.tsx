import { User } from "@/app/types/User";
import { useEffect, useState } from "react";

export default function UserList(){

    function deleteUser(pk: number){
        fetch(`http://localhost:8000/users/${pk}/`, {
            method: "DELETE"
        })
        .then(res => {
            if(!res.ok) throw new Error("user não encontrada");
            return res.json()
        })
        .then(data => {
            setUsers(prev => prev.filter(user => user.id !== pk))
        })
        .catch(error => console.log(error));
    }

    const [users, setUsers] = useState<User[]>([]);
    
        useEffect(() => {
            fetch("http://localhost:8000/users/")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error))
        }, [])

    return(
        <div className="space-y-12">
            <h2 className="text-white text-xl font-bold">User list</h2>
            <div className="flex flex-col gap-5">
                {users.map((user: any) => (
                    <div key={user.id} className="flex justify-between outline-white/20 outline-1 outline-offset-2 px-4 py-3 rounded-md bg-gray-800">
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-10">
                                    <p>Id: {user.id}</p>
                                    <p>Name: {user.name}</p>
                                </div>
                                <div className="flex gap-10">
                                    <p>Email: {user.email}</p>
                                    <p>Endereço: {user.address_id}</p>
                                </div>
                            </div>
                            <div className="flex gap-5 justify-center items-center">
                                <button className="px-2 py-1 rounded-md bg-sky-600 font-bold text-sm">Atualizar</button>
                                <button onClick={() => deleteUser(user.id)} className="px-2 py-1 rounded-md bg-red-600 font-bold text-sm">Excluir</button>
                            </div>

                        </div>
                ))}
            </div>      
        </div>      
    )
}

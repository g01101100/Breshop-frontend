'use client'

import { useRouter } from 'next/navigation'
import Link from "next/link"
import { useState } from "react"
import { login, getMe } from '@/lib/auth'

export default function AuthPage(){
    const router = useRouter()
    const [ username, setUsername ] = useState('')
    const [ senha, setSenha ] = useState('')

    function limparCampos(){
        setUsername('')
        setSenha('')
    }

    async function loggin(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault(); 
        const response = await login(username, senha);
        console.log(response)
        if(response.status == 200){
            limparCampos()
            console.log('senha validada, Login realizado!')
            router.replace('/admin')
        }
    }

    return(
        <div className="flex justify-center items-center w-full h-screen">
            <div className="aspect-3/4 flex justify-center items-center w-70 rounded-md bg-gray-800 ">
                <div className="aspect-3/4 flex flex-col justify-between items-center w-7/10">
                    <form method="POST" className="w-full h-full flex flex-col justify-between items-center" onSubmit={loggin}>
                        <h2 className="text-2xl">BRESHOP</h2>
                        <div className="flex flex-col gap-5 w-full">
                            <input type="text" name="username" id="username" placeholder='usuario'
                                value={username}
                                onChange={(e) => {setUsername(e.target.value)}}
                                className="w-full rounded-sm p-1 text-sm bg-gray-200/10"
                            />
                            <input type="password" name="senha" id="senha"  placeholder='senha'
                                value={senha}
                                onChange={(e) => {setSenha(e.target.value)}}
                                className="w-full rounded-sm p-1 text-sm bg-gray-200/10"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <input type="submit" value='Login' className="text-center rounded-lg px-2 py-1 font-bold bg-sky-500/50 cursor-pointer
                            hover:bg-sky-500/60"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

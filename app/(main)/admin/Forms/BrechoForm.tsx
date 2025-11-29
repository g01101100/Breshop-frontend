export default function BrechoForm(){
    return(
        <form method="POST">
            <div className="space-y-12">
                
                <div className="border-b border-white/20 pb-12">
                    <h2 className="text-white text-xl font-bold">Brecho</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-6 mt-8 gap-x-6 gap-y-8">
                        <div className="sm:col-span-3">
                            <label htmlFor="nome" className="block text-white">Nome</label>
                            <input type="text" name="nome" id="nome" required className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>
                        
                        <div className="sm:col-span-3">
                            <label htmlFor="cidade" className="block text-white">Cidade</label>
                            <input type="text" name="cidade" id="cidade" required className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>
                        
                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-white">Email</label>
                            <input type="email" name="email" id="email" required className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="telefone" className="block text-white">Telefone</label>
                            <input type="text" name="telefone" id="telefone" pattern="[0-9]{11}" className="[appearance:textfield] block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>
                        
                        <div className="sm:col-span-2">
                            <label htmlFor="complemento" className="block text-white">Instagram</label>
                            <input type="text" name="complemento" id="complemento" maxLength={30} className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse gap-x-2 px-2 py-1">
                    <div>
                        <input type="submit" value='Enviar' id="submit" name="submit" className="px-2 py-1 rounded-md bg-sky-600 font-bold cursor-pointer"/>
                    </div>
                    <div>
                        <input type="reset" value='cancelar' id="reset" name="reset" className="px-2 py-1 rounded-md bg-transparent font-bold cursor-pointer"/>
                    </div>
                </div>
            </div>
    </form>
    )
}
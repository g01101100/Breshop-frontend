export default function AddressForm(){
    return(
        <form method="POST">
            <div className="space-y-12">  
                <div className="border-b border-white/20 pb-12">
                    <h2 className="text-white text-xl font-bold">Endereço</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-6 mt-8 gap-x-6 gap-y-8">
                        <div className="sm:col-span-3">
                            <label htmlFor="cep" className="block text-white">CEP</label>
                            <input type="tel" name="cep" id="cep" inputMode="tel" maxLength={8} pattern="[0-9]{8}" required className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>
                        
                        <div className="sm:col-span-3">
                            <label htmlFor="cidade" className="block text-white">Cidade</label>
                            <input type="text" name="cidade" id="cidade" required className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>
                        
                        <div className="sm:col-span-6">
                            <label htmlFor="logradouro" className="block text-white">Logradouro</label>
                            <input type="text" name="logradouro" id="logradouro" required className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="numero" className="block text-white">Numero</label>
                            <input type="number" inputMode="numeric" name="numero" id="numero" required className="[appearance:textfield] block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>
                        
                        <div className="sm:col-span-2">
                            <label htmlFor="complemento" className="block text-white">Complemento</label>
                            <input type="text" name="complemento" id="complemento" className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
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
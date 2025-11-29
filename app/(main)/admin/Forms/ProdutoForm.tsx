export default function ProdutoForm(){
    return(
        <form method="POST">
            <div className="space-y-12">
                <div className="border-b border-white/20 pb-12">
                    <h2 className="text-white text-xl font-bold">Informações Produto</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-6 mt-8 gap-x-6 gap-y-8">
                        <div className="sm:col-span-3">
                            <label htmlFor="nome" className="block text-white">Nome</label>
                            <input type="text" name="nome" id="nome" required className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="preco" className="block text-white">Preço</label>
                            <input type="tel" name="preco" id="preco" pattern="[0-9]+([,]?[0-9]{0,2})" required className="block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
                        </div>
                        
                        <div className="sm:col-span-1">
                            <label htmlFor="brecho_id" className="block text-white">Brecho_Id</label>
                            <input type="number" name="brecho_id" id="brecho_id" required className="[appearance:textfield] block w-full rounded-md mt-2 px-2 py-1 outline-white/20 -outline-offset-1 outline-1 bg-white/5"/>
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
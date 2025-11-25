import Footer from '@/app/components/Footer'
import Header from '@/app/components/header/Header'
import Hero from '@/app/components/landing/Hero'
import Categoria from '../components/landing/Categorias'

export default function landingPage(){
    return(
        <div className='flex flex-col'>
            <Header/>

            <main className='grid grid-cols-2 items-center justify-center bg-[var(--background)] gap-5'>
                <Hero />
                <Categoria categoria='Homem' img='/assets/categoria-homem.jpg'/>
                <Categoria categoria='Mulher' img='/assets/categoria-mulher.jpg'/>
            </main>

            <Footer/>
        </div>
    )
}
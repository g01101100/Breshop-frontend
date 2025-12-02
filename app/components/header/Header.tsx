import {
    Search,
    UserRound,
    Heart,
} from "lucide-react"
import HeaderNavButton from "./HeaderNavButton"
import Link from "next/link"

export default function Header(){


    return(
        <div className="
        fixed top-0 flex items-center justify-between align-center px-20 w-full h-16 bg-neutral-900 text-white z-1000">
            <nav className="flex justify-center">
                <Link href={'/'} className="text-3xl mr-20">
                    BRESHOP
                </Link>
                <HeaderNavButton>HOMEM</HeaderNavButton>  
                <HeaderNavButton>MULHER</HeaderNavButton>  
                <HeaderNavButton>CASA</HeaderNavButton>  
            </nav>
            <nav className="flex gap-10">
                <button>
                    <Search size={20}/>
                </button>
                
                <Link href={'/login'}>
                    <UserRound size={20}/>
                </Link>

                <button>
                    <Heart size={20}/>
                </button>
            </nav>
        </div>
    )
}


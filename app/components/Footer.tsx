import {
    HomeIcon,
    SearchIcon,
} from 'lucide-react'

export default function Footer(){
    return(
        <div className='flex items-center justify-center gap-10 mt-5 w-full h-15 bg-neutral-900 text-white'>
            <HomeIcon />
            footer
            <SearchIcon />
        </div>
    )
}
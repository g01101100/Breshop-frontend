
type buttonProps = {
    children: string
}

export default function HeaderNavButton({children}: buttonProps){
    return(
        <button className="
        relative 
        mr-12
        text-sm
        hover:after:scale-x-100
        
        after:content-[''] 
        after:absolute
        after:bottom-2
        after:left-1/2
        after:w-4/3
        after:h-[1px]
        after:bg-white
        after:scale-x-0
        after:-translate-x-1/2
        after:origin-center
        after:transition
        after:duration-200
        ">
            {children}
        </button>
    )
}
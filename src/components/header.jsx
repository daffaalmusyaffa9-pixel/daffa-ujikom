"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Header = (props)=>{
        const router = useRouter()
return(
    
        <div className="bg-primary flex justify-between items-center py-4 px-8 ">
            <h1 className="text-primary-foreground font-bold text-3xl">
                Daffa Shop
            </h1>
            <Button variant={"secondary"} onClick={()=>router.push(props.to)} className={"cursor-pointer"}>
             {props.cta}
            </Button>
    </div>
)}

export default Header;

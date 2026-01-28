"use client"


const pageAbout = ()=>{
    return(
    <div className="flex items-center justify-between h-screen hover:delay-300 hover:animation-duration-initial">
        <div className="w-42 h-42 p-8 hover:scale-200 hover:delay-300 hover:animate-bounce bg-green-500 shadow-xm  font-bold flex items-center justify-center-safe rounded-2xl">
            kotak 1
        </div>
        <div className="w-42 h-42 p-8 hover:scale-200 hover:delay-300 hover:animate-ping bg-green-500 shadow-xm  font-bold flex items-center justify-center-safe rounded-2xl">
            kotak 2
        </div>
        <div className="w-42 h-42 p-8  hover:scale-125 hover:delay-300 hover:animate-spin bg-green-500 shadow-xm  font-bold flex items-center justify-center-safe rounded-2xl">
            kotak 3
        </div>
        <div className="w-42 h-42 p-8 hover:scale-200 hover:delay-300 hover:animate-accordion-up bg-green-500 shadow-xm  font-bold flex items-center justify-center-safe rounded-2xl">
            kotak 4
        </div>
        
    </div>


)

}
export default pageAbout

"use client"

import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import React from "react"
import daftarBarang from "@/components/daftarBarang.json"
import { numberToIDR } from "@/hook/numberToIDR"
import { ScrollArea } from "@/components/ui/scroll-area"
import BarangDiskon from "@/components/card"
import { Input } from "@/components/ui/input"
import Diskon from "@/components/diskon"

const { default: axios } = require("axios")
const daftarHero =["image/banner.jpeg"]
const listHero =[
  {
      url:"",
      text:"HIJAB - BANNER",
      cta:"Beli Sekarang",
      link:""



  }





]

  const PageHome = ()=>{
    const data = daftarBarang
    const [keranjang,setKeranjang] = React.useState([])
    const [diskon,setDiskon] =React.useState(0)

  const handleKeranjang =(item)=>{
    setKeranjang([...keranjang,item])
  }
 
  
  return(
        <div>
          <section>
          <Header to="/base" cta="Program Dasar"/>
          </section>

          <section className="fixed bottom-10 right-10">
          <Sheet>
              <SheetTrigger >
                <Button className="bg-blue-300 rounded-2xl ">
                  <ShoppingCart />
                  {keranjang?.length}
                  </Button>
              </SheetTrigger>
              <SheetContent>
                  <SheetHeader>
                      <SheetTitle>
                        KERANJANG
                      </SheetTitle>
                  </SheetHeader>
                  <ScrollArea className="h-[60vh] w-full">
                    {
                      keranjang.map((item,i)=>{
                        return(
                           <div key={i} className="flex justify-between gap-8 p-4">
                            <span>
                              {item.title}
                            </span>
                            <span>
                              {numberToIDR(item.price)}
                            </span>
                          </div>
                        )
                      })
                    }
                  </ScrollArea>
                  <SheetFooter>
                    <Input placeholder ="masukan diskon" onChange ={(e)=>setDiskon(e.target.value)}/>
                    <Diskon diskon ={diskon} harga ={keranjang.reduce((acc,data)=>(acc+=data.price),0)}>
                      
                    </Diskon>
                  </SheetFooter>


              </SheetContent>


          </Sheet>
          
          </section>
          
<Carousel>

     <CarouselContent>
        {daftarHero.map((item,i)=>{
          return(
             <CarouselItem>
              <img src={item} alt=""className="w-full h-[50vh] object-cover"/>
                          
             </CarouselItem>


                      )
                  })

                  }
                   
            
                </CarouselContent>
                  
</Carousel>
                  
                  
      

            <div className="container grid grid-cols-1 gap-3 sm:grid-cols-2  mt-20 md:grid-cols-3
            ">

              {
                data?.map((item,i)=>{
                  return(
                    <div key={i}    >
                      <BarangDiskon barang={item} onClick={()=>handleKeranjang(item)}/>
                    </div>

                  )
                })
              }


            </div>




            



































            <div className="fixed top-4 right-4 bg-amber-500">








         
                
                  </div>



                
              </div>
  )
  
  
}


export default PageHome;

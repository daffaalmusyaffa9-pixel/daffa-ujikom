"use client"

import BarangDiskon from "@/components/card"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import React from "react"

const { default: axios } = require("axios")
const daftarHero =[]
const listHero =[
  {
      url:"",
      text:"HIJAB - BANNER",
      cta:"Beli Sekarang",
      link:""



  }





]






  const PageHome = ()=>{
    const [data,setData] = React.useState([])
    const [keranjang,setKeranjang] = React.useState([])
    const [program,setProgram] = React.useState({
      'diskon': 20,
      'potonganHarga':0,
      'harga':0,
      'hargaTotal':0,

    })

    React.useEffect()
      

  React.useEffect(()=>{
    setProgram,((item)=>({
      item,
      'potonganHarga':program.harga*program.diskon/100,
      'harga': keranjang?.reduce((acc,data)=> acc += data.price, 0  ),
      'hargaTotal':program?.harga - program?.potonganHarga
    }))
  },[keranjang,program])


  const handleKeranjang =(item)=>{
    setKeranjang([...keranjang,item])
  }



  React.useEffect(()=>{
      const fethingData =  async(path)=>{
          const response = await axios.get(`https://fakestoreapi.com/${path}`)
          
          console.log(response.data)
          setData(response.data)
      }
    fethingData('products')             
      },[data])
      
  
  
  return(
        <div>
          <section className="fixed bottom-10 right-6">
          <Sheet>
              <SheetTrigger >
                <Button className="bg-blue-300 rounded-2xl ">
                  <ShoppingCart />
                  </Button>
              </SheetTrigger>
              <SheetContent>

              </SheetContent>


          </Sheet>
          <Badge  className={"bg-amber-500 absolute -top-2 -right-4"}>{keranjang?.length}</Badge>
          </section>
<Carousel>

                <CarouselContent>
                  {daftarHero.map((item,i)=>{
                      return(
                        <CarouselItemm><img src={item} alt=""className="w-full h-screen object-over"/>
                          
                        </CarouselItemm>


                      )
                  })

                  }
                   
            
                </CarouselContent>
                  
</Carousel>
                  
                  <Header />
      







          
            <div className="container grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3
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




                <Card className={'max-3xl mx-auto'}>
                    <CardHeader>

                      <CardTitle>product</CardTitle>
                    </CardHeader>
                  <Button>buy</Button>
                    <CardContent>
                      loren ipsom deler
                    </CardContent>

                </Card>



































            <div className="fixed top-4 right-4 bg-amber-500">








          {keranjang?.map((item)=>{

                            <div>
                                      <span>
                                      {item?.title}
                                    </span>

                            </div>

              })}

                
                  </div>



                <span>Diskon {program.diskon}</span>
                <span>Harga ${program.harga}</span>
                <span>potongan Harga ${program.potonganHarga}</span>
                <span>Harga Total ${program.hargaTotal}</span>
           
              </div>
  )
  
  
}


export default PageHome;

import React from 'react'
import Header from './header'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { numberToIDR } from '@/hook/numberToIDR'

const BarangDiskon = (props) => {
    return (
        <Card className={'h-full justify-between'}>
            <CardHeader>
                <img className='w-full  min-h-0 max-h opject-contain bg-whait-200 
                    shadow-sm rounded-sm bg-neutral-100'
                    src={props.barang?.image} alt ></img>
            </CardHeader>
            <CardContent className={'h-full'}>
                <p className='h-full'>
                <Badge>
                    {props.barang?.category}
                </Badge>
            
                <h1 className='text-lg font-bold '>
                    {props.barang?.title}
                        
                </h1>
            
                <p className='text-black/80'>
                    {props.barang?.description}

                </p> 
                </p>
            </CardContent>
            <CardFooter className={"flex-4 justify-between"}>
                <span className='text-2xl text red-400'>
                    {numberToIDR(props.barang?.price)}
                </span>
                <div>
                        <Button variant={'default'} onClick={props.onClick}> 
                            
                            and to card

                        </Button>
                </div>


            </CardFooter>
</Card>
    )
}
export default BarangDiskon


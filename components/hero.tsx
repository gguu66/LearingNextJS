import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface Iprops{
    imageUrl:StaticImageData | string;
    altText:string;
    content:string;
}

export default function Hero(props:Iprops){
  return (
    <div className=' h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image src={props.imageUrl} fill alt={props.altText} className='object-cover'/>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-500'></div>
      </div>
      <div className='flex justify-center pt-48'>
        <h1 className='text-white text-6xl'>{props.content}</h1>
      </div>
    </div>
  )
}

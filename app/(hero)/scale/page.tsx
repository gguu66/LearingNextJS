import React from 'react'
import Image from 'next/image'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata:Metadata={
  title: 'scale',
}
export default function Page(){
  return (
    <Hero imageUrl={"/scale.png"} altText='scale' content='scale'/>
  )
}

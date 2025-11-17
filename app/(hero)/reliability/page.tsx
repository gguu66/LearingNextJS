import React from 'react'
import Image from 'next/image'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata:Metadata={
  title: 'reliability',
}

export default function Page(){
  return (
    <Hero imageUrl={"/reliability.png"} altText='reliability' content='reliability'/>
  )
}

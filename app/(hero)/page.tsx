import React from 'react'
import Image from 'next/image'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata:Metadata={
  title: 'Home',
}

export default function Page(){
  return (
    <Hero imageUrl={"/home.png"} altText='Home' content='home'/>
  )
}

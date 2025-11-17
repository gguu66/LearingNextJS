'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkData = [
    { name: "performance", href: "/performance" },
    { name: "reliability", href: "/reliability" },
    { name: "scale", href: "/scale" },
]

//const accessLink=['/','/performance','/reliability','/scale']

export default function Header() {
    const pathName = usePathname()
    //if(!accessLink.includes(pathName)) return null;
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8 items-center">
                <Link className=" text-3xl font-bold" href="/">Home</Link>
                <div className="text-xl space-x-4">
                    {
                        linkData.map((link) => (
                            <Link
                                key={link.name}
                                className={pathName === link.href ? 'text-purple-500' : ''}
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

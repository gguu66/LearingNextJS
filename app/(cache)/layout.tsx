'use client'
import Link from "next/link";

import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { NavigationEvents } from "../components/navigation-event";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    return (
        <div>
            <nav>
                <Link href="/news">news</Link>
                <Link href="/sports">sports</Link>
            </nav>
            {children}
            <Suspense fallback={null}>
                <NavigationEvents/>
            </Suspense>
        </div>

    );
}

"use client"
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // 导入 useState 钩子
import { text } from "stream/consumers";

const linkData=[
  {name:"About", path:"/dashboard/about"},
  {name:"Settings", path:"/dashboard/settings"},
];

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count,setCount] = useState(0)
  const pathName = usePathname()

  return (
    <div>
        
        {children}
    </div>
  );
}



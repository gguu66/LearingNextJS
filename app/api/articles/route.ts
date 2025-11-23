import { NextResponse } from "next/server";
import db from "@/db"
import {NextRequest} from "next/server";

export async function POST(request: Request) {
    const res = await request.json();
    await db.update(({posts}) => posts.unshift({
        id:Math.random().toString(36).substring(2,10),
        ...res
    }));
    return NextResponse.json({
        code :0,
        message : "success",
        res
    })
}

export async function GET(request: NextRequest){
    const searchParemas = request.nextUrl.searchParams
    const pagenum = Number(searchParemas.get('pagenum')) || 1
    const pagesize = Number(searchParemas.get('pagesize')) || 2
    const query = searchParemas.get('query') || ""

    const data = db.data.posts

    let filteredData = query ? data.filter(item=>{
        const {id,...rest} = item
        return Object.values(rest).some(value=>String(value).toLowerCase().includes(query.toLowerCase()))
    }) : data

    const total = filteredData.length
    
    const startIndex = (pagenum - 1) * pagesize
    const endIndex = Math.min(startIndex + pagesize,total)

    filteredData = startIndex >= total ? [] : filteredData.slice(startIndex,endIndex)

    return NextResponse.json({
        code:0,
        message:"success",  
        data:{
            total,
            list:filteredData,
        }
    })
}
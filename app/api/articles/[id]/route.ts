import { NextRequest, NextResponse } from "next/server";
import db from "@/db";
import { message } from "antd";

interface Iprops {
    params: Awaited<{ id: string }>;
}

export async function DELETE(request: Request, { params }: Iprops) {
    await db.update(({ posts }) => {
        const idx = posts.findIndex((post) => post.id === params.id);
        posts.splice(idx, 1);
    })
    return NextResponse.json({
        code:0,
        message:"success"
    })
}

export async function PATCH(request: Request, { params }: Iprops) {
    const data = await request.json(); 
    let idx =-1
    await db.update(({ posts }) => {
        idx = posts.findIndex((post) => post.id === params.id);
        posts[idx]={...posts[idx],...data};
    })
    return NextResponse.json({
        code:0,
        message:"success",
        data:db.data.posts[idx]
    })
}


import { NextRequest, NextResponse } from "next/server";
import db from "@/db";
import { message } from "antd";

interface Iprops {
    params: Promise<{ id: string }>;
}

export async function DELETE(request: Request, { params }: Iprops) {
    const { id } = await params;
    await db.update(({ posts }) => {
        const idx = posts.findIndex((post) => post.id === id);
        posts.splice(idx, 1);
    })
    return NextResponse.json({
        code:0,
        message:"success"
    })
}

export async function PATCH(request: Request, { params }: Iprops) {
    const { id } = await params;
    const data = await request.json(); 
    let idx =-1
    await db.update(({ posts }) => {
        idx = posts.findIndex((post) => post.id === id);
        posts[idx]={...posts[idx],...data};
    })
    return NextResponse.json({
        code:0,
        message:"success",
        data:db.data.posts[idx]
    })
}


import { request } from "http"
import { NextRequest, NextResponse } from "next/server"

const data =['eat','sleep','hit']

export async function GET() {
    return NextResponse.json({data})
}

export async function POST(request:Request){
    const formData  =await request.formData();
    const todo =formData.get('todo') as string
    data.push(todo)
    return NextResponse.json({data})
}
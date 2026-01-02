'use server'
import { message } from "antd"
import { error } from "console"
import { revalidatePath } from "next/cache"
import {z} from 'zod'

const schema = z.string().min(2,{message:'最小是2个字符'}).max(5,{message:"最大是5个字符"})

const data = ['eat','sleep','hit']

export async function getTodos() {
    return data
}

export async function addTodo(prevState:{message:string,userID:string},formData:FormData) {
    const rawFormData = Object.fromEntries(formData)
    const todo =formData.get('todo') as string

    //校验todo是否为字符串
    const validatedFields = schema.safeParse(todo)

    if(!validatedFields.success) {
        return {
            message:validatedFields.error.flatten().formErrors.toString(),
            userID:validatedFields.error.flatten().formErrors.toString(),
        }
    }
    data.push(todo)

    revalidatePath('/')

    return {
        ...prevState,
        message:`add ${todo} success!`
    }
}
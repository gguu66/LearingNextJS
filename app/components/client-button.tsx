'use client'
import { addTodo } from '@/actions'
import { message } from 'antd'
import React from 'react'
import { useFormState } from 'react-dom'

const initialData = {
    message:'',
    userID:''
}

export default function ClientButton({ children }: { children: React.ReactNode }) {
    const [state,formAction] = useFormState(addTodo,initialData)
    return (
        <button className='border p-2 ml-2' onClick={async () => {
            const formData = new FormData()
            formData.append('todo','niuniu')
            await formAction(formData)
        }}>{children}</button>
    )
}

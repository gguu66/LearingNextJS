import React from 'react'
import { Card } from 'antd';
import {data} from '@/data'
//import type { Metadata } from 'next';

interface IProps {
    params: Promise<{id: string}>
}

export async function generateMetadata({ params }:IProps) {
  const { id } = await params;
    return {
      title:`博客详情-${id}`,
    }
}

export default function Page({ params }:IProps) {
    const { id } = React.use(params);

    const item = data.find(item=>item.id === +id)
  return (
    <Card title= {item?.title}>
      <p>{item?.body}</p>
    </Card>
  )
}

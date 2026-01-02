import { sleep } from '@/utils'
import React from 'react'
export const dynamic = 'force-dynamic'

export default async function page() {
    await sleep(3000)
  return (
    <div>
      news:{new Date().toLocaleString()}
    </div>
  )
}

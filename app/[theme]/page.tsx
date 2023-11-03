import { themes } from '@/data/themes'
import Link from 'next/link'
import React from 'react'

export async function generateStaticParams() { 
    return themes.map((theme) => ({
      theme: theme.slug,
    }))
  }

export default function ThemePage({params}:{params:{theme:string}}) {
    const themeData = themes.find(t=>t.slug === params.theme)
  return (
    <div className='flex flex-col gap-8 w-full h-full grow items-start justify-center'>
        <div>{themeData?.title}</div>
        <div>{themeData?.tagline}</div>
        <div>{themeData?.summary}</div>
        <Link className='pt-4' href={`/out`}>{`< Home`}</Link>
    </div>
    
  )
}
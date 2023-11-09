import { themes } from '@/data/themes'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() { 
    return themes.map((theme) => ({
      theme: theme.slug,
    }))
  }

export default function ThemePage({params}:{params:{theme:string}}) {
    const themeData = themes.find(t=>t.slug === params.theme)
  return (
    <div className='flex flex-col gap-12 w-full grow items-start justify-center'>
        {/* <div>{themeData?.title}</div>
        <div>{themeData?.tagline}</div> */}
        <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.summary}</Markdown>
        <Link className='pt-4' href={`/`}>{`< Home`}</Link>
    </div>
    
  )
}
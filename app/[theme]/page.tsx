import { Button } from '@/components/ui/button'
import { themes } from '@/data/themes'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import { Icon } from '@/data/icons'

export async function generateStaticParams() { 
    return themes.map((theme) => ({
      theme: theme.slug,
    }))
  }

export default function ThemePage({params}:{params:{theme:string}}) {
    const themeData = themes.find(t=>t.slug === params.theme)
  return (
    <div className='flex flex-col gap-12 w-full grow items-start justify-start'>
      <div className='flex flex-col w-full items-start'>
        <Link href={'/'}>
        <Button variant={'link'} className='p-0 m-0 flex items-center gap-2'><ChevronLeftIcon />Return</Button>
        </Link>
      <div className='w-full grid grid-cols-12'>
      <Markdown className={'prose col-span-12 md:col-span-10 min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.tagline}</Markdown>
      <Icon className={`fill-current hidden md:block md:col-span-2 max-h-36 place-self-end ${'theme'+themeData?.id}`} id={themeData?.id as number} />
      {/* <img className='hidden md:block md:col-span-2 max-h-32 place-self-end' src={themeData?.promptImage} alt={themeData?.title} /> */}
      </div>
      </div> 
        <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.introduction}</Markdown>
        <img className='bg-secondary w-full h-[200px]' src={themeData?.bannerImage} alt={themeData?.title} />
        <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.content}</Markdown>
        <div className='space-y-8'>
          <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Subthemes</h2>
          <div>Coming soon...</div>
        </div>
        <div className='space-y-8'>
          <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Footnotes</h2>
          <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.footnotes}</Markdown>
        </div>
      
    </div>
    
  )
}
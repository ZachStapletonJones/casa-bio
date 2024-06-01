import { Button } from '@/components/ui/button'
import { themes } from '@/data/themes'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ChevronLeftIcon, Link2Icon } from '@radix-ui/react-icons'
import { Icon } from '@/data/icons'
import { Card } from '@/components/ui/card'
import SubthemeGrid from '@/components/SubthemeGrid'
import Error from '@/components/Error'

export async function generateStaticParams() { 
    return themes.map((theme) => ({
      theme: theme.slug,
    }))
  }

export default function ThemePage({params}:{params:{theme:string}}) {
    const themeData = themes.find(t=>t.slug === params.theme)
    if (!themeData) return <Error />
  return (
    <div className='flex flex-col gap-12 w-full grow items-start justify-start'>
      <div className='flex flex-col w-full items-start'>
        <Link href={'/themes'}>
        <Button variant={'link'} className='p-0 m-0 flex items-center gap-2'><ChevronLeftIcon />Return to Themes</Button>
        </Link>
      <div className='w-full'>
      <Icon className={`fill-current float-right hidden md:inline-block max-h-16 max-w-sm  ${'theme'+themeData?.id}`} id={themeData?.id as number} />
      <div className='text-primary font-semibold'>EO Bioeconomy Theme:</div>
      <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.tagline}</Markdown>
      
      {/* <img className='hidden md:block md:col-span-2 max-h-32 place-self-end' src={themeData?.promptImage} alt={themeData?.title} /> */}
      </div>
      </div> 
        <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.introduction}</Markdown>
        <Card className={`border ${'theme'+themeData?.id} border grid grid-cols-1 place-items-center w-full h-32 px-12 border-slate-300`}>
          <div className='flex items-center gap-4 md:gap-2'>
          <Icon className={`fill-current h-12 ${'theme'+themeData?.id}`} id={themeData?.id as number} />
          <p className='text-xl italic'>{themeData?.description}</p>
          </div>
          
        </Card>
        {/* <img className='bg-secondary w-full h-[200px]' src={themeData?.bannerImage} alt={themeData?.title} /> */}
        <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.content}</Markdown>
        <div className='space-y-8'>
          <div className='space-y-2'>
          <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Representative Subtheme Challenges:</h2>
          </div>
          <SubthemeGrid theme={themeData?.id as number} />
        </div>
        {/* <div className='space-y-8'>
          <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Footnotes</h2>
          <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.footnotes}</Markdown>
        </div> */}

      {/* <Link target='_blank' href="https://forms.gle/vpP5HgMrYBwCnSXJA">
                  <Button className='flex items-center h-8 gap-2 font-semibold'>
                  <Link2Icon />
                    Submit your ideas
                  </Button>
                </Link> */}
    </div>
    
  )
}
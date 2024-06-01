import { Button } from '@/components/ui/button'
import { themes } from '@/data/themes'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ChevronLeftIcon, Link2Icon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { Icon } from '@/data/icons'
import { Card } from '@/components/ui/card'
import SubthemeGrid from '@/components/SubthemeGrid'
import { SubthemeData, subthemes } from '@/data/subthemes'
import Error from '@/components/Error'

export async function generateStaticParams() {
    let params: { theme: string; subtheme: string }[] = [];
  
    subthemes.forEach((subtheme) => {
      Object.keys(subtheme).forEach((key) => {
        // Cast key to a number
        const themeNumber = Number(key);
        
        // Ensure subtheme[key] is treated as an array of SubthemeData
        const subthemeDataArray: SubthemeData[] = subtheme[themeNumber];
        const themeSlug = themes.find(t=>t.id === themeNumber)?.slug
        subthemeDataArray.forEach((subthemeData) => {
        console.log(subthemeData.slug)
        
          params.push({
            theme: themeSlug as string, // or themeNumber.toString() if you prefer
            subtheme: subthemeData.slug
          });
        });
      });
    });
  
    return params;
  }
  

export default function SubthemePage({params}:{params:{theme:string, subtheme:string}}) {
    const themeData = themes.find(t => t.slug === params.theme);

    // Ensure themeData.id is a number and use it to find the correct subtheme object
    const subthemeDataObject = subthemes.find(obj => obj.hasOwnProperty(themeData?.id as number));
  
    // Access the array using the theme ID and then filter for the correct subtheme
    const subthemeDataArray = subthemeDataObject ? subthemeDataObject[themeData?.id as number] : [];
    const subthemeData = subthemeDataArray.find(st => st.slug === params.subtheme);
    if (!subthemeData) return <Error />
  return (
    <div className='flex flex-col gap-12 w-full grow items-start justify-start'>
      <div className='flex flex-col w-full items-start'>
        <Link className='flex flex-row items-center gap-2' href={'/'+themeData?.slug}>
        <Button variant={'link'} className='p-0 m-0 flex items-center gap-2'><ChevronLeftIcon />Return | {themeData?.title}</Button>
        </Link>
      <div className='w-full pb-2'>
      
      <Icon className={`fill-current float-right hidden md:inline-block max-h-16 max-w-sm  ${'theme'+themeData?.id}`} id={themeData?.id as number} />
      <div className='text-primary font-semibold'>Representative Subtheme Challenge:</div>
      <Markdown className={'prose pb-8 min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{subthemeData?.pageTitle}</Markdown>
      {/* <img className='hidden md:block md:col-span-2 max-h-32 place-self-end' src={themeData?.promptImage} alt={themeData?.title} /> */}
      <div className='flex flex-col gap-4'>
   
        <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{subthemeData?.questions}</Markdown>
    
    </div>
      </div>

      {/* <Link target='_blank' href="https://forms.gle/vpP5HgMrYBwCnSXJA">
                  <Button className='flex items-center h-8 gap-2 font-semibold'>
                  <Link2Icon />
                    Share your ideas
                  </Button>
                </Link> */}

                
      <div className='flex flex-col pt-4'>
      <Link className='flex flex-row items-center gap-2' href={'/'+themeData?.slug}>
        <Button variant={'link'} className='p-0 m-0 flex items-center gap-2'><ChevronLeftIcon />Return | {themeData?.title}</Button>
        </Link>
        <Link className='flex flex-row items-center gap-2' href={'/themes'}>
        <Button variant={'link'} className='p-0 m-0 flex items-center gap-2'><ChevronLeftIcon />Return | Themes</Button>
        </Link>
        <Link className='flex flex-row items-center gap-2' href={'/'}>
        <Button variant={'link'} className='p-0 m-0 flex items-center gap-2'><ChevronLeftIcon />Return | Home</Button>
        </Link>
      </div>
      </div>
        
        {/* <Card className={`border ${'theme'+themeData?.id} border grid grid-cols-1 place-items-center w-full h-32 px-12 border-slate-300`}>
          <div className='flex items-center gap-4 md:gap-2'>
          <Icon className={`fill-current h-12 ${'theme'+themeData?.id}`} id={themeData?.id as number} />
          <p className='text-xl italic'>{themeData?.description}</p>
          </div>
          
        </Card> */}
        {/* <img className='bg-secondary w-full h-[200px]' src={themeData?.bannerImage} alt={themeData?.title} /> */}
        {/* <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.content}</Markdown>
        <div className='space-y-8'>
          <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Subthemes</h2>
          <SubthemeGrid theme={themeData?.id as number} />
          <div>Coming soon...</div>
        </div>
        <div className='space-y-8'>
          <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Footnotes</h2>
          <Markdown className={'prose min-w-full &>*:w-full'} remarkPlugins={[remarkGfm]}>{themeData?.footnotes}</Markdown>
        </div> */}
      
    </div>
    
  )
}
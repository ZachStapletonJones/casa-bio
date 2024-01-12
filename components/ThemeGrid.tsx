'use client'
import { Icon } from '@/data/icons'
import { ThemeData, themes } from '@/data/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SubthemeGrid from './SubthemeGrid'
import { ChevronRightIcon, ChevronUpIcon, ExternalLinkIcon, Link2Icon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import ReturnTop from './ReturnTop'


// function Theme(theme:ThemeData){
//     return(
//         <Link className={`grid grid-cols-1 border ${'theme'+theme.id} border-1 border-slate-300  hover:bg-slate-100 rounded place-items-center max-h-56 h-56 gap-4 w-52 pt-2`} href={theme.slug}>
//             <div className='h-fit w-fit flex flex-col gap-2 items-center'>
//             <Icon className={`fill-current h-24`} id={theme.id} />
//             {/* <img className='w-[120px] h-[120px] text-primary' src={theme.promptImage} alt={theme.title} /> */}
//             <div className='text-center font-semibold max-w-[180px] h-8 flex px-2 items-center'>{theme.title}</div>
//             </div>
//         </Link>
//     )
// }

function Theme(theme:ThemeData){
    return(
        <div className='flex flex-col gap-4 w-full h-fit' id={theme.slug}>
            <div className='w-fit'>
        <Link className={`${'theme'+theme.id} hover:underline`} href={theme.slug} id={theme.slug+"Link"}>
            <div className='h-fit w-full flex flex-row items-center justify-start'>
            <Icon className={`fill-current h-7`} id={theme.id} />
            {/* <img className='w-[120px] h-[120px] text-primary' src={theme.promptImage} alt={theme.title} /> */}
            <div className='flex items-center gap-2 '>
            <div className='text-center font-semibold px-2 text-xl h-fit flex flex-col items-start'>{theme.title} <span className='text-xs flex items-center gap-1 hover:decoration-0'>Read more<ChevronRightIcon className='h-3 w-3' /></span></div>
            {/* <ExternalLinkIcon className='w-4 h-4' /> */}
            </div>
            </div>
        </Link>
        </div>
        <div className='pl-4'>
        <div className='text-primary font-[500] text-md pb-2'>Representative Subtheme Challenges:</div>
        <SubthemeGrid theme={theme.id as number} />
        </div>
        <div className='flex flex-col gap-2 border border-1 rounded w-fit p-4 bg-secondary'>
            <div>Want to contribute to <span className='font-semibold text-primary'>{theme.title}</span>?</div>
            <div className='w-fit'>
        <Link target='_blank' href="https://forms.gle/vpP5HgMrYBwCnSXJA">
                  <Button className='flex items-center h-8 gap-2 font-semibold'>
                  <Link2Icon />
                    Share your ideas
                  </Button>
                </Link>
                </div>
                </div>
        <div className='w-full justify-start text-xs text-primary'>
        <button className={`flex items-center gap-2`} tabIndex={0} onClick={()=> {
            const element = document.getElementById('grid');
            if ( !element ) return;
            window.scroll({
                top: element.offsetTop - 80,
                behavior: 'smooth'
              }) 
        }}>
             <ChevronUpIcon />Return to navigation
        </button>
        </div>     
        </div>
    )
}

function ThemeNav(theme:ThemeData){
    return (
        <button className={`grid grid-cols-1 border ${'theme'+theme.id} border-1 border-slate-300  hover:bg-slate-100 rounded place-items-center max-h-36 h-36 gap-4 max-w-52 pt-2`} onClick={()=> {
            const element = document.getElementById(theme.slug);
            if ( !element ) return;
            window.scroll({
                top: element.offsetTop - 80,
                behavior: 'smooth'
              }) 
        }}>
             <div className='h-fit w-fit flex flex-col gap-2 items-center'>
            <Icon className={`fill-current h-14`} id={theme.id} />
             {/* <img className='w-[120px] h-[120px] text-primary' src={theme.promptImage} alt={theme.title} /> */}
             <div className='text-center text-sm lg:text-base font-semibold max-w-[180px] h-8 flex px-2 items-center'>{theme.title}</div>
             </div>
        </button>
    )
}

export default function ThemeGrid() {
    return (
        <div className='flex grow flex-wrap'>
            <div id={'grid'} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 pb-4'>
            {themes.map((t, index)=><ThemeNav key={index} {...t} />)}
            </div>
            <div className='w-full flex justify-start'><ReturnTop /></div>
            <div className='flex flex-col gap-8'>
            {themes.map((t, index)=><Theme key={index} {...t} />)}
            </div>
        </div>
    )
}
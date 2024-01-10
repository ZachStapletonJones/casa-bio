
import { Icon } from '@/data/icons'
import { ThemeData, themes } from '@/data/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SubthemeGrid from './SubthemeGrid'
import { ExternalLinkIcon, Link2Icon } from '@radix-ui/react-icons'
import { Button } from './ui/button'


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
        <div className='flex flex-col gap-4 w-full h-fit'>
        <Link className={`${'theme'+theme.id} hover:underline`} href={theme.slug}>
            <div className='h-fit w-full flex flex-row items-center justify-start'>
            <Icon className={`fill-current h-7`} id={theme.id} />
            {/* <img className='w-[120px] h-[120px] text-primary' src={theme.promptImage} alt={theme.title} /> */}
            <div className='flex items-center gap-2 '>
            <div className='text-center font-semibold px-2 text-xl '>{theme.title} </div>
            {/* <ExternalLinkIcon className='w-4 h-4' /> */}
            </div>
            </div>
        </Link>
        <div className='pl-4'>
        <div className='text-primary font-[500] text-md pb-2'>Representative Subtheme Challenges:</div>
        <SubthemeGrid theme={theme.id as number} />
        </div>
        <div className='flex flex-col gap-2 border border-1 rounded w-fit p-4 bg-secondary'>
            <div>Want to contribute to <span className='font-semibold text-primary'>{theme.title}</span>?</div>
        <Link target='_blank' href="/">
                  <Button className='flex items-center h-8 gap-2 font-semibold'>
                  <Link2Icon />
                    Research Input Survey
                  </Button>
                </Link>
                </div>
        </div>
    )
}

export default function ThemeGrid() {
    return (
        <div className='flex grow gap-12 flex-wrap'>
            {themes.map((t, index)=><Theme key={index} {...t} />)}
        </div>
    )
}
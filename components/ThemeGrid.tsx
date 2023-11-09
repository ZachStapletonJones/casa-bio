
import { ThemeData, themes } from '@/data/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Theme(theme:ThemeData){
    return(
        <Link className='grid grid-cols-1 bg-slate-200 hover:bg-slate-100 rounded justify-items-center content-start max-h-56 h-56 gap-4 w-52 pt-2' href={theme.slug}>
            <img className='w-[150px] h-[150px]' src={theme.promptImage} alt={theme.title} />
            <div className='text-center font-semibold max-w-[180px] h-8 flex px-2 items-center'>{theme.title}</div>
        </Link>
    )
}

export default function ThemeGrid() {
    return (
        <div className='flex grow gap-4 flex-wrap'>
            {themes.map((t, index)=><Theme key={index} {...t} />)}
        </div>
    )
}

import { ThemeData, themes } from '@/data/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Theme(theme:ThemeData){
    return(
        <Link className='grid grid-cols-1 bg-slate-300 rounded justify-items-center content-start max-h-60 h-60 gap-4 w-52' href={theme.slug}>
            <img className='w-[150px] h-[150px]' src={theme.promptImage} alt={theme.title} />
            <div className='text-center h-12 flex px-2 items-center'>{theme.title}</div>
        </Link>
    )
}

export default function ThemeGrid() {
    return (
        <div className='flex grow gap-4'>
            {themes.map((t, index)=><Theme key={index} {...t} />)}
        </div>
    )
}
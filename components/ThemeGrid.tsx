
import { Icon } from '@/data/icons'
import { ThemeData, themes } from '@/data/themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Theme(theme:ThemeData){
    return(
        <Link className={`grid grid-cols-1 border ${'theme'+theme.id} border-1 border-slate-300  hover:bg-slate-100 rounded place-items-center max-h-56 h-56 gap-4 w-52 pt-2`} href={theme.slug}>
            <div className='h-fit w-fit flex flex-col gap-2 items-center'>
            <Icon className={`fill-current h-24`} id={theme.id} />
            {/* <img className='w-[120px] h-[120px] text-primary' src={theme.promptImage} alt={theme.title} /> */}
            <div className='text-center font-semibold max-w-[180px] h-8 flex px-2 items-center'>{theme.title}</div>
            </div>
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
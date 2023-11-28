
import { Icon } from '@/data/icons'
import { SubthemeData, subthemes } from '@/data/subthemes'
import { ThemeData, themes } from '@/data/themes'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Subtheme({theme, themeId}:{theme:SubthemeData, themeId:number}){
    const themeData = themes.find(t=>t.id === themeId)
    return(
        <Link className={` border ${'theme'+themeId} border-1 border-slate-300  hover:bg-slate-100 rounded flex items-center justify-between gap-4 h-fit max-w-[95dvw] w-[500px] py-4 px-4`} href={themeData?.slug+'/'+theme.slug}>

                <div className='font-semibold px-2'>{theme.title}</div>
                <ExternalLinkIcon className='w-4 h-4' />
        </Link>
    )
}

export default function SubthemeGrid({theme}:{theme:number}) {
    const themeObject = subthemes.find(obj => obj.hasOwnProperty(theme));
    const subthemeData = themeObject ? themeObject[theme] : [];
    return (
        <div className='flex grow gap-4 flex-wrap'>
            {subthemeData && subthemeData.map((t, index)=><Subtheme key={index} theme={t} themeId={theme} />)}
        </div>
    )
}
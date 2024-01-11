
import { Icon } from '@/data/icons'
import { SubthemeData, subthemes } from '@/data/subthemes'
import { ThemeData, themes } from '@/data/themes'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Subtheme({theme, themeId, iconId}:{theme:SubthemeData, themeId:number, iconId:number}){
    const themeData = themes.find(t=>t.id === themeId)
    return(
        <div>
            <div className='w-fit'>
        <Link className={'flex items-center gap-2 h-fit hover:underline'} href={themeData?.slug+'/'+theme.slug}>
            <div className={`${'theme'+themeId}`}>
            <Icon className={`fill-current h-5`} id={themeId} />
            </div>
                <div className='flex items-center gap-2 text-lg text-primary'>{theme.title}</div>
                
        </Link>
        </div>
        <div className='pl-7'>{theme?.description}</div>
        </div>
   
    )
}

export default function SubthemeGrid({theme}:{theme:number}) {
    const themeObject = subthemes.find(obj => obj.hasOwnProperty(theme));
    const subthemeData = themeObject ? themeObject[theme] : [];
    return (
        <div className='grid grid-cols-1 gap-4 pl-4'>
            
            {subthemeData && subthemeData.map((t, index)=><Subtheme key={index} theme={t} iconId={theme} themeId={theme} />)}
        </div>
    )
}
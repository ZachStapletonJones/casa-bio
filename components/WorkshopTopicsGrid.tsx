'use client'
import { Icon } from '@/data/icons'
import { WorkshopTopicData, workshopTopic } from '@/data/workshop-topics'
import { ThemeData, themes } from '@/data/themes'
import { SubthemeData, subthemes } from '@/data/subthemes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CalendarIcon, ChevronRightIcon, ChevronUpIcon, DownloadIcon, ExternalLinkIcon, FileIcon, Link2Icon, StarFilledIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import ReturnTop from './ReturnTop'


function WorkshopTopic(workshopTopic:WorkshopTopicData){
    return(
        <div className='flex flex-col gap-4 w-full h-fit' >
       
            <div>
            <div className='h-fit w-full flex flex-row items-center justify-start'>
                <StarFilledIcon className='text-primary' />
                
      
    
            <div className='flex items-center gap-2 '>
                
            <div className='text-center text-primary font-semibold px-2 text-xl h-fit flex flex-col items-start'>{workshopTopic.title}</div>
            </div>
            </div>
            </div>
            <div>
            {workshopTopic.description}
            </div>
            <div className='flex flex-row items-center w-full justify-start gap-2'>
                
                <a className='w-fit font-semibold' href={workshopTopic.summaryURL} target="_blank"><Button className='flex flex-row items-center w-full justify-start gap-2'><DownloadIcon  className={`text-background h-7`} /><span>Bioeconomy Initiative Document</span></Button></a>
                </div>
            <div className='flex flex-row items-center w-full justify-start gap-2'><span className='italic'>Relevant EO Themes:</span><ThemeLinks themeIds={workshopTopic.themes} /></div>
            <div className='flex flex-row items-center w-full justify-start gap-2'><span className='italic'>Cross-Cutting Advances:</span><AdvancesLinks advancesIds={workshopTopic.advances} /></div>
            {/* <div className='flex flex-row items-center w-full justify-start gap-2'><span className='italic'>Cross-cutting Advances:</span><span>{workshopTopic.advances}</span></div> */}
         
            {/* <ExternalLinkIcon className='w-4 h-4' /> */}
           
           

        
 
       
        <div className='flex flex-col gap-4 w-fit justify-start text-xs text-primary'>

        {/* <a className='w-fit text-primary font-semibold' href="https://forms.gle/qHcSunu5N2XZVap8A" target="_blank"><Button>Notify Me when Applications are Open</Button></a> */}

        {/* <button className={`flex items-center gap-2`} tabIndex={0} onClick={()=> {
            const element = document.getElementById('topics');
            if ( !element ) return;
            window.scroll({
                top: element.offsetTop - 80,
                behavior: 'smooth'
              }) 
        }}>
             <ChevronUpIcon />Return to workshop details
        </button> */}

        <button className={`flex items-center gap-2 hover:underline`} tabIndex={0} onClick={()=> {
               window.scroll({
                top: -80,
                behavior: 'smooth'
              })  
        }}>
             <ChevronUpIcon />Return to Top
        </button>
        </div>     
        </div>
    )
}

function ThemeLinks({themeIds}:{themeIds:Array<number>}) {
    const length = themeIds.length - 1;
    return (
        <span>
            {themeIds.map((t, index)=><ThemeLink key={index} themeId={t} length={length} index={index} />)}
        </span>
    )
}

function ThemeLink({themeId, length, index}:{themeId:number, length:number, index:number}) {
    const themeObject = themes[themeId];
    const themeName = themeObject ? themeObject.title : "";
    const slug = themeObject ? themeObject.slug : "";
    const color = 'theme'+themeObject.id
    return (
        <>
            
            <Link className={`w-fit text-primary font-semibold ${color} hover:underline`}  href={slug}>
                {themeName}
            </Link>
            {
                (index!=length)?(<>, </>):(<>.</>)
            }
        </>
    )
}

function AdvancesLinks({advancesIds}:{advancesIds:Array<number>}) {
    const length = advancesIds.length - 1;
    return (
        <span>
            {advancesIds.map((t, index)=><AdvancesLink key={index} advancesId={t} length={length} index={index} />)}
        </span>
    )
}

function AdvancesLink({advancesId, length, index}:{advancesId:number, length:number, index:number}) {
    const advancesNames =[
        "Workforce Development",
        "Foundational Discovery",
        "Biomanufacturing",
        "Artificial Intelligence",
        "Data Infrastructure",
    ]
    const advancesArray = subthemes[4][5];
    const advancesObject = advancesArray[advancesId]
    const advancesSlugRaw = advancesObject ? advancesObject.slug : "";
    const advancesSlug = "cross-cutting-advances/"+advancesSlugRaw;
    const advancesName = advancesNames ? advancesNames[advancesId] : "";
    return (
        <>
            
            <Link className='w-fit text-primary font-semibold hover:underline'  href={advancesSlug}>
                {advancesName}
            </Link>
            {
                (index!=length)?(<>, </>):(<>.</>)
            }
        </>
    )
}



export default function WorkshopTopics() {
    return (
        <div id='grid'  className='flex grow flex-wrap'>
            <div className='flex flex-col gap-12'>
            {workshopTopic.map((t, index)=><WorkshopTopic key={index} {...t} />)}
            </div>
        </div>
    )
}


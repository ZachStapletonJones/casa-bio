'use client'
import { Icon } from '@/data/icons'
import { WorkshopTopicData, workshopTopic } from '@/data/workshop-topics'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CalendarIcon, ChevronRightIcon, ChevronUpIcon, ExternalLinkIcon, Link2Icon, StarFilledIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import ReturnTop from './ReturnTop'


function WorkshopTopic(workshopTopic:WorkshopTopicData){
    return(
        <div className='flex flex-col gap-4 w-full h-fit' >
       
            <div>
            <div className='text-primary font-semibold scroll-m-20 border-b tracking-tight text-md w-fit mb-2'>Workshop Topic {workshopTopic.id}</div>
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
                <CalendarIcon className={`text-primary h-7`} /> 
                <span><strong className='text-primary'>Workshop Dates:</strong></span>
                <span>{workshopTopic.dates}</span>
            </div>
            {/* <ExternalLinkIcon className='w-4 h-4' /> */}
           
           

        
 
       
        <div className='flex flex-col gap-4 w-full justify-start text-xs text-primary'>

        {/* <a className='w-fit text-primary font-semibold' href="https://forms.gle/qHcSunu5N2XZVap8A" target="_blank"><Button>Notify Me when Applications are Open</Button></a> */}

        <button className={`flex items-center gap-2`} tabIndex={0} onClick={()=> {
            const element = document.getElementById('topics');
            if ( !element ) return;
            window.scroll({
                top: element.offsetTop - 80,
                behavior: 'smooth'
              }) 
        }}>
             <ChevronUpIcon />Return to workshop details
        </button>
        </div>     
        </div>
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
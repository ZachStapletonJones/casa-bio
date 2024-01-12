"use client"
import React from 'react'
import Link from 'next/link'
import { themes } from '@/data/themes'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { cn } from '@/lib/utils'
import { FileTextIcon } from '@radix-ui/react-icons'

function Footer() {
  return (
    <div className='w-full flex justify-center bg-slate-100 m-0 py-3 border-t border-slate-300'>
        <div className='max-w-7xl w-full flex justify-center items-center'>
        <div className='flex flex-col items-center text-center gap-1 text-xs'>
          <div>CASA-Bio is based upon work supported by the U.S. National Science Foundation under Contract No. 49100423P0058.  Any opinions, findings and conclusions or recommendations expressed in this material do not necessarily reflect the views of the U.S. National Science Foundation.</div>
          <a href='https://knowinnovation.com/' target='_blank'>Made by <strong>Knowinnovation</strong></a>
        </div>

        
        </div>
    </div>
  )
}


export default Footer
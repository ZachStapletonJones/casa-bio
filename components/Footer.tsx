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
        <div>Made by Knowinnovation</div>
        
        </div>
    </div>
  )
}


export default Footer
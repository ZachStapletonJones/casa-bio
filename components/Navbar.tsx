"use client"
import React from 'react'
import Link from 'next/link'
import { themes } from '@/data/themes'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { cn } from '@/lib/utils'
import { FileTextIcon } from '@radix-ui/react-icons'

function Navbar() {
  return (
    <nav className='w-full flex justify-center bg-slate-100 m-0'>
        <div className='max-w-7xl w-full flex justify-between items-center'>
        {/* Logo */}
        <Link href={'/'} className='flex items-center justify-start sm:gap-2'>
            <img className='sm:h-20 h-16' src='casa-bio-v2.png' alt='Casa Bio' />
            <div className=' flex flex-col items-start p-0 m-0 text-blue-950'>
                <div className='scroll-m-20 text-2xl font-bold lg:text-3xl '>CASA Bio</div>
                <p className='text-md font-normal align-middle leading-4 italic hidden sm:block'>
                    Catalyzing Across Sectors to Advance the Bioeconomy
                </p>
            </div>
        </Link>
        {/* Menu */}
        <NavigationMenu>
        <NavigationMenuList className='gap-4'>
        <NavigationMenuItem >
          <Link href="https://drive.google.com/file/d/1m-fzN0zkaEZ14X04BsodCkF96IajJuld/view?usp=sharing" legacyBehavior passHref>
            <NavigationMenuLink target='_blank' className={`${navigationMenuTriggerStyle()} bg-white text-blue-950 border border-1 border-slate-300/[.55] hover:bg-slate-200 hover:text-blue-950 active:bg-slate-200 active:text-blue-950 focus:bg-slate-200 focus:text-blue-950`}>
            <div className='text-blue-950 flex items-center gap-2'>
              <FileTextIcon />
              Executive Order</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='h-10'>Themes</NavigationMenuTrigger>
          <NavigationMenuContent className=''>
            <ul className="grid w-[250px] gap-3 p-4 grid-cols-1 md:w-[450px] md:grid-cols-2 ">
              {themes.map((theme) => (
                <ListItem
                key={theme.title}
                title={theme.title}
                href={theme.slug}
              >
                {theme.description}
              </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        </NavigationMenuList>
        </NavigationMenu>

        </div>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default Navbar
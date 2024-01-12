"use client"
import React from 'react'
import Link from 'next/link'
import { themes } from '@/data/themes'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { cn } from '@/lib/utils'
import { CaretDownIcon, FileTextIcon, Link2Icon } from '@radix-ui/react-icons'
import { ChevronDown } from 'lucide-react'
import { Icon } from '@/data/icons'

function Navbar() {
  return (
    <nav className='w-full flex justify-center bg-slate-100 border border-b-1  m-0 top-0 sticky py-2'>
        <div className='max-w-7xl w-full flex justify-between items-center px-3'>
        {/* Logo */}
        <Link href={'/'} className='flex items-center justify-start sm:gap-4'>
            <img className='sm:h-10 h-10 pl-2 2xl:pl-0' src='https://res.cloudinary.com/dbhtzyztg/image/upload/v1701189629/casa-bio-v3_ozpmoz.png' alt='CASA-Bio Logo' />
            <div className=' flex flex-col items-start p-0 m-0 text-blue-950'>
                <div className='scroll-m-20 merriweather text-xl font-bold lg:text-2xl '>CASA-Bio</div>
                <p className='text-sm font-normal align-middle leading-4 italic hidden sm:block'>
                    Catalyzing Across Sectors to Advance the Bioeconomy
                </p>
            </div>
        </Link>
        {/* Menu */}
        <DropdownMenu >
        <DropdownMenuTrigger asChild><Button className='flex items-center gap-2 font-semibold'>EO Bioeconomy Themes <CaretDownIcon aria-description='Dropdown Icon' /></Button></DropdownMenuTrigger>
        <DropdownMenuContent className='divide-y-2 w-[400px] max-w-[90dvw] md:max-w-[400px] px-0 mx-0 absolute top-0 -right-28 md:-right-28'>
        {themes.map((theme) => (
          <Link className='w-full p-0 m-0' href={theme.slug} key={theme.title}>
          <DropdownMenuItem
            
            className={`flex items-center gap-2 w-full cursor-pointer`}
          >
            <Icon className={`${'theme'+theme.id} fill-current w-[10%]`} id={theme.id} />
            <div className='flex flex-col w-[90%]'>
            <div className="text-sm font-semibold leading-none">{theme.title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {theme.description}
            </p>
            </div>
          </DropdownMenuItem></Link>
        )
        )}
        </DropdownMenuContent>
      </DropdownMenu>
        {/* <NavigationMenu>
        <NavigationMenuList className='gap lg:gap-2'>
        <NavigationMenuItem >
          <Link href="https://drive.google.com/file/d/1m-fzN0zkaEZ14X04BsodCkF96IajJuld/view?usp=sharing" legacyBehavior passHref>
            <NavigationMenuLink target='_blank' className={`${navigationMenuTriggerStyle()} bg-white text-blue-950 border border-1 border-slate-300/[.55] hover:bg-slate-200 hover:text-blue-950 active:bg-slate-200 active:text-blue-950 focus:bg-slate-200 focus:text-blue-950`}>
            <div className='text-blue-950 flex items-center gap-2'>
              <FileTextIcon />
              Bold Goals</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink target='_blank' className={`${navigationMenuTriggerStyle()} bg-white text-blue-950 border border-1 border-slate-300/[.55] hover:bg-slate-200 hover:text-blue-950 active:bg-slate-200 active:text-blue-950 focus:bg-slate-200 focus:text-blue-950`}>
            <div className='text-blue-950 flex items-center gap-2'>
              <Link2Icon />
              Apply</div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='h-10'>Themes</NavigationMenuTrigger>
          <NavigationMenuContent className=''>
            <ul className="grid w-[250px] w-full h-max p-0 grid-cols-1 md:w-[300px] md:grid-cols-1">
              {themes.map((theme) => (
                <ListItem
                key={theme.title}
                title={theme.title}
                href={theme.slug}
                about={theme.promptImage}
              >
                {theme.description}
              </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        </NavigationMenuList>
        </NavigationMenu> */}

        </div>
    </nav>
  )
}

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, about, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             " select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground grid grid-cols-12 gap-2 items-center",
//             className
//           )}
//           {...props}
//         >
//             <img className='object-contain col-span-2' src={about} alt='' />
//         <div className='col-span-10'>
//           <div className="text-sm font-semibold leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//           </div>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"
export default Navbar
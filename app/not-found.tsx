import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col gap-4 w-full grow items-center justify-start'>
      <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary pt-4'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
      <Button variant={'link'} className='p-0 m-0 flex items-center gap-2'><ChevronLeftIcon />Return Home</Button>
      </Link>
    </div>
  )
}
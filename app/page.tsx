import ProfileGrid from '@/components/ProfileGrid'
import ThemeGrid from '@/components/ThemeGrid'
import { Button } from '@/components/ui/button'


export default function Home() {
  return (
      <div className="flex flex-col gap-16 w-full grow items-start justify-center">

        <h1 className='flex w-full justify-center pb-4'>Casa Bio Example</h1>
        <Button>Test</Button>
        <div className='flex flex-col gap-4 '>
          <h2>Example Theme grid</h2>
          <ThemeGrid />
        </div>

        <div className='flex flex-col gap-4'>
          <h2>Example profile grid</h2>
          <ProfileGrid />
        </div>
      </div>
  )
}

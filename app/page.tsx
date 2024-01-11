import ProfileGrid from '@/components/ProfileGrid'
import ReturnTop from '@/components/ReturnTop'
import SplashContent from '@/components/SplashContent'
import ThemeGrid from '@/components/ThemeGrid'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarIcon, InfoCircledIcon, Link2Icon } from '@radix-ui/react-icons'
import { FileText } from 'lucide-react'
import Link from 'next/link'


export default function Home() {
  return (
      <div className="w-full space-y-8">
        {/* md:float-right md:w-80 w-[90dvw] md:min-w-[450px] md:ml-4 md:mb-4 */}
       
        {/* Splash Content */}
   
          <div className='space-y-4'>

              <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-2 text-primary w-fit'>Catalyzing Across Sectors to Advance the Bioeconomy</h1>
              <SplashContent />
            </div>
            <div className='flex flex-col gap-4'>
            <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Call to Action</h2>
            <p>Stakeholders from Federal agencies, industry, and non-profits have identified a group of Subtheme
Challenges that span the five Bioeconomy EO Themes. We now call on you, the research community, for
input for the next step. Please explore the Subtheme Challenges, join us at one of our Virtual Town Hall
Meetings, and share your ideas for research on these or other areas that have the potential to advance
the bioeconomy. Your input will be critical for moving CASA-Bio forward to advance the bioeconomy.</p>
<div className='w-fit'>
<Link target='_blank' href="https://forms.gle/vpP5HgMrYBwCnSXJA">
                  <Button className='flex items-center h-8 gap-2 font-semibold'>
                  <Link2Icon />
                    Share your ideas
                  </Button>
                </Link>
                </div>
            <p className='text-sm'>Here is <Link className='text-primary font-semibold hover:underline' href={'/how-we-will-use-your-input'}>how we will use your input.</Link></p>
          </div>
            <Card className=' bg-secondary '>
            <CardHeader className='pb-2'>
              <CardTitle className='flex gap-2 items-center scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'><InfoCircledIcon className='h-6 w-6' /> How to Participate: </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-2 text-md'>
            <div>There are two ways to participate:  Share your ideas in a virtual Town Hall, or share your ideas online. </div>
            <div>In early 2024, we will be hosting four virtual Town Hall meetings to hear from the research community about the ideas they view as having exciting potential to advance the bioeconomy.  These Town Halls will be highly interactive with lots of time for breakout discussions among community members. Each Town Hall will have the same agenda, but are offered at different days and times to accommodate different schedules. Everyone is welcome! </div>
            <div className='grid grid-cols-2 gap-4 md:gap-2 pt-2'>
              <div className='md:col-span-1 col-span-2 flex flex-col gap-2'>
              <h3 className='text-primary font-semibold text-lg'>Option 1</h3>
              <div className=''><span className='underline'>If you are able to attend</span>, please <strong>register</strong> for a Town Hall using the following two steps:</div>
              <h4 className='text-primary font-semibold'>1) Select Your Best Date</h4>
                <div className='grid grid-cols-1 gap-1 w-fit pb-2'>
    
                  <Button variant={'outline'} className='w-fit'><a className='w-fit flex items-center gap-2' target='_blank' href={'https://knowinnovation.zoom.us/meeting/register/tZwkfu2gqTMjHNVi26Cu8DcC42byYBnZYgzj'}><CalendarIcon />February 12th, 2024 @ 7pm EST</a></Button>
                  <Button variant={'outline'} className='w-fit'><a className='w-fit flex items-center gap-2' target='_blank' href={'https://knowinnovation.zoom.us/meeting/register/tZEqd-uoqD4pG9CpFexx4TF32fJCCtoBT1u5'}><CalendarIcon />February 15th, 2024 @ 9am EST</a></Button>
                  <Button variant={'outline'} className='w-fit'> <a className='w-fit  flex items-center gap-2' target='_blank' href={'https://knowinnovation.zoom.us/meeting/register/tZIqf-Ctqj8pHdZBmJVxQxAsmAGM2wcoH019'}><CalendarIcon />February 21st, 2024 @ 12pm EST </a></Button>
                  <Button variant={'outline'} className='w-fit'> <a className='w-fit flex items-center gap-2' target='_blank' href={'https://knowinnovation.zoom.us/meeting/register/tZ0vce2spj4sGdGkfbJutOY8a3zmOr1Hj22H'}><CalendarIcon />February 22nd, 2024 @ 5pm EST</a></Button>
                </div>
                <h4 className='text-primary font-semibold'>2) Share Your Exciting Research Idea About Your Favorite Theme!</h4>
                <div className='w-fit'>
                <Link target='_blank' href="https://forms.gle/vpP5HgMrYBwCnSXJA">
                  <Button className='flex items-center h-8 gap-2 font-semibold'>
                  <Link2Icon />
                    Share your ideas
                  </Button>
                </Link>
                </div>
                </div>
                
                <div className='md:col-span-1 col-span-2 flex flex-col gap-2'>
                <h3 className='text-primary font-semibold  text-lg'>Option 2</h3>
                <div><span className='underline'>If you are unable to attend any of the dates</span>, we would still love to hear your exciting research ideas. </div>
                <div>To share, submit the following form: </div>
                <div className='w-fit'>
                <Link target='_blank' href="https://forms.gle/vpP5HgMrYBwCnSXJA">
                  <Button className='flex items-center h-8 gap-2 font-semibold'>
                  <Link2Icon />
                    Share your ideas
                  </Button>
                </Link>
                </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex flex-col w-full items-start gap-2 justify-start'>
            
              
            </CardFooter>
          </Card>
          
          
          
          <div className='space-y-6 pb-2'>
          <h2 id="bioeconomy-themes" className="scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary">EO Bioeconomy Themes</h2>
          <ThemeGrid />
        </div>
       
        <div className='space-y-4'>
          

            {/* <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>What we will do with your input</h2>
            <p>As a next step in the CASA-Bio process, funding agency and private sector reps will collaborate once again to evaluate your ideas in context of our shared goals to identify priority areas that are the most exciting and innovative and that have high potential for cross-agency synergy. </p>
            <p>Then, we will use those ideas as topics for a series of Workshops to be held in spring and summer 2024.  The goals of the workshops will be to engage researchers in producing detailed plans/roadmaps/white papers to lay out plans for how research in these priority areas could advance the bioeconomy.</p> */}
         </div>  
         
         <div className='text-xs'>
          *Source: <a className='text-primary hover:underline' href="https://www.nist.gov/bioscience/nist-bioeconomy-lexicon" target='_blank'>National Institute of Science and Technology (NIST) Bioeconomy Lexicon</a>
         </div>
            {/* <h4 className='font-semibold text-lg text-primary'>We imagine outcomes whereby: </h4>
            <ul className='list-disc pl-6'>
              <li>
              Stakeholders from industry liberate R&D areas where early discovery and use-inspired research could be more responsive to market pull and where de-risking early-stage research could speed realization of facets of the bioeconomy.
              </li>
              <li>
              Funder stakeholders work together to define their mutual interests within the framework of the EO and elicit, from their respective research communities, creative roadmaps to realize those mutual interests. Such roadmaps would both link government, industry, and philanthropic interests in synergistic ways and emphasize the economic potential at the interfaces of complementary R&D interests.
              </li>
            </ul>
            <p>NSF wants to join forces and coordinate with funder stakeholder forces to leverage the power of our collective resources and respective research communities to identify those roadmaps and help define and stage paths forward.</p>
        </div>

        <div className='space-y-4 pb-2'>
            <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Timeline</h2>
            <p>As a step towards such prioritization and using the EO as a framework, NSF will organize a series of meetings to align interests and capabilities of funder stakeholders (government, industry, philanthropy), engage research stakeholder communities broadly to propose priority research paths forward, and create an environment where input from funder and research stakeholders can be used in concert to prioritize, stage, and map the efficient operationalization of identified pathways.</p>
            <p>We envision a two phased approach for this project, where each step is professionally facilitated and produces actionable products that inform subsequent steps.</p>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight  text-primary">Phase 1 (tentatively August – January 2024) includes:</h3>
            <ul className='list-disc pl-6'>
              <li>
                Bring funder stakeholders together to co-create a “<strong>call-to-action</strong>” based on the EO’s call for foundational and use-inspired R&D innovations in the areas of climate change, food and agriculture, supply chain resilience, and human health.
              </li>
              <li>
                Engage research stakeholder communities at a series of meetings to respond to the call-to-action by proposing <strong>priority research pathways</strong>.
              </li>
              <li>
              Reconvene funder stakeholders to match priority research pathways to shared interests and capacity and synthesize <strong>funders’ priorities</strong>.
              </li>
            </ul>
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight  text-primary">Phase 2 (tentatively February 2024 – Summer 2024):</h3>
            <ul className='list-disc pl-6'>
              <li>
                Engage research communities with funders’ priorities and solicit <strong>roadmaps</strong> with staged, actionable outcomes that could lead to implementation in FY25-FY26. 
              </li>
            </ul>
        </div> */}

       
 

    
       

        {/* <div className='space-y-4 pb-2'>
        <h2 className="scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary">Glossary</h2>
        <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id faucibus turpis, quis gravida nisi. Curabitur nulla tortor, rhoncus sed luctus id, interdum pulvinar ipsum. Vestibulum finibus lobortis dictum. In lobortis et risus laoreet facilisis. Mauris sed suscipit justo. Integer porta luctus nibh, eget lacinia massa scelerisque eu</p>
        <Link target='_blank' href="https://www.nist.gov/bioscience/nist-bioeconomy-lexicon">
                <Button className='flex items-center gap-2 font-semibold'>
                  View the Glossary
                </Button>
              </Link>
        </div> */}

        {/* <div className='flex flex-col gap-4'>
          <h2 className="scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary">Organizations</h2>
          <div className='italic'>Details coming soon...</div>
          <ProfileGrid />
        </div> */}
      </div>
  )
}

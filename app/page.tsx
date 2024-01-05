import ProfileGrid from '@/components/ProfileGrid'
import ThemeGrid from '@/components/ThemeGrid'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link2Icon } from '@radix-ui/react-icons'
import { FileText } from 'lucide-react'
import Link from 'next/link'


export default function Home() {
  return (
      <div className="w-full space-y-8">
        {/* <Card className='md:float-right md:w-80 w-[90dvw] md:min-w-[450px] bg-secondary md:ml-4 md:mb-4'>
            <CardHeader className='pb-2'>
              <CardTitle className='text-lg text-primary'>How to Participate:  </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-2 text-sm'>
            <div>There are two ways to participate:  Share your ideas in a virtual Town Hall, or share your ideas online. </div>
            <div>In early 2024, we will be hosting four virtual Town Hall meetings to hear from the research community about the ideas they view as having exciting potential to advance the bioeconomy.  These Town Halls will be highly interactive with lots of time for breakout discussions among community members. Each Town Hall will have the same agenda, but are offered at different days and times to accommodate different schedules. Everyone is welcome! </div>
            <h3 className='text-primary font-semibold'>Option 1</h3>
            <div className=''><span className='underline'>If you are able to attend</span>, please <strong>register</strong> for a Town Hall using the following two steps:</div>
            <h4 className='text-primary font-semibold'>1) Select Your Best Date</h4>
              <div className=''>
                <div>January 30th, 2024 @ 12pm EST </div>
                <div>January 31st, 2024 @ 5pm EST</div>
                <div>February 12th, 2024 @ 7pm EST</div>
                <div>February 15th, 2024 @ 9am EST</div>
              </div>
              <h4 className='text-primary font-semibold'>2) Share Your Exciting Research Idea About Your Favorite Theme!</h4>
              <Link target='_blank' href="/">
                <Button className='flex items-center h-8 gap-2 font-semibold'>
                <Link2Icon />
                  Survey
                </Button>
              </Link>
              <h3 className='text-primary font-semibold'>Option 2</h3>
              <div><span className='underline'>If you are unable to attend any of the dates</span>, we would still love to hear your exciting research ideas. </div>
              <div>To share, click here. </div>
            </CardContent>
            <CardFooter className='flex flex-col w-full items-start gap-2 justify-start'>
            
              
            </CardFooter>
          </Card> */}
        {/* Splash Content */}
   
          <div className='space-y-4 flex flex-col items-center'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
              <img className='sm:h-32 h-24 pl-2 2xl:pl-0' src='https://res.cloudinary.com/dbhtzyztg/image/upload/v1701189629/casa-bio-v3_ozpmoz.png' alt='Casa Bio' />
              <div>
              <h1 className='scroll-m-20 w-full border-b text-2xl sm:text-4xl font-semibold tracking-tight first:mt-0 text-primary text-center sm:text-left'>CASA-Bio</h1>
              <h2 className=' max-w-xs scroll-m-20 text-lg sm:text-2xl font-medium tracking-tight first:mt-0 text-primary text-center sm:text-left w-full'>Catalyzing Across Sectors to Advance the Bioeconomy</h2>
              </div>
              </div>
              <h2 className='scroll-m-20 pb-2 text-lg sm:text-xl font-semibold tracking-tight first:mt-0 w-fit text-muted-foreground italic'>Overview below; stay tuned for more details...</h2>
              <p className='max-w-4xl text-center'>Recognizing that the world is on the cusp of an industrial revolution fueled by biotechnology and biomanufacturing, in September 2022, President Biden signed an <a className='text-primary font-semibold underline' href="https://www.whitehouse.gov/briefing-room/presidential-actions/2022/09/12/executive-order-on-advancing-biotechnology-and-biomanufacturing-innovation-for-a-sustainable-safe-and-secure-american-bioeconomy/" target="_blank">Executive Order (EO) on Advancing Biotechnology and Biomanufacturing Innovation for a Sustainable, Safe, and Secure American Bioeconomy</a>. The EO laid out a vision for a government-wide research strategy to advance biotechnology and biomanufacturing through foundational and use-inspired research to drive innovations in five thematic areas: climate change, food and agriculture, supply chain resilience, human health, and the cross-cutting advances to enable progress across all these areas.</p>
              <p className='max-w-4xl text-center'>To work towards creating a unified, collaborative strategy to advance the U.S. bioeconomy, representatives from government, industry, and non-profit organizations met in early December to identify R&D areas of possible synergy.</p>
              <p className='max-w-4xl text-center'>Now, we seek input from the research community!  </p>
              
            {/* <a className='w-fit' href="https://www.whitehouse.gov/briefing-room/presidential-actions/2022/09/12/executive-order-on-advancing-biotechnology-and-biomanufacturing-innovation-for-a-sustainable-safe-and-secure-american-bioeconomy/" target="_blank">
              <Button className='font-semibold flex items-center gap-2'><FileText className='h-4 w-4' />View the Executive Order</Button>
            </a> */}
            {/* <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary pt-4'>Call to action</h2>
            <p>The CASA-Bio initiative was created to help implement the Executive Order. The first step of the plan is complete.  Reps from government funding agencies and the private sector have collaborated to identify themes of shared interest that we believe have high potential to advance the bioeconomy through innovative R&D. </p>
            <p>Now, it’s time for step two.  We need input from you, the research community, to identify exciting, creative, cutting-edge research ideas and directions to drive innovative advances in these areas.  In short, <strong className='text-primary'>WE NEED YOU</strong> to help lead the way forward to advance the bioeconomy by sharing your research ideas!  </p> */}
          </div>
          {/* <div className='space-y-4'>
          

            <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>What we will do with your input</h2>
            <p>As a next step in the CASA-Bio process, funding agency and private sector reps will collaborate once again to evaluate your ideas in context of our shared goals to identify priority areas that are the most exciting and innovative and that have high potential for cross-agency synergy. </p>
            <p>Then, we will use those ideas as topics for a series of Workshops to be held in spring and summer 2024.  The goals of the workshops will be to engage researchers in producing detailed plans/roadmaps/white papers to lay out plans for how research in these priority areas could advance the bioeconomy.</p>
         </div> */}
          <div className='space-y-4 pb-2 flex flex-col items-center'>
  
          <Card className='max-w-xl flex flex-col items-center'>
          <CardHeader className='pb-2'>
              <CardTitle className='text-lg text-primary'>Town Hall Dates  </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-2 text-sm'>
            <div className='text-center'>In early 2024, we will host four virtual 90-minute Town Hall meetings to hear from the research community about the ideas they view as having exciting potential to advance the bioeconomy. These Town Halls will be highly interactive with lots of time for breakout discussions among community members. </div>
            <div className='text-center'>Each Town Hall will have the same agenda, but will be offered at different days and times to accommodate diverse schedules. Choose the day and time that works best for you.</div>
            <div className='text-center'>Everyone is welcome!</div>
            
            <div className='flex pb-4 flex-col w-full items-center justify-center'>
            <h3 className='text-primary font-semibold'>Mark your calendars!</h3>
              <div className=''>
                
                <div>February 12, 2024; 7:00 - 8:30 PM EST</div>
                <div>February 15, 2024; 9:00 - 10:30 AM EST</div>
                <div>February 21, 2024; 12:00 - 1:30 PM EST</div>
                <div>February 21, 2024; 5:00 - 6:30 PM EST</div>
              </div>
              </div>
              <div className='text-center font-semibold text-lg text-primary'> Registration will be announced soon...</div>
            </CardContent>
            <CardFooter className='flex flex-col w-full items-start gap-2 justify-start'>
            
              
            </CardFooter>
          </Card>
        </div>
          
          <div className='space-y-4 pb-2 flex flex-col items-center'>
          <h2 id="bioeconomy-themes" className="scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary">Bioeconomy Themes</h2>
          <div className='space-y-2'>
          {/* <div className='text-muted-foreground italic w-full text-center'>Stay tuned for more details...</div> */}
          <ThemeGrid />
          </div>
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

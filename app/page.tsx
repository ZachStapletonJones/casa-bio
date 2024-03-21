import InputChart from '@/components/InputChart'
import ProfileGrid from '@/components/ProfileGrid'
import ReturnTop from '@/components/ReturnTop'
import SplashContent from '@/components/SplashContent'
import ThemeGrid from '@/components/ThemeGrid'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarIcon, FileTextIcon, ImageIcon, InfoCircledIcon, Link2Icon, PersonIcon, StarIcon, VideoIcon } from '@radix-ui/react-icons'
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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-4'>
            <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Call to Action</h2>
            <p><Link className='w-fit text-primary font-semibold hover:underline' href="/participating-stakeholders">Stakeholders</Link> from Federal agencies, industry, and non-profits have identified a group of Subtheme
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
                <p className=''>Here is <Link className='text-primary font-semibold hover:underline' href={'/how-we-will-use-your-input'}>how we will use your input.</Link></p>
                </div>
                <InputChart />
          </div>
            <Card className=' bg-secondary '>
            <CardHeader className='pb-2'>
              <CardTitle className='flex gap-2 items-center scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'><StarIcon className='h-6 w-6' /> Thank Your for Participating!</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-2 text-md'>
            <div>Thank you for all your input both synchronously at our four town hall meetings and asynchronously through our submission form. We are currently processing the data and hope to have some synthesis to share soon. Throughout April, we will be holding several Synthesis Meetings with funding agencies, NGOs, and industry representatives to identify possible priority research areas and next steps. We will share any upcoming community events here, on this website.</div>
            
            </CardContent>
            <CardFooter className='flex flex-col w-full items-start gap-2 justify-start'>
            <h2 className="flex gap-2 items-center scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary"><FileTextIcon className='h-6 w-6' /> Town Hall Resources</h2>
          <div className='flex w-full gap-8 items-start h-fit pt-4'>

          <div className='flex flex-col'>
          <div className='scroll-m-20 w-fit mb-1 text-primary font-[600] text-md'>Recordings</div>
            <div className='flex gap-4'>
              <Link target='_blank' href="https://knowinnovation.zoom.us/rec/play/zKaJIwfEssosyM4HFNay-t9alqs97hvZCN7baERc3LK9dB_1UsJ2dSHwa-iGgrKKky4J0KKl6qBZ0Vvd.0ubUi8osZ4JRaMtP?pwd=NtYH6ZpwGqbYvWjXNDXuEjZDSsc9WmqV">
                <Button variant={'outline'} className='flex items-center text-xs h-8 gap-2 font-semibold text-primary hover:text-primary'>
                <VideoIcon />
                  Town Hall Recording
                </Button>
              </Link>
            </div>
          </div>

          <div className='flex flex-col'>
          <div className='scroll-m-20 w-fit mb-1 text-primary font-[600] text-md'>Documents</div>
          <div className='flex gap-2'>
            <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%20Slides.pdf?alt=media&token=4d83d8ce-61b2-4189-acb7-145d6f5d8fe1">
              <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
              <ImageIcon />
                Slide Deck
              </Button>
            </Link>
          </div>
          </div>

          <div className='flex flex-col'>
            <div className='scroll-m-20 w-fit mb-1 text-primary font-[600] text-md'>Participants</div>
            <div className='flex gap-4'>
              <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%201%20Participants.pdf?alt=media&token=b34ea209-9f21-448c-a814-f58398e0b97c">
                <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
                <PersonIcon />
                  Town Hall 1 Participants
                </Button>
              </Link>

              <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%202%20Participants.pdf?alt=media&token=06896f75-b898-4d34-8f6c-78f730f889bb">
                <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
                <PersonIcon />
                  Town Hall 2 Participants
                </Button>
              </Link>

              <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%203%20Participants.pdf?alt=media&token=e1f4e7e2-d47e-4c9d-aa6f-6913f14e2181">
                <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
                <PersonIcon />
                  Town Hall 3 Participants
                </Button>
              </Link>

              <Link target='_blank' href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Town%20Hall%204%20Participants.pdf?alt=media&token=de38805f-704d-4d08-98c5-0234e6859432">
                <Button variant={'outline'} className='flex text-xs items-center h-8 gap-2 font-semibold text-primary hover:text-primary'>
                <PersonIcon />
                  Town Hall 4 Participants
                </Button>
              </Link>
            </div>
          </div>


          </div> 
              
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
          *Source for Definitions: <a className='text-primary hover:underline' href="https://www.nist.gov/bioscience/nist-bioeconomy-lexicon" target='_blank'>National Institute of Science and Technology (NIST) Bioeconomy Lexicon</a>
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

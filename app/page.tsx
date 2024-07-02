import InputChart from '@/components/InputChart'
import ProfileGrid from '@/components/ProfileGrid'
import ReturnTop from '@/components/ReturnTop'
import SplashContent from '@/components/SplashContent'
import ThemeGrid from '@/components/ThemeGrid'
import WorkshopTopics from '@/components/WorkshopTopicsGrid'
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
            <div className="flex flex-col gap-4">
            <h2 id="topics" className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Advancement Workshops</h2>
            <p>
            CASA-Bio is excited to announce our six Advancement Workshops, designed to propel the bioeconomy forward. These interactive workshops will focus on specific research and development challenges and opportunities for the bioeconomy, bringing together experts from academia, industry, and government. The topics of these workshops were selected based on input from the community Town Halls that were hosted earlier in the year and from discussions among the federal, industry, and non-profit stakeholders. 
            </p>
            <p>
            Each workshop will include participants selected from open applications from the R&D community and from suggestions by CASA-Bio organizations, ensuring a diverse range of perspectives and expertise. By working together we can develop strategies to leverage fundamental, use-inspired and translational research and development to drive innovation and advance the bioeconomy.
            </p>
            
            
            {/* <p>
            Each workshop will be fully virtual and take place over two days in July or August. Explore the seven workshop topics below and apply to attend!
            </p> */}
            
            <p>
            The workshops will be fully virtual and take place in August or September. Each workshop will consist of one 90-minute orientation meeting and two full-day sessions. Explore the six workshop topics and apply below!
            </p>
            <p>

            {/* <a className='w-fit text-primary font-semibold' href="https://docs.google.com/forms/d/e/1FAIpQLScx4vU7e7k1yurm5tqfqK_rf2r9Mh5mu5Fpx54CLZKLrntaaA/viewform?usp=sf_link" target="_blank"><Button>Apply Now</Button></a> */}
            <a className='w-fit text-primary font-semibold' href="https://forms.gle/77VHMB23tCdg8K2T9" target="_blank"><Button>Apply Now</Button></a>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2  className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Advancement Workshop Topics</h2>
            <WorkshopTopics />
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

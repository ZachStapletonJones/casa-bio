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
            {/* <div className="flex flex-col gap-4">
            <h2 id="topics" className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Advancement Workshops</h2>
            <p>
            In August and September, six workshops were held, each led by multiple experts from academia, industry, and non-profit organizations. These leaders developed draft proposals for innovative R&D initiatives with high potential to produce meaningful outcomes for the bioeconomy, and their proposals formed the basis for workshop discussions. Workshop participants with a broad spectrum of interests and expertise engaged in robust discussions at each workshop, and their feedback helped inform final versions of the bioeconomy initiatives.
            </p>
          
            
        
       
          </div> */}
          <div className="flex flex-col gap-4">

            <h2 id="initiatives" className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Overview of the Bioeconomy Initiatives</h2>
            <div>The final set of CASA-Bio initiatives capture the excitement and outstanding promise of these R&D areas
            to catalyze collaboration across sectors to advance the future of the bioeconomy. The initiatives include
            the following:</div>
            <WorkshopTopics />
            </div>
            
          
         
          
 
       
        <div className='space-y-4'>
          

            <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Acknowledgements</h2>
            <p>We extend our sincere thanks to the many planning committee members from government and private sectors, who enthusiastically shared ideas and insights on their organizations’ priorities, which provided, and continues to provide, a breadth of collaborative opportunities to explore. A list of these organizations can be found <Link className='w-fit text-primary font-semibold hover:underline' href="/participating-stakeholders">here</Link>.</p>
            <p>We also wish to thank all participants of the Town Hall and Workshop events who gave generously of  their time to share their scientific ideas and visions for the future, which immensely enriched the  discussions and helped influence the scientific directions of the initiatives. </p>
            <p>We are especially grateful for the Workshop Chairs who played a pivotal role in developing the workshop  topics and representing their R&D communities, while envisioning and authoring the six CASA-Bio  initiatives. Their leadership and expertise were essential in shaping six actionable and impactful paths to  a future bioeconomy. The ideas represented in the initiatives belong to the authors and do not  necessarily reflect the views of government agencies.  </p>
            <p>All CASA-Bio events and subsequent discussions were facilitated by an outstanding team at  Knowinnovation; we thank them for their professional guidance on designing and implementing  productive and enjoyable work environments. </p>
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

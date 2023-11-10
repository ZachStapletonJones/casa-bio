import ProfileGrid from '@/components/ProfileGrid'
import ThemeGrid from '@/components/ThemeGrid'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link2Icon } from '@radix-ui/react-icons'
import Link from 'next/link'


export default function Home() {
  return (
      <div className="flex flex-col gap-12 w-full grow items-start justify-center pt-4">

        {/* Splash Content */}
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-16 md:items-start'>
          <div className='order-2 md:order-1 flex flex-col gap-4'>
            <div className='w-full flex flex-col gap-8'>
              <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary w-fit'>Catalyzing Across Sectors to Advance the Bioeconomy</h1>
              <p>Recognizing that the world is on the cusp of an industrial revolution fueled by biotechnology and biomanufacturing, in September 2022, President Biden signed an <a className='text-primary font-semibold underline' href="https://www.whitehouse.gov/briefing-room/presidential-actions/2022/09/12/executive-order-on-advancing-biotechnology-and-biomanufacturing-innovation-for-a-sustainable-safe-and-secure-american-bioeconomy/" target="_blank">Executive Order (EO) on Advancing Biotechnology and Biomanufacturing Innovation for a Sustainable, Safe, and Secure American Bioeconomy</a>.  The EO laid out a vision for a whole-of-government approach to advance biotechnology and biomanufacturing by creating a research agenda outlining foundational and use-inspired R&D needs for innovations in areas such as climate change, food and agriculture, supply chain resilience, and human health, as well as the cross-cutting advances to enable all these areas. Achieving this vision will require significant prioritization and staging of R&D investments across the US Government, as well as actions from the private sector; state, local, and tribal governments; and international partners. </p>
            </div>
            <a className='w-fit' href="https://www.whitehouse.gov/briefing-room/presidential-actions/2022/09/12/executive-order-on-advancing-biotechnology-and-biomanufacturing-innovation-for-a-sustainable-safe-and-secure-american-bioeconomy/" target="_blank">
              <Button className='font-semibold'>View the Executive Order</Button>
            </a>
          </div>
          
          <Card className='order-1 md:order-2 w-full md:w-80 sm:max-w-[450px] md:min-w-[350px] bg-secondary'>
            <CardHeader>
              <CardTitle>Application Information</CardTitle>
              <CardDescription>Register your interest in being a participant at an upcoming event!</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
              <strong>Upcoming Dates:</strong>
              <div>
                <div>Example Date: Jan 1, 2020</div>
                <div>Example Date: Jan 2, 2020</div>
                <div>Example Date: Jan 3, 2020</div>
              </div>
            </CardContent>
            <CardFooter className='flex w-full justify-end'>
              <Link target='_blank' href="/">
                <Button className='flex items-center gap-2 font-semibold'>
                <Link2Icon />
                  Apply
                </Button>
              </Link>
              
            </CardFooter>
          </Card>

        </div>
        <div className='flex flex-col gap-12'>
        <div className='w-full flex flex-col gap-4'>
            <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Action</h2>
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
        </div>

        <div className='w-full flex flex-col gap-4'>
            <h2 className='scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary'>Outcomes</h2>
            <p>We imagine outcomes whereby: </p>
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

        </div>
        
        <div className='flex flex-col gap-4 '>
          <h2 className="scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary">Themes</h2>
          <ThemeGrid />
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className="scroll-m-20 border-b w-fit text-2xl font-semibold tracking-tight text-primary">Collaborators</h2>
          <ProfileGrid />
        </div>
      </div>
  )
}

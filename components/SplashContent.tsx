'use client'

import { FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { ChevronUpIcon, PersonIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function SplashContent() {
    return (
        <div className="flex flex-col gap-4">
          <p>Catalyzing Across Sectors to Advance the Bioeconomy (CASA-Bio) was launched in response to the <a className='w-fit text-primary font-semibold' href="https://www.whitehouse.gov/briefing-room/presidential-actions/2022/09/12/executive-order-on-advancing-biotechnology-and-biomanufacturing-innovation-for-a-sustainable-safe-and-secure-american-bioeconomy/" target="_blank">Executive Order </a> (EO) on Advancing <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0} className="text-primary font-semibold cursor-help">Biotechnology </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-[250px] text-center">Technology that applies to and/or is enabled by life science innovation or product
development*</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider> and <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0} className="text-primary font-semibold cursor-help">Biomanufacturing </span>
        </TooltipTrigger>
        <TooltipContent> <p className="max-w-[250px] text-center">Use of biological systems to produce goods and services at commercial scale*</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>Innovation for a Sustainable, Safe, and Secure American <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0} className="text-primary font-semibold cursor-help">Bioeconomy</span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-[250px] text-center">Economic activity derived from Biotechnology and Biomanufacturing*</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>., released in September 2022 by the Biden administration. One of the aims of the EO was to advance the bioeconomy in five key areas (<Link className='w-fit text-primary font-semibold hover:underline' href="/themes">EO Bioeconomy Themes</Link>): climate change solutions, food and agriculture innovation, supply chain resilience, human health, and cross-cutting innovations—through collaboration across government, industry, non-profits, and academia, i.e., stakeholders.</p>

          <p>In consultation with the Office of Science and Technology Policy, NSF assumed the lead role to foster this collaboration by hosting a two-day meeting in December 2023 to bring together <Link className='w-fit text-primary font-semibold hover:underline' href="/participating-stakeholders">stakeholders</Link> to identify shared research and development (R&D) priorities with strong potential to be advanced through synergistic cooperation. Two dozen bioeconomy-relevant subthemes were identified and shared with the broad R&D community to seek input through direct feedback and <Link className='w-fit text-primary font-semibold hover:underline' href="/town-halls">town hall</Link> events held in February 2024. See our <a className="cursor-pointer font-semibold text-primary" href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/Community%20Online%20and%20Town%20Hall%20Input.pdf?alt=media&token=bb9c6e4a-1c5c-4497-b523-5775c531a163" target="_blank">synthesis of the Town Hall data</a>.</p>

          <p>Between February and April, the NSF team reviewed and shared over 100 <a className="cursor-pointer font-semibold text-primary" href="https://www.google.com/url?q=https://docs.google.com/spreadsheets/d/1nS9WF_zTGcoXdEaJlOP-rZu9cx_HD7gG/edit%23gid%3D698734594&sa=D&source=docs&ust=1717258026778044&usg=AOvVaw3ggHO_oW6nCGGQq02ud-os" target="_blank">bioeconomy roadmaps</a> and planning documents to provide the stakeholders with additional insights in preparation for a Synthesis meeting in April. Armed with this expanded knowledge, stakeholders from government, industry, and non-profits met again to refine the subthemes and to identify six R&D priority areas with strong opportunities for synergy and impact for the bioeconomy.</p>

          <p>In August and September, six workshops were held, each led by multiple experts from academia, industry, and non-profit organizations. These leaders developed draft proposals for innovative R&D initiatives with high potential to produce meaningful outcomes for the bioeconomy, and their proposals formed the basis for workshop discussions. Workshop participants with a broad spectrum of interests and expertise engaged in robust discussions at each workshop, and their feedback helped inform final versions of the bioeconomy initiatives. See the full <a className="cursor-pointer font-semibold text-primary" href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Action%20Plan.pdf?alt=media&token=0e6b6388-545c-4c58-91f1-c426810a3988" target="_blank">CASA-Bio Action Plan</a>. </p>


{/*     */}

          {/* <p className=''>Catalyzing Across Sectors to Advance the Bioeconomy (CASA-Bio) was inspired by the <a className='w-fit text-primary font-semibold' href="https://www.whitehouse.gov/briefing-room/presidential-actions/2022/09/12/executive-order-on-advancing-biotechnology-and-biomanufacturing-innovation-for-a-sustainable-safe-and-secure-american-bioeconomy/" target="_blank">Executive Order </a>  
 (EO) on Advancing <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0} className="text-primary font-semibold cursor-help">Biotechnology </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-[250px] text-center">Technology that applies to and/or is enabled by life science innovation or product
development*</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider> and <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0} className="text-primary font-semibold cursor-help">Biomanufacturing </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-[250px] text-center">Use of biological systems to produce goods and services at commercial scale*</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider> Innovation for a Sustainable, Safe, and Secure
American <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0} className="text-primary font-semibold cursor-help">Bioeconomy</span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-[250px] text-center">Economic activity derived from Biotechnology and Biomanufacturing*</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>. Released by the White House in September of 2022, the EO laid out a grand
vision to advance biotechnology and biomanufacturing through foundational and use-inspired research
and development in five thematic areas (<Link className='w-fit text-primary font-semibold hover:underline' href="/themes">EO Bioeconomy Themes</Link>): climate change, food and
agriculture, supply chain resilience, human health, and cross cutting areas to advance all these areas.
Moreover, the EO called for this vision to be enabled by collaboration among government, industry, the
private sector, and public sector researchers. That sparked our thinking, and we initiated CASA-Bio.</p>
<p>
CASA-Bio is a collaborative, facilitated activity involving <Link className='w-fit text-primary font-semibold hover:underline' href="/participating-stakeholders">stakeholders</Link> from federal funding agencies,
industries, non-profits, and the public sector research community. The overall goal is to give life to the
vision of the Bioeconomy EO by seeking synergy through collaboration in areas of mutual interest.  So far, we have had a series of meetings with government agencies,  industries, and non-profits as well as four community <Link className='w-fit text-primary font-semibold hover:underline' href="/town-halls">town hall</Link> meetings open to the R&D community. Our <a className="cursor-pointer font-semibold text-primary" href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/Community%20Online%20and%20Town%20Hall%20Input.pdf?alt=media&token=bb9c6e4a-1c5c-4497-b523-5775c531a163" target="_blank">synthesis of the town hall data</a> as well as <a className="cursor-pointer font-semibold text-primary" href="https://www.google.com/url?q=https://docs.google.com/spreadsheets/d/1nS9WF_zTGcoXdEaJlOP-rZu9cx_HD7gG/edit%23gid%3D698734594&sa=D&source=docs&ust=1717258026778044&usg=AOvVaw3ggHO_oW6nCGGQq02ud-os" target="_blank">existing roadmaps</a> in the thematic areas ultimately led to our next step, the Advancement Workshops.

See
our full <a className="cursor-pointer font-semibold text-primary" href="https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Action%20Plan.pdf?alt=media&token=0e6b6388-545c-4c58-91f1-c426810a3988" target="_blank">Action Plan</a>.
</p>

<p>
            In August and September, six workshops were held, each led by multiple experts from academia, industry, and non-profit organizations. These leaders developed draft proposals for innovative R&D initiatives with high potential to produce meaningful outcomes for the bioeconomy, and their proposals formed the basis for workshop discussions. Workshop participants with a broad spectrum of interests and expertise engaged in robust discussions at each workshop, and their feedback helped inform final versions of the bioeconomy initiatives.
            </p> */}
{/* <div className="flex gap-2 items-center h-fit">
<a className='w-fit' href="https://www.whitehouse.gov/briefing-room/presidential-actions/2022/09/12/executive-order-on-advancing-biotechnology-and-biomanufacturing-innovation-for-a-sustainable-safe-and-secure-american-bioeconomy/" target="_blank">
  <Button className='font-semibold flex items-center gap-2 w-fit text-xs h-20 sm:h-full sm:text-sm'><FileText className='h-4 w-4' />View the Executive Order</Button>
</a> 
<Link className='w-fit' href="/alignment-participants">
  <Button variant={'default'} className='font-semibold flex items-center gap-2 w-fit text-xs h-20 sm:h-full sm:text-sm'><PersonIcon className='h-4 w-4' />View the Alignment Participants</Button>
</Link> 
<Link className='w-fit' href="/how-we-will-use-your-input">
  <Button variant={'default'} className='font-semibold flex items-center gap-2 w-fit text-xs h-20 sm:h-full sm:text-sm'><QuestionMarkCircledIcon className='h-4 w-4' />View How We Will Use Your Input</Button>
</Link>
</div>  */}
        </div>
    );
}
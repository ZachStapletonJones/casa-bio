import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function AlignmentParticipants() {
  return (
    <div className="w-full space-y-8">
      <div>
        <Link href={"/"}>
          <Button variant={"link"} className="p-0 m-0 flex items-center gap-2">
            <ChevronLeftIcon />
            Return
          </Button>
        </Link>
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-2 text-primary w-fit">
          Alignment Participants
        </h1>
      </div>
      <div className="flex flex-col gap-2">
      <div className="text-lg text-primary font-semibold">Participating Organizations*</div>
      <div>
      Representatives from the following organizations participated in Alignment meetings to develop
Subtheme Challenges associated with relevant Bioeconomy EO Themes.
      </div>
      <ol className="list-disc list-inside">

        <li>BASF</li>
        <li>Bayer Crop Science</li>
        <li>Boehringer Ingelheim</li>
        <li>Bridgestone Americas</li>
        <li>Department of Defense</li>
        <li>Department of Health and Human Services, Administration for Strategic Preparedness &amp; Response
(ASPR), Biomedical Advanced Research and Development Authority (BARDA)</li>
<li>Department of Health and Human Services, Centers for Disease Control and Prevention (CDC), National
Institute for Occupational Safety &amp; Health (NIOSH)</li>
<li>Department of the Interior, United States Geological Survey</li>
<li>Engineering Biology Research Consortium (EBRC)</li>
<li>Foundation for Food and Agricultural Research (FFAR)</li>
<li>FUJIFILM Diosynth Biotechnologies</li>
<li>Ginkgo Bioworks</li>
<li>Gryphon Scientific</li>
<li>IBM</li>
<li>LanzaTech</li>
<li>National Aeronautics and Space Administration (NASA)</li>
<li>National Institute of Standards and Technology (NIST), U.S. Department of Commerce</li>
<li>National Institutes of Health (NIH)</li>
<li>National Science Foundation (NSF)</li>
<li>Novozymes</li>
<li>Schmidt Futures</li>
<li>The Good Food Institute</li>
<li>U.S. Department of Energy&#39;s (DOE&#39;s) Office of Science, Biological and Environmental Research</li>
<li>U.S. Department of Energy&#39;s (DOE&#39;s) Bioenergy Technologies Office (BETO)</li>
<li>U.S. Environmental Protection Agency (EPA)</li>
<li>United States Department of Agriculture (USDA) </li>
      </ol>
      <div className="pt-4">*An organization’s participation in CASA-Bio does not constitute endorsement, obligation, or support for
sub-thematic areas presented herein.</div>
      </div>
    </div>
  );
}

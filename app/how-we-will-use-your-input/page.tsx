import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function InputExplanation() {
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
          How We Will Use Your Input
        </h1>
      </div>
      <div className="flex flex-col gap-2">
      <div className="text-lg text-primary font-semibold">Your Contribution to Our Collective Understanding</div>
      <div>
        We are excited to have you join us in a unique project (CASA-Bio) where
        your insights and ideas are invaluable. By filling out our form, you’ll
        be contributing to a larger conversation, and here is how:
      </div>
      <ol className="list-decimal space-y-4 pt-4">
        <li>
          <div className="text-primary font-semibold">
            Sharing Individual Ideas
          </div>
          <div>
            When you submit your responses, you’re not just sending information
            into the void. Your ideas have the potential to resonate with
            others. As part of our commitment to a collaborative community, we
            may share your individual ideas with other participants of CASA-Bio
            or during subsequent meetings. This sharing aims to foster a sense
            of connection and shared purpose among us all.
          </div>
        </li>
        <li>
          <div className="text-primary font-semibold">
          Creating an Aggregate View via Synthesis
          </div>
          <div>
          Your input will also play a crucial role in shaping a bigger picture as we seek to synthesize and
identify priority research areas for the next phases of CASA-BIO. We’ll be using text analysis and AI
methods to analyze the collective data. The goal is to identify common themes, trends, and topics
that emerge from the multitude of voices. Your data, along with everyone else’s, will contribute to
this aggregate view, offering us insights that no single perspective can provide.
          </div>
        </li>
        <li>
          <div className="text-primary font-semibold">
          Privacy and Respect
          </div>
          <div>
          While we’re eager to share and analyze ideas, we respect your privacy. Only non-personal, thematic
content from your responses will be used in our analyses and shared with others. Your personal
details will remain confidential and will not be part of the shared or analyzed data.
          </div>
        </li>
        <li>
          <div className="text-primary font-semibold">
          Join the Conversation
          </div>
          <div>
          By submitting your form, you’re not just sharing information; you’re joining a conversation that
spans beyond individuals. You’re helping us all understand how we can contribute as a collective
community to advance the bioeconomy.
          </div>
        </li>
      </ol>
      </div>
    </div>
  );
}

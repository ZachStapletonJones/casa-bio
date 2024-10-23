import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function SynergiesBroaderImpact() {
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
        Synergies and Broader Impact
        </h1>
      </div>
      <div className="flex flex-col gap-2">
      <p>These initiatives represent focused efforts for which strategic R&D investment can both lead to
breakthroughs in specific areas and have ripple effects across the entire bioeconomy. Rather than
viewing each initiative in isolation, we encourage you to <u>consider how advancements in one area could
benefit others</u>. For instance, progress in biomanufacturing for vaccine production could drive
improvements in protein diversification and biomass supply chains, leveraging the same technologies
and processes to increase food security and enhance the scalability of bio-manufactured products.</p>
      <p>As you explore the initiatives, look also for <u>synergistic goals</u> (e.g., sustainability, resource efficiency,
circular economies, and workforce development) and <u>similarities in technology use</u> (e.g., artificial
intelligence and machine learning, data infrastructure). For example, the AgSystems initiative, which
focuses on systems-level breeding of resilient plants and animals, aligns naturally with efforts in the
Diversifying Edible Proteins initiative to create new, sustainable sources for food and feed. Both
initiatives depend on advances in biotechnology and data-driven tools, and each would reinforce the
other by sharing methodologies and food-related outcomes.</p>
      <p>Also, consider the <u>complementary outcomes</u> that might arise from one initiative ‘feeding’ another. For
example, the Carbon Capture and the Value from Waste Carbon initiatives, which both include efforts to
capture and convert carbon gases, will simultaneously reduce atmospheric carbon and provide new
feedstocks for biomanufacturing processes, such as those included in the Resilient Supply Chains
initiative. Collectively, these three initiatives would contribute to production of sustainable materials and
reduced reliance on fossil-based energy, such that investments in these areas could revolutionize how we
fulfill industrial needs while mitigating environmental challenges.</p>
      <p>By approaching the initiatives with an eye for these synergies, you will gain insights into how these
targeted R&D efforts not only solve immediate challenges, but also lay the foundation for broader
advancements across the U.S. bioeconomy, creating a more interconnected, resilient, and sustainable
future.</p>
      </div>
    </div>
  );
}

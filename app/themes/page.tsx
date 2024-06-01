import InputChart from "@/components/InputChart";
import ThemeGrid from "@/components/ThemeGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeftIcon, FileTextIcon, ImageIcon, PersonIcon, VideoIcon } from "@radix-ui/react-icons";
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
        EO Bioeconomy Themes
        </h1>
      </div>
      <div className="flex flex-col gap-2">
      <ThemeGrid />
      </div>
    </div>
  );
}

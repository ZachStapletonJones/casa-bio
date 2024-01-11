import { ChevronLeftIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";


export default function Error() {
    return (
        <div className="w-full text-center pt-8">
            <div className="text-center justify-center text-lg font-semibold text-primary flex items-center gap-2"><ExclamationTriangleIcon />Oops! Something went wrong.</div>
            <div className="flex justify-center pt-8">
            <Link href={'/'}>
        <Button variant={'link'} className='p-0 m-0 flex items-center gap-2'><ChevronLeftIcon />Return Home</Button>
        </Link>
            </div>
        </div>
    );
}
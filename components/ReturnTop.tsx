'use client'

import { ChevronUpIcon } from "lucide-react";

export default function ReturnTop() {
    return (
        <div className="pb-4">
        <a className={`font-semibold text-sm flex items-center gap-2 text-primary cursor-pointer hover:underline`} onClick={()=> {
            window.scroll({
                top: -80,
                behavior: 'smooth'
              }) 
        }}>
            <ChevronUpIcon className="w-4 h-4" />
             Return to top
        </a>
        </div>
    );
}
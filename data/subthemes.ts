import { ThemeData, themes } from "./themes"

export type Subtheme = {
 [theme: number]: SubthemeData[]
}

export type SubthemeData = {
    title: string,
    slug: string,
    description: string,
    tagline: string,
    introduction: string,
    content: string,
    footnotes:string  
}

export const subthemes: Subtheme[] = [
    {1: [
    {
        title: 'string',
        slug: 'string',
        description: 'string',
        tagline: 'string',
        introduction: 'string',
        content: 'string',
        footnotes:'string'  
    },
    {
        title: 'string',
        slug: 'string',
        description: 'string',
        tagline: 'string',
        introduction: 'string',
        content: 'string',
        footnotes:'string'  
    }
]}
]
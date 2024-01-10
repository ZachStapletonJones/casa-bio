import { ThemeData, themes } from "./themes"

export type Subtheme = {
 [theme: number]: SubthemeData[]
}

export type SubthemeData = {
    title: string,
    slug: string,
    description: string,
    pageTitle: string,
    questions: string
}

export const subthemes: Subtheme[] = [
    {1: [
    {
        title: 'CCS-01: Creating Value from Waste Carbon for a Circular Bioeconomy',
        slug: 'creating-value-from-waste-carbon-for-a-circular-bioeconomy',
        description: `We need to make use of all available carbon, including waste carbon resources, to meet current demands and overcome bottlenecks that prevent or slow a transition away from fossil inputs.`,
        pageTitle: '# *CCS-01:* Creating Value from Waste Carbon for a Circular Bioeconomy',
        questions: `
- **What's the challenge or opportunity space?**
- **What is the urgency?**
- **How do you envision working cross agency (in parallel vs sequentially)?**  
- **What is the potential for impact -- societal and economic -- in 5-7 years?** 
- **What are the key R&D needs or opportunities that we want to hear from the community?**      
` 
    },
    {
        title: 'CCS-02: Climate-Smart Food and Agriculture',
        slug: 'climate-smart-food-and-agriculture',
        description: `Although food and agriculture are major contributors to greenhouse gas emissions, both at the field level and in downstream production, food and agriculture can be used to create climate solutions.`,
        pageTitle: '# *CCS-02:* Climate-Smart Food and Agriculture',
        questions: `
- **What's the challenge or opportunity space?**
- **What is the urgency?**
- **How do you envision working cross agency (in parallel vs sequentially)?**  
- **What is the potential for impact -- societal and economic -- in 5-7 years?** 
- **What are the key R&D needs or opportunities that we want to hear from the community?**      
` 
    },
    {
        title: 'CCS-03: Reducing CO2 and Other Harmful Gasses',
        slug: 'reducing-co2-and-other-harmful-gasses',
        description: `Although food and agriculture are major contributors to greenhouse gas emissions, both at the field level and in downstream production, food and agriculture can be used to create climate solutions.`,
        pageTitle: '# *CCS-03:* Reducing CO2 and Other Harmful Gasses',
        questions: `
- **What's the challenge or opportunity space?**
- **What is the urgency?**
- **How do you envision working cross agency (in parallel vs sequentially)?**  
- **What is the potential for impact -- societal and economic -- in 5-7 years?** 
- **What are the key R&D needs or opportunities that we want to hear from the community?**      
` 
    }
]},
{2: [
    {
        title: 'Example: Sustainable Agriculture and Food Security',
        slug: 'sustainable-agriculture-food-security',
        description: ``,
        pageTitle: '# *Example:* Sustainable Agriculture and Food Security',
        questions: `
- **What's the challenge or opportunity space?**
- **What is the urgency?**
- **How do you envision working cross agency (in parallel vs sequentially)?**  
- **What is the potential for impact -- societal and economic -- in 5-7 years?** 
- **What are the key R&D needs or opportunities that we want to hear from the community?**                   
` 
    }
]},
{3: [
    {
        title: 'Example: Advanced Analytics and AI in Supply Chain Optimization',
        slug: 'advanced-analytics-ai-in-supply-chain-optimization',
        description: ``,
        pageTitle: '# *Example:* Advanced Analytics and AI in Supply Chain Optimization',
        questions: `
- **What's the challenge or opportunity space?**
- **What is the urgency?**
- **How do you envision working cross agency (in parallel vs sequentially)?**  
- **What is the potential for impact -- societal and economic -- in 5-7 years?** 
- **What are the key R&D needs or opportunities that we want to hear from the community?**                   
` 
    }
]},
{4: [
    {
        title: 'Example: Precision Medicine',
        slug: 'precision-medicine',
        description: ``,
        pageTitle: '# *Example:* Precision Medicine',
        questions: `
- **What's the challenge or opportunity space?**
- **What is the urgency?**
- **How do you envision working cross agency (in parallel vs sequentially)?**  
- **What is the potential for impact -- societal and economic -- in 5-7 years?** 
- **What are the key R&D needs or opportunities that we want to hear from the community?**                
` 
    }
]},
{5: [
    {
        title: 'Example: Synthetic Biology for Environmental Remediation',
        slug: 'synthetic-biology-environmental-remediation',
        description: ``,
        pageTitle: '# *Example:* Synthetic Biology for Environmental Remediation',
        questions: `
- **What's the challenge or opportunity space?**
- **What is the urgency?**
- **How do you envision working cross agency (in parallel vs sequentially)?**  
- **What is the potential for impact -- societal and economic -- in 5-7 years?** 
- **What are the key R&D needs or opportunities that we want to hear from the community?**                 
` 
    }
]}
]
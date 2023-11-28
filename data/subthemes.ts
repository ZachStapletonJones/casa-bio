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
        title: 'Climate resilience and Adaptation Strategies',
        slug: 'climate-resilience-adaptation-strategies',
        description: ``,
        pageTitle: '# Climate resilience and Adaptation Strategies',
        questions: `
- **What challenge within the sub-theme keeps you up at night?**
    - [x] *EXAMPLE: Balancing rapid clean energy development with environmental impact and resource sustainability* 
- **What is your one best solution to address the challenge?**
    - [x] *EXAMPLE: Integrated renewable energy systems utilizing solar, wind, and bioenergy, optimized with AI for efficiency and minimal ecological footprint*  
- **What is your estimated timeframe for achieving the solution -- 2, 5, or 10 years?**
    - [x] *EXAMPLE: Achievable within 5 years with focused research and development.*       
- **Besides money, what do you need (e.g., strategies, collaborations, resources) to achieve your solution?**
    - [x] *EXAMPLE: Cross-sector collaboration, regulatory support, advances in AI and storage technologies, and public acceptance.*                  
` 
    }
]},
{2: [
    {
        title: 'Sustainable Agriculture and Food Security',
        slug: 'sustainable-agriculture-food-security',
        description: ``,
        pageTitle: '# Sustainable Agriculture and Food Security',
        questions: `
- **What challenge within the sub-theme keeps you up at night? (250 Characters)**
    - [x] *EXAMPLE: Ensuring nutritional value is not compromised in sustainable, high-yield crops.* 
- **What is your one best solution to address the challenge?**
    - [x] *EXAMPLE: Develop genetically optimized crops that are nutrient-dense, resilient, and sustainable.*  
- **What is your estimated timeframe for achieving the solution -- 2, 5, or 10 years?**
    - [x] *EXAMPLE: Possible in 5 years with dedicated genetic research and trials.*       
- **Besides money, what do you need (e.g., strategies, collaborations, resources) to achieve your solution?**
    - [x] *EXAMPLE: Advanced genetic editing technologies, regulatory approvals, collaboration between agricultural scientists and nutritionists, and public acceptance.*                  
` 
    }
]},
{3: [
    {
        title: 'Advanced Analytics and AI in Supply Chain Optimization',
        slug: 'advanced-analytics-ai-in-supply-chain-optimization',
        description: ``,
        pageTitle: '# Advanced Analytics and AI in Supply Chain Optimization',
        questions: `
- **What challenge within the sub-theme keeps you up at night? (250 Characters)**
    - [x] *EXAMPLE: Integrating bioeconomy products into supply chains without disrupting efficiency or sustainability.* 
- **What is your one best solution to address the challenge?**
    - [x] *EXAMPLE: Develop AI-driven platforms for seamless integration and optimization of bio-based products in existing supply chains.*  
- **What is your estimated timeframe for achieving the solution -- 2, 5, or 10 years?**
    - [x] *EXAMPLE: Feasible in approximately 5 years with concerted effort in AI and supply chain research.*       
- **Besides money, what do you need (e.g., strategies, collaborations, resources) to achieve your solution?**
    - [x] *EXAMPLE: Collaboration between AI tech firms, bioeconomy experts, supply chain managers, and policy support for bioeconomy initiatives.*                  
` 
    }
]},
{4: [
    {
        title: 'Precision Medicine',
        slug: 'precision-medicine',
        description: ``,
        pageTitle: '# Precision Medicine',
        questions: `
- **What challenge within the sub-theme keeps you up at night? (250 Characters)**
    - [x] *EXAMPLE: In precision medicine, there's significant individual variability in cell responses to (drug) therapies, even in those with matching genetic markers.* 
- **What is your one best solution to address the challenge?**
    - [x] *EXAMPLE: Marry organ-on-a-chip technologies with single-cell sequencing. This approach will test drug responses in in-vitro models that closely mimic individual patient cell environments. Want to discover what cellular environments/components impact responses.*  
- **What is your estimated timeframe for achieving the solution -- 2, 5, or 10 years?**
    - [x] *EXAMPLE: Expect results within 5 years.*       
- **Besides money, what do you need (e.g., strategies, collaborations, resources) to achieve your solution?**
    - [x] *EXAMPLE: Collaboration across cell biologists, bioengineers, and computational biologists; Data Infrastructure; Ethical Considerations for patient data and tissue use; and Regulatory Pathways.*                  
` 
    }
]},
{5: [
    {
        title: 'Synthetic Biology for Environmental Remediation',
        slug: 'synthetic-biology-environmental-remediation',
        description: ``,
        pageTitle: '# Synthetic Biology for Environmental Remediation',
        questions: `
- **What challenge within the sub-theme keeps you up at night? (250 Characters)**
    - [x] *EXAMPLE: Implementing cost-effective soil health improvement using synthetic biology without harming small farm ecosystems.* 
- **What is your one best solution to address the challenge?**
    - [x] *EXAMPLE: Introduce genetically engineered microorganisms to enhance soil fertility and pest resistance specifically designed for small-scall farms.*  
- **What is your estimated timeframe for achieving the solution -- 2, 5, or 10 years?**
    - [x] *EXAMPLE: Achievable in 5-10 years with focused R&D and field trials.*       
- **Besides money, what do you need (e.g., strategies, collaborations, resources) to achieve your solution?**
    - [x] *EXAMPLE: Collaboration across biotechnologies, regulatory approval, farmer education for adoption, ecological impact assessments, community acceptance.*                  
` 
    }
]}
]
export type ThemeData = {
    promptImage: string,
    bannerImage:string
    title: string,
    slug: string,
    description: string,
    tagline: string,
    summary: string,
    
}

export const themes:ThemeData[] = [
    {
        //Theme 1
        promptImage: 'https://roadmap.ebrc.org/wp-content/uploads/2020/10/FoodAgriculture_Icon_Green-150x150.png',
        bannerImage: 'https://roadmap.ebrc.org/wp-content/uploads/2022/09/Copy-of-Theme-4-Remake-Flat-Web-Size-2048x1366.jpg',
        title: 'FOOD & AGRICULTURE',
        slug: 'food-agriculture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tagline: 'Food & Agriculture addresses specific opportunities for engineering biology to reduce greenhouse gas emissions from food production and waste and towards making agriculture and food systems more robust to climate change.',
        summary: 
`# The Impact of Climate Change on Agriculture
Agriculture and food systems are **especially vulnerable to climate change**. More intense and frequent droughts, floods, and heat waves have **decimated agricultural output** in all parts of the world, but have been especially detrimental to the Global South.[^1][^2][^3]

## The Need for Enhanced Food Security

The impacts of these extreme climate events are compounded by a *growing global population*, leading to an acute need to improve food security. 

### Current Agricultural Practices and Climate Change

On top of this, many current agricultural practices even contribute to climate change and instability, through:
- The production of greenhouse gases (particularly methane)
- Production and over-application of synthetic nitrogen fertilizer
- Inefficient water use
- Production of waste

## Leveraging Engineering Biology in Agriculture

The food and agriculture sector must leverage engineering biology to:
1. Minimize its impact on climate change
2. Sustain production in the face of abiotic and biotic stressors that result from climate change

### Focus Areas

The **Food & Agriculture** theme focuses on engineering biology research opportunities to enable:
- Production of food and crops with lower greenhouse gas (GHG) emissions through climate-friendly biofertilizers
- Sustainable production of meat and meat-alternatives
- Crop and soil resilience
- Opportunities in ‘smart agriculture’
- Opportunities to limit food waste or convert it to useful products

## Stakeholder Engagement

Importantly, further advancement of engineering biology for agriculture requires ongoing stakeholder engagement between biotech researchers, legislators, consumers, and agriculture producers in order to:
- Identify tolerable risk thresholds
- Lower barriers to adoption
- Incentivize scale-up

For more information, please visit the [Engineering Biology Research Consortium](https://www.ebrc.org).

[^1]: Reference 1
[^2]: Reference 2
[^3]: Reference 3`,
        
    },
    {
        //Theme 2
        promptImage: 'https://roadmap.ebrc.org/wp-content/uploads/2019/02/lightbulb-150x150.png',
        bannerImage: 'https://roadmap.ebrc.org/wp-content/uploads/2022/09/Copy-of-Theme-4-Remake-Flat-Web-Size-2048x1366.jpg',
        title: 'TRANSPORTATION & ENERGY',
        slug: 'transportation-energy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tagline: 'Transportation & Energy addresses engineering biology opportunities in biofuels, electricity production and storage, and reducing emissions from transportation, shipping, and aviation.',
        summary: 'Improving efficiency and sustainability in transportation and energy with engineering biology. While biofuels are one of the most recognizable uses of engineering biology, many other opportunities exist for biotechnology to reduce the impact of the energy and transportation sectors on climate change and to contribute to long-term sustainability. Engineering biology could revolutionize energy storage technologies, turning us away from environmentally-hazardous, and economically unsustainable, rare-earth batteries and enabling a “green” solution to storage of excess electricity from wind and solar. Advancements in microbial fuel cell technology could also enable wide-scale generation of electricity from biological systems. Progress is needed to increase the energy-density of fuel from biological feedstocks and to better capture and utilize organismal electron-transfer. For a different approach at reducing energy use, transportation efficiency could be improved with biomaterials and bio-derived coatings, such as biocoatings for ship hulls to reduce fouling and barnacle build-up, reducing friction and fuel utilization.',
        
    },
    {
        //Theme 3
        promptImage: 'https://roadmap.ebrc.org/wp-content/uploads/2019/06/ind-bio-150x150.png',
        bannerImage: 'https://roadmap.ebrc.org/wp-content/uploads/2022/09/Copy-of-Theme-4-Remake-Flat-Web-Size-2048x1366.jpg',
        title: 'MATERIALS PRODUCTION & INDUSTRIAL PROCESSES',
        slug: 'materials-production-industrial-processes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        tagline: 'Materials Production & Industrial Processes identifies engineering biology opportunities in the built environment, textiles, and other consumer products for reducing the anthropogenic carbon footprint, reducing toxins and wastes, and recovering economically-valuable resources sustainably.',
        summary: 'The manufacturing of materials and products, including plastics, textiles, cement and other building materials consumes large amounts of energy and is a substantial source of global greenhouse gas (GHG) emissions.1,2 This roadmap’s Materials Production & Industrial Processes theme focuses on how to replace some of today’s most energy-, resource-, and emissions-intensive — and environmentally-damaging — materials with sustainable, biobased alternatives. One important approach is to embrace a circular bioeconomy: the current global economy is largely linear, meaning that consumables are mass produced, used, and then disposed of; in a circular economy, products at the end of their life cycles become the inputs for a new generation of materials or products. Utilizing engineering biology to degrade materials and waste and recycle their components and generate new, value-added products will help build opportunities for decreasing the emissions associated with industrial processes and taking an important step toward a sustainable future.',
        
    }
]
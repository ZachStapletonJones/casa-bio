export type ThemeData = {
    id: number,
    color: string;
    promptImage: string;
    bannerImage: string;
    title: string;
    slug: string;
    description: string;
    tagline: string;
    introduction: string;
    content: string;
    footnotes: string;
}

export type ThemeDataObject = ThemeData[];

export const themes: ThemeDataObject = [
  {
    //Theme 1
    id: 1,
    color: '#c27100',
    promptImage: "icons/climate-change-solutions.svg",
    bannerImage: "placeholder-banner.png",
    title: "Climate Change Solutions",
    slug: "climate-change-solutions",
    description: "Addressing climate change through innovation and scientific collaboration.",
    tagline: `# Climate Change Solutions
`,
    introduction: `## Overview
The specter of climate change looms large over our planet's future, posing unprecedented threats to both human civilization and the natural world. Characterized by rising global temperatures, extreme weather events, melting ice caps, and rising sea levels, climate change is not just an environmental issue but a multifaceted challenge impacting every facet of life – from health and agriculture to economics and infrastructure, and global ecosystems. The consequences are far-reaching and alarming. We face increasing incidences of droughts, floods, and hurricanes, loss of biodiversity, and disruptions to food and water supplies, all of which pose serious threats to global stability and wellbeing.
`,
    content: `However, within this crisis lies a significant opportunity, particularly in the realm of biological research and development (R&D). The biological scientific and engineering community is uniquely positioned to contribute significantly to addressing climate change, harnessing innovation to not only mitigate its impacts but also adapt to its realities. Biological approaches are increasingly recognized as a critical tool in the toolbelt for addressing climate change. Indeed, the scope of R&D in addressing climate change through the bioeconomy is vast and includes enabling circularity, renewable energy technologies, sustainable manufacturing, climate-smart agriculture, and carbon sequestration methods, to name just a few areas.

This moment in history is not just a challenge; it is a clarion call to action for scientists and engineers across the globe. The key solution to climate change will undoubtedly emerge from laboratories, research institutions, innovative startups, farms, and mature industries. We can work together to identify ways to shift sectors like energy and food/agriculture from major contributors of greenhouse gas emissions to developers and drivers of solutions. 

## Call to Action

The CASA-Bio initiative was created to help implement the Bioeconomy Executive Order issued by the White House in September 2022.  The EO laid out a vision for government-wide collaboration to advance biotechnology and biomanufacturing through foundational and use-inspired research in five thematic areas:  climate change, food and agriculture, supply chain resilience, human health, and the cross-cutting advances.  The goal of CASA-Bio is to bring the EO to life.

The first step in the CASA-Bio Action Plan was a set of so-called Alignment Meetings held in December 2023 in which representatives from government funding agencies, industries, and non-profits met and collaborated to identify scientific subthemes of shared interest—within each of the Bioeconomy Executive Order Themes--that we believe have high potential to advance the bioeconomy through innovative R&D. Now, it is time for step two. We invite you, the research community, to view these subthemes and consider how your research ideas could contribute. Your input will serve to help us define synergistic priority research areas that will be subjects of future research community workshops and development of road maps for addressing key challenges to advance the bioeconomy.  

Every research project, experiment, or new idea contributes to a larger collective effort in combating this global challenge! Whether your expertise lies in renewable energy, materials science, biology, engineering, or any other field, your contributions are essential, and we welcome them in this process. You have the opportunity, and arguably the responsibility, to direct your skills and knowledge towards one of the most pressing issues of our time.

This is a call to action for the R&D community. Your work can drive us towards a more sustainable, resilient, and equitable world, ensuring a livable planet for future generations. Now is the time to rise to this challenge, to share your expertise and ingenuity toward identifying ways to address this existential threat that transcends borders and disciplines. 

Please explore the following subthemes and share with us your most creative ideas about how to move R&D forward in these areas. Or, realizing that these subthemes only scratch the surface, feel free to suggest a new subtheme and accompanying R&D. Your input will help us identify synergies and collective next steps to advance the bioeconomy. All ideas are welcome!  
`,
    footnotes: `- Footnote 1
- Footnote 2
`,
  },

  {
    //Theme 2
    id: 2,
    color: '#c27100',
    promptImage: "placeholder-prompt.png",
    bannerImage: "placeholder-banner.png",
    title: "Food and Agriculture Innovation",
    slug: "food-agriculture-innovation",
    description: "Enhancing sustainable food and agriculture solutions for a growing population.",
    tagline: `# Food and Agriculture Innovation
#### Questions to consider:
- **Within this theme, what is the goal?**
- **What is exciting and urgent?  Imagine a world .... where...**
- **What might be the practical (societal or economic) impact(s)?**
`,
    introduction: `## Introduction
As our planet faces the dual challenge of an increasing population and the pressing impacts of climate change, the future of food and agriculture emerges as a critical global issue. The need to sustainably feed a projected population of nearly 10 billion by 2050, against the backdrop of shrinking arable land and dwindling natural resources, underscores a pressing need for innovation. This scenario is not just about agricultural productivity; it encompasses broader themes of nutrition, food security, environmental sustainability, and equitable access.
`,
content: `The landscape of agriculture and food production is on the cusp of a significant transformation. With the advent of advanced technologies and scientific breakthroughs, the R&D community stands at the forefront of pioneering sustainable solutions. The challenges are multifaceted – from improving crop yields and resilience in the face of climate extremes to ensuring sustainable livestock management and protecting biodiversity. There's also a critical need to reduce food waste, enhance food storage and transportation, and ensure the nutritional value of our food.

Innovative research and development offer a pathway to address these challenges. Biotechnology, for instance, holds the key to developing drought-resistant and nutrient-efficient crop varieties, while advances in soil science can lead to more sustainable land management practices. Precision agriculture, leveraging IoT and AI, can optimize resource use and boost productivity. Additionally, the exploration of alternative proteins and novel food sources presents an opportunity to diversify our food systems and reduce environmental impact.  These are just a few examples to provide a sense of potential, but ideas outside these examples are welcome.

For scientists and engineers, the opportunities to contribute to this vital field are abundant. Whether your expertise is in genetics, robotics, environmental science, or food technology, your research can have a profound impact. There is a growing need for interdisciplinary approaches that combine different areas of expertise to create holistic and sustainable solutions.

This is a call to action for the R&D community. The future of our food systems and agricultural practices depends on the innovations we develop tomorrow. Your work can lead to more resilient crop varieties, sustainable farming practices, efficient resource use, and ultimately, a more secure and sustainable food future. By engaging in this field, you're not just contributing to scientific progress; you're playing a crucial role in shaping a sustainable future for our planet and its inhabitants, ensuring that we can feed our growing population in a way that respects the Earth and its resources.
`,
    footnotes: `- Footnote 1
- Footnote 2
`,
  },

  {
    //Theme 3
    id: 3,
    color: 'hsla(35, 100%, 38%, 1)',
    promptImage: "placeholder-prompt.png",
    bannerImage: "placeholder-banner.png",
    title: "Supply Chain Resilience",
    slug: "supply-chain-resilience",
    description: "Building global supply chain resilience through innovative R&D solutions.",
    tagline: `# Supply Chain Resilience
#### Questions to consider:
- **Within this theme, what is the goal?**
- **What is exciting and urgent?  Imagine a world .... where...**
- **What might be the practical (societal or economic) impact(s)?**
`,
    introduction: `## Introduction
In an era marked by global interconnectivity and rapidly evolving markets, the resilience of supply chains has become a critical issue. Recent events have starkly highlighted the vulnerabilities in our global supply chains—disruptions caused by pandemics, climate change, geopolitical tensions, and technological shifts have had profound impacts on economies and societies worldwide. The fragility of these intricate networks has revealed an urgent need for robust solutions, making supply chain resilience not just a logistical concern but a strategic imperative.
`,
content: `This challenge presents a unique opportunity, especially in the realm of research and development (R&D). The scientific and engineering community is poised to play a pivotal role in reimagining and reinforcing supply chains. From advanced data analytics to biomanufacturing, and from sustainable logistics to AI-driven forecasting models, the potential for innovation in ensuring efficient, resilient, and adaptable supply networks is immense.

The nature of this challenge is inherently multidisciplinary, calling for expertise from diverse fields. Data scientists, engineers, economists, biologists, and logistics experts, among others, are essential in crafting solutions that are not only technologically advanced but also economically viable and environmentally sustainable. The aim is to build supply chains that are not only resistant to disruptions but can also adapt and evolve in the face of changing conditions.

This is a call to action for the R&D community. The future of global trade and commerce relies heavily on our ability to innovate in the face of uncertainty and complexity. Your research and developments can lead to smarter, more agile supply chain models that balance efficiency with resilience. Whether your focus is on blockchain technology, machine learning, sustainable transportation, or biotechnological production, to name just a few areas, your contributions are vital.

You have the opportunity to shape a new paradigm in supply chain management, one that can withstand the challenges of the 21st century and beyond. Your work can ensure the seamless flow of goods and services, underpinning economic growth, and supporting communities across the globe. Join this crucial endeavor and be part of the movement that redefines resilience in the interconnected world of tomorrow.
`,
    footnotes: `- Footnote 1
- Footnote 2
`,
  },

  {
    //Theme 4
    id: 4,
    color: 'hsla(35, 100%, 38%, 1)',
    promptImage: "placeholder-prompt.png",
    bannerImage: "placeholder-banner.png",
    title: "Human Health",
    slug: "human-health",
    description: "Advancing human health outcomes through innovative R&D across the full health continuum.",
    tagline: `# Human Health
#### Questions to consider:
- **Within this theme, what is the goal?**
- **What is exciting and urgent?  Imagine a world .... where...**
- **What might be the practical (societal or economic) impact(s)?**
`,
    introduction: `## Introduction
In the ever-evolving landscape of human health, the challenges we face today are as diverse as they are complex. From the rise of chronic diseases and global pandemics to the growing need for personalized medicine and sustainable healthcare solutions, the urgency to innovate in the field of human health has never been greater. These challenges present not only obstacles but also immense opportunities for the research and development (R&D) community to make groundbreaking contributions.
`,
content: `The realm of human health R&D is vast and multifaceted, encompassing areas such as biomedical research, public health studies, pharmaceutical development, medical technology, and healthcare delivery models. Scientists, engineers, and healthcare professionals are at the forefront of this endeavor, working to uncover new insights into living systems, human biology, develop life-saving treatments and technologies, and improve healthcare systems globally.
This scenario is not just a professional opportunity; it's a global imperative. As members of the R&D community, there's a call to action to apply your knowledge, skills, and creativity to address the pressing health challenges of our time. Whether your expertise is in genetics, bioengineering, pharmacology, data science, or any other field, your contributions can lead to significant advancements in health and medicine.

Your work has the potential to revolutionize how we understand and treat diseases, enhance the effectiveness and accessibility of healthcare, and ultimately improve the quality and longevity of life. The development of new vaccines, personalized therapies, advanced diagnostic tools, and efficient healthcare systems are just a few examples of the impactful outcomes your research can achieve.

Now is the time to harness the power of innovation to drive forward advances in human health. The collaborative efforts of the R&D community can lead to transformative changes. Join this critical mission to advance human health, where your contributions can make a profound difference in the lives of millions and shape a healthier future for all.
    
`,
    footnotes: `- Footnote 1
- Footnote 2
`,
  },

 {
    //Theme 5
    id: 5,
    color: 'hsla(35, 100%, 38%, 1)',
    promptImage: "placeholder-prompt.png",
    bannerImage: "placeholder-banner.png",
    title: "Cross-Cutting Advances",
    slug: "cross-cutting-advances",
    description: "Merging foundational discoveries, innovations, and infrastructure to power the bioeconomy.",
    tagline: `# Cross-Cutting Advances
#### Questions to consider:
- **Within this theme, what is the goal?**
- **What is exciting and urgent?  Imagine a world .... where...**
- **What might be the practical (societal or economic) impact(s)?**
`,
    introduction: `## Introduction
In the dynamic landscape of biotechnology, we stand on the precipice of a revolution, one that harmonizes the spirit of discovery with the pragmatism of application. This revolution, extending its influence across healthcare, agriculture, clean energy, and beyond, is fueled by a blend of fundamental biological discoveries and advancements in diverse scientific and engineering fields. The balance between exploring new frontiers in basic science and developing real-world solutions is crucial in driving this transformative era.
`,
content: `This call to action for the research and development community emphasizes the synergy between discovery and application. Scientists and engineers are encouraged to engage not only in deep exploratory research but also in translating these discoveries into tangible innovations. While the pursuit of fundamental understanding in areas like genomics and bioinformatics is vital, equally important is the application of this knowledge to create solutions for global challenges.

The scope of cross-cutting advances in biotechnology necessitates a multifaceted approach. From refining DNA-based diagnostics and whole genome sequencing to harnessing the potential of genome editing, the impact of these technologies is profound. They exemplify how curiosity-driven research can lead to breakthroughs like the rapid development of COVID-19 tests and mRNA vaccines – achievements born from foundational research yet swiftly applied to address urgent global needs.
In moving forward, the R&D community is invited to contribute to a spectrum of themes essential for the bioeconomy's growth. The areas under consideration are myriad, but for the sake of example imagine tapping into Earth's biodiversity for new insights, predicting and designing complex biological systems, or scaling up biomanufacturing processes to name a few spaces that could be explored. Each of these themes represents an intersection of basic research and practical application, offering numerous avenues for innovation.

Your expertise, whether in the intricacies of biological systems, the precision of engineering, or the foresight of data analysis, plays a crucial role. This is an opportunity to be part of a paradigm shift, where your contributions not only advance scientific understanding but also drive tangible, impactful changes in our world. Join this endeavor to shape a future where biotechnology bridges the gap between discovery and real-world solutions, creating a sustainable, healthier, and more prosperous global community.
`,
    footnotes: `- Footnote 1
- Footnote 2
`,
  },
]

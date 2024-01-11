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

The first step in the [CASA-Bio Action Plan](https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Action%20Plan.pdf?alt=media&token=0e6b6388-545c-4c58-91f1-c426810a3988) was a set of so-called Alignment Meetings held in December 2023 in which representatives from government funding agencies, industries, and non-profits met and collaborated to identify scientific subthemes of shared interest—within each of the Bioeconomy Executive Order Themes--that we believe have high potential to advance the bioeconomy through innovative R&D. Now, it is time for step two. We invite you, the research community, to view these subthemes and consider how your research ideas could contribute. Your input will serve to help us define synergistic priority research areas that will be subjects of future research community workshops and development of road maps for addressing key challenges to advance the bioeconomy.  

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
`,
    introduction: `## Overview
As our planet faces the dual challenge of an increasing population and the pressing impacts of climate change, the future of food and agriculture emerges as a critical global issue. The need to sustainably feed a projected population of nearly 10 billion by 2050--against the backdrop of climate change, shrinking arable land, and dwindling natural resources--underscores a pressing need for innovation. This scenario is not just about agricultural productivity; it encompasses broader themes of nutrition, human and animal health, food security, environmental sustainability, and social, economic well-being for farmers and communities.
`,
content: `On the positive side, the landscape of agriculture and food production is on the cusp of a significant transformation. With the advent of advanced technologies and scientific breakthroughs, the R&D community stands at the forefront of pioneering sustainable solutions. The challenges are multifaceted,  and ensuring a secure, global food supply in the face of demanding climate conditions must include improvements in crop yields, productivity, climate resilience, nutritious content, sustainable livestock management, and regenerative agricultural practices, all whilst meeting emerging needs for agriculturally-derived feedstocks for fuels and chemicals.

Innovative R&D offer a pathway to address these challenges. Biotechnology, for instance, holds the key to developing drought-resistant and nutrient-efficient crop varieties, while advances in soil science, including engineering of the soil microbiome, can lead to more sustainable land management practices. Precision agriculture, automation, and controlled environment production leveraging IoT and AI, can optimize resource use and boost productivity. Additionally, the exploration of alternative and novel food sources presents an opportunity to diversify our food systems and reduce environmental impact.  These are just a few examples to provide a sense of potential, but ideas outside these examples are welcome.

## Call to Action

The CASA-Bio initiative was created to help implement the Bioeconomy Executive Order issued by the White House in September 2022.  The EO laid out a vision for government-wide collaboration to advance biotechnology and biomanufacturing through foundational and use-inspired research in five thematic areas:  climate change, food and agriculture, supply chain resilience, human health, and the cross-cutting advances.  The goal of CASA-Bio is to bring the EO to life.

The first step in the [CASA-Bio Action Plan](https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Action%20Plan.pdf?alt=media&token=0e6b6388-545c-4c58-91f1-c426810a3988) was a set of so-called Alignment Meetings held in December 2023 in which representatives from government funding agencies, industries, and non-profits met and collaborated to identify scientific subthemes of shared interest—within each of the Bioeconomy Executive Order Themes--that we believe have high potential to advance the bioeconomy through innovative R&D. Now, it is time for step two. We invite you, the research community, to view these subthemes and consider how your research ideas could contribute. Your input will serve to help us define synergistic priority research areas that will be subjects of future research community workshops and development of road maps for addressing key challenges to advance the bioeconomy.  

For scientists and engineers, the opportunities to contribute to this vital field are abundant. Whether your expertise is in computational biology, microbiology, biotechnology, genetics, robotics, computer science, environmental science, or food technology, your research can have a profound impact. There is a growing need for interdisciplinary approaches that combine different areas of expertise to create holistic and sustainable solutions.

This is a call to action for the R&D community. The future of our food systems and agricultural practices depends on the innovations we develop tomorrow. Your work can lead to more resilient cropping systems, sustainable farming practices, efficient resource use, and ultimately, a more secure and sustainable food future. By engaging in this field, you're not just contributing to scientific progress; you're playing a crucial role in shaping a sustainable future for our planet and its inhabitants, ensuring that we can feed our growing population in a way that respects the Earth and its resources.

Please explore the following subthemes and share with us your most creative ideas about how to move R&D forward in these areas. Or, realizing that these subthemes only scratch the surface, feel free to suggest a new subtheme and accompanying R&D. Your input will help us identify synergies and collective next steps to advance the bioeconomy. All ideas are welcome! 
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
`,
    introduction: `## Overview
In an era marked by global interconnectivity and rapidly evolving markets, the resilience of supply chains
has become a critical issue. Recent events have starkly highlighted the vulnerabilities in our global
supply chains—disruptions caused by pandemics, climate change, geopolitical tensions, and
technological shifts have had profound impacts on economies and societies worldwide. The fragility of
these intricate networks has revealed an urgent need for robust solutions, making supply chain
resilience not just a logistical concern but a strategic imperative.
`,
content: `This challenge presents a unique opportunity, especially in the realm of research and development
(R&amp;D). The scientific and engineering community is poised to play a pivotal role in reimagining and
reinforcing supply chains. From advanced data analytics to biomanufacturing, and from sustainable
logistics to AI-driven forecasting models, the potential for innovation in ensuring efficient, resilient, and
adaptable supply networks is immense.

## Call to Action

The CASA-Bio initiative was created to help implement the Bioeconomy Executive Order issued by the
White House in September 2022. The EO laid out a vision for government-wide collaboration to
advance biotechnology and biomanufacturing through foundational and use-inspired research in five
thematic areas: climate change, food and agriculture, supply chain resilience, human health, and the
cross-cutting advances. The goal of CASA-Bio is to bring the EO to life.

The first step in the [CASA-Bio Action Plan](https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Action%20Plan.pdf?alt=media&token=0e6b6388-545c-4c58-91f1-c426810a3988) was a set of so-called Alignment Meetings held in December
2023 in which representatives from government funding agencies, industries, and non-profits met and
collaborated to identify scientific subthemes of shared interest—within each of the Bioeconomy
Executive Order Themes--that we believe have high potential to advance the bioeconomy through
innovative R&amp;D. Now, it is time for step two. We invite you, the research community, to view these
subthemes and consider how your research ideas could contribute. Your input will serve to help us
define synergistic priority research areas that will be subjects of future research community workshops
and development of road maps for addressing key challenges to advance the bioeconomy.

The nature of this challenge is inherently multidisciplinary, calling for expertise from diverse fields. Data
scientists, engineers, economists, biologists, and logistics experts, among others, are essential in crafting
solutions that are not only technologically advanced but also economically viable and environmentally
sustainable. The aim is to build supply chains that are not only resistant to disruptions but can also adapt
and evolve in the face of changing conditions.

This is a call to action for the R&amp;D community. The future of global trade and commerce relies heavily
on our ability to innovate in the face of uncertainty and complexity. Your research and developments
can lead to smarter, more agile supply chain models that balance efficiency with resilience. Whether
your focus is on blockchain technology, machine learning, sustainable transportation, or
biotechnological production, to name just a few areas, your contributions are vital.

You have the opportunity to shape a new paradigm in supply chain management, one that can
withstand the challenges of the 21st century and beyond. Your work can ensure the seamless flow of
goods and services, underpinning economic growth, and supporting communities across the globe. Join
this crucial endeavor and be part of the movement that redefines resilience in the interconnected world
of tomorrow.

Please explore the following subthemes and share with us your most creative ideas about how to move
R&amp;D forward in these areas. Or, realizing that these subthemes only scratch the surface, feel free to
suggest a new subtheme and accompanying R&amp;D. Your input will help us identify synergies and
collective next steps to advance the bioeconomy. All ideas are welcome!
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
`,
    introduction: `## Overview
In the ever-evolving landscape of human health, the challenges we face today are as diverse as they are
complex. Alongside the rise of chronic diseases and global pandemics is the growing need for realizing
personalized medicine, personalized prevention, and sustainable healthcare solutions.  We urgently
need to innovate in the field of human health. These challenges present not only obstacles but also
immense opportunities for the research and development (R&amp;D) community to make groundbreaking
contributions to increase productivity, lower healthcare costs, and improve overall quality of life. These
opportunities will hopefully allow us to provide a systematic understanding of biotechnology products
and a potential to impact public health.
`,
content: `The realm of human health R&amp;D is vast and multifaceted, encompassing areas such as biomedical
research, public health studies, pharmaceutical development, medical technology, and healthcare
delivery models. Scientists, engineers, and healthcare professionals are at the forefront of this
endeavor, working to uncover new insights into living systems and human biology, develop life-saving
treatments and technologies, and improve healthcare systems globally.

## Call to Action

The CASA-Bio initiative was created to help implement the Bioeconomy Executive Order issued by the
White House in September 2022. The EO laid out a vision for government-wide collaboration to
advance biotechnology and biomanufacturing through foundational and use-inspired research in five
thematic areas: climate change, food and agriculture, supply chain resilience, human health, and the
cross-cutting advances. The goal of CASA-Bio is to bring the EO to life.

The first step in the [CASA-Bio Action Plan](https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Action%20Plan.pdf?alt=media&token=0e6b6388-545c-4c58-91f1-c426810a3988) was a set of so-called Alignment Meetings held in December
2023 in which representatives from government funding agencies, industries, and non-profits met and
collaborated to identify scientific subthemes of shared interest—within each of the Bioeconomy
Executive Order Themes--that we believe have high potential to advance the bioeconomy through

innovative R&amp;D. Now, it is time for step two. We invite you, the research community, to view these
subthemes and consider how your research ideas could contribute. Your input will serve to help us
define synergistic priority research areas that will be subjects of future research community workshops
and development of road maps for addressing key challenges to advance the bioeconomy.

This scenario is not just a professional opportunity; it&#39;s a global imperative. As members of the R&amp;D
community, there&#39;s a call to action to apply your knowledge, skills, and creativity to address the pressing
health challenges of our time. Whether your expertise is in genetics, bioengineering, pharmacology,
data science, or any other field, your contributions can lead to significant advancements in health (i.e.,
reduce disease burden) and medicine.

Your work has the potential to revolutionize how we understand and treat diseases, enhance the
effectiveness and accessibility of healthcare, and ultimately improve the quality and longevity of life.
The development of new vaccines, personalized therapies, advanced diagnostic tools, and efficient
healthcare systems are just a few examples of the impactful outcomes your research can achieve.
Now is the time to harness the power of innovation to drive forward advances in human health. The
collaborative efforts of the R&amp;D community can lead to transformative changes. Join this critical mission
to advance human health, where your contributions can make a profound difference in the lives of
millions and shape a healthier future for all.

Please explore the following subthemes and share with us your most creative ideas about how to move
R&amp;D forward in these areas. Or, realizing that these subthemes only scratch the surface, feel free to
suggest a new subtheme and accompanying R&amp;D. Your input will help us identify synergies and
collective next steps to advance the bioeconomy. All ideas are welcome!
    
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
`,
    introduction: `## Overview
The tremendous power of the bioeconomy can be felt across multiple sectors of the economy, including
healthcare, agriculture, clean energy, materials, chemicals and beyond. In the past several years we’ve
seen notable examples, such as: RNA vaccines against COVID-19 deployed in record time; genetically
modified crops with increased resilience to environmental extremes; demonstration-scale plants that
convert industrial waste gasses into useful chemicals and materials; and new industries being spawned
that leverage advances in AI and protein design. To enable these and other applications across all
sectors, the US needs to invest in tools, infrastructure, and policies that are foundational to all sectors of
the bioeconomy, as well as a strong and diverse workforce.
`,
content: `Innovation creates value. There is an urgent need for the research, development, deployment and
supporting infrastructure and tools that will advance economic activity in all sectors of the bioeconomy. 
The US Bioeconomy is currently valued at over $350B - but could grow substantially if properly
supported. New research and development will help ensure continued growth of technical and
economic leadership, progress in human health, mitigation of impacts of climate change, and a secure
food supply.

To ensure a thriving, secure, and enduring bioeconomy, advances in several key areas are needed. For
example, we must have a workforce capable of ensuring that innovations can be seamlessly converted
into products and supportive solutions for the economy.  This workforce must be properly trained and
educated, nimble enough to adapt to continuous platform advancement and process improvements,
and assured of work environments that are supportive, safe, and resilient.  The bioeconomy also
depends on new Investments in infrastructure to assist in transitioning lab-based research into
biomanufacturing products.  Such infrastructure will need to include both physical and digital forms,
enabling pilot testing, model development and evaluation, as well as scaling up of solutions for
manufacturing processes.  Availability of data to inform a thorough risk assessment of new products will
be critical to ensure responsible innovation, including informing regulators as new products are
evaluated before bringing them to market.  While there is a need for open sharing of data and best
practices to ensure a robust, collaborative, and effective community of biotechnology innovation, this
information must also be protected and secured to protect against undesirable outcomes. Finally, there
is a need to ensure investments and outcomes of the bioeconomy are communicated effectively to the
nation at-large to maximize community benefit, adoption and support while minimizing concern and
misunderstanding.

## Call to Action

The CASA-Bio initiative was created to help implement the Bioeconomy Executive Order issued by the
White House in September 2022. The EO laid out a vision for government-wide collaboration to
advance biotechnology and biomanufacturing through foundational and use-inspired research in five
thematic areas: climate change, food and agriculture, supply chain resilience, human health, and the
cross-cutting advances. The goal of CASA-Bio is to bring the EO to life.

The first step in the [CASA-Bio Action Plan](https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Action%20Plan.pdf?alt=media&token=0e6b6388-545c-4c58-91f1-c426810a3988) was a set of so-called Alignment Meetings held in December
2023 in which representatives from government funding agencies, industries, and non-profits met and
collaborated to identify scientific subthemes of shared interest—within each of the Bioeconomy
Executive Order Themes--that we believe have high potential to advance the bioeconomy through
innovative R&amp;D. Now, it is time for step two. We invite you, the research community, to view these
subthemes and consider how your research ideas could contribute. Your input will serve to help us
define synergistic priority research areas that will be subjects of future research community workshops
and development of road maps for addressing key challenges to advance the bioeconomy.

For scientists and engineers, the opportunities to contribute to this vital field are abundant. Whether
your expertise is in basic discovery, tool development, scale up and advanced manufacturing, cyber,
physical, and human infrastructure, public engagement, risk assessment and communication, or
biosecurity, your research can have a profound impact. There is a growing need for interdisciplinary
approaches that combine different areas of expertise to create holistic and effective solutions.

This is a call to action inviting the R&amp;D community to contribute to a spectrum of subthemes essential
for the bioeconomy&#39;s growth. This is an opportunity to be part of a paradigm shift, where your
contributions not only advance scientific understanding but also drive tangible, impactful changes in our
world. Each of the subthemes below represents an intersection of basic research and practical
application, offering numerous avenues for innovation. Join this endeavor to shape a future where
biotechnology bridges the gap between discovery and real-world solutions, creating a sustainable,
healthier, and more prosperous global community.

Please explore the following subthemes and share with us your most creative ideas about how to move
R&amp;D forward in these areas. Or, realizing that these subthemes only scratch the surface, feel free to
suggest a new subtheme and accompanying R&amp;D. Your input will help us identify synergies and
collective next steps to advance the bioeconomy. All ideas are welcome!
`,
    footnotes: `- Footnote 1
- Footnote 2
`,
  },
]

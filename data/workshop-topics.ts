export type WorkshopTopicData = {
    id: string,
    title: string;
    description: string;
    themes: Array<number>;
    advances: Array<number>;
    // advances: string;
    summaryURL: string;
}

export type WorkshopTopicObject = WorkshopTopicData[];

export const workshopTopic: WorkshopTopicObject = [
  {
    //WorkshopTopic 1
    id: "A",
    title: "Delivery on Target: Transforming Vaccines and Biologics Delivery",
    description: "Coordinated advancements in delivery systems for vaccines and biologics for humans and animals will enhance U.S. preparedness for emerging health threats, improve global health outcomes, and foster innovation in biotechnology, public health, and agriculture.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/Delivery%20on%20Target.pdf?alt=media&token=2e69ac1a-2b52-4624-8c19-78fa76f3544a",
    themes: [4,2],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },
  {
    //WorkshopTopic 2
    id: "B",
    title: "AgSystems: Accelerated Breeding for a Resilient Bioeconomy",
    description: "Integrating advanced plant and animal breeding systems will transform agricultural productivity, sustainability, and climate resilience in the U.S. This initiative will drive biotechnological innovation and foster economic growth in food, feed, biofuels, and other bioproducts.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/AgSystems%20Accelerated%20Breeding%20for%20a%20Resilient%20Bioeconomy.pdf?alt=media&token=202ba45e-2464-4180-8fb8-09a9052b1754",
    themes: [1,4,2],
    advances: [1, 4, 3, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, and Workforce Development.",
  },
  {
    //WorkshopTopic 3
    id: "C",
    title: "Diversifying Edible Protein Sources for a Sustainable Future",
    description: "Investments to diversify proteins for human food and animal feed will create food supply chain resilience, drive American innovation in a globally competitive sector, and foster sustainable growth and employment in the modern bioeconomy.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/Diversifying%20Edible%20Protein%20Sources%20for%20a%20Sustainable%20Future.pdf?alt=media&token=76aebd67-2e89-453c-a6c5-1a5a45ba18d2",
    themes: [1,2,4],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },
  {
    //WorkshopTopic 4
    id: "D",
    title: "Building Resilient Biomass Supply Chains for a Sustainable Bioeconomy",
    description: "The U.S. must transition from a fossil-fuel-based economy to a bioeconomy that uses renewable biomass. This initiative focuses on creating resilient biomass supply chains to support the bioeconomy, while reducing carbon emissions, enhancing sustainability, and generating economic growth.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/Building%20Resilient%20Biomass%20Supply%20Chains%20for%20a%20Sustainable%20Bioeconomy.pdf?alt=media&token=6e7fffa3-b508-43bf-a965-c5351094f563",
    themes: [3,1,2],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },
  {
    //WorkshopTopic 5
    id: "E",
    title: "Creating Value from Waste Carbon for a Circular Bioeconomy",
    description: "Waste carbon from agricultural, industrial, and consumer wastes could be transformed into valuable resources for critical materials, fuels, and food. This initiative outlines a bold plan to revolutionize waste management, reduce environmental impacts, and build a more resilient economy.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/Creating%20Value%20from%20Waste%20Carbon%20for%20a%20Circular%20Bioeconomy.pdf?alt=media&token=cf890b34-d7eb-4df9-b948-1b6807bb7ba8",
    themes: [1,2,3],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },
  {
    //WorkshopTopic 6
    id: "F",
    title: "Unleashing the Power of Biology for Carbon Capture and Utilization",
    description: "Further development of biomanufacturing technologies that not only capture carbon emissions but also convert them into useful products will enable a circular U.S. bioeconomy that boosts domestic bio-production, reduces environmental impacts, and fortifies supply chains.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/Unleashing%20the%20Power%20of%20Biology%20for%20Carbon%20Capture%20and%20Utilization.pdf?alt=media&token=22dd1793-4c22-4c42-8388-9ad90db39ad6",
    themes: [1],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },

 
]

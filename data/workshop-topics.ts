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
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Docs%2FDelivery%20on%20Target%20-%20Transforming%20Vaccines%20and%20Biologics%20Delivery.pdf?alt=media&token=76837d07-6881-4979-b7e6-77b98d370674",
    themes: [3,1],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },
  {
    //WorkshopTopic 2
    id: "B",
    title: "AgSystems: Accelerated Breeding for a Resilient Bioeconomy",
    description: "Integrating advanced plant and animal breeding systems will transform agricultural productivity, sustainability, and climate resilience in the U.S. This initiative will drive biotechnological innovation and foster economic growth in food, feed, biofuels, and other bioproducts.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Docs%2FAgSystems%20Accelerated%20Breeding%20for%20a%20Resilient%20Bioeconomy.pdf?alt=media&token=36926471-a7ca-4f1b-8398-9c955dfe4a28",
    themes: [0,3,1],
    advances: [1, 4, 3, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, and Workforce Development.",
  },
  {
    //WorkshopTopic 3
    id: "C",
    title: "Diversifying Edible Protein Sources for a Sustainable Future",
    description: "Investments to diversify proteins for human food and animal feed will create food supply chain resilience, drive American innovation in a globally competitive sector, and foster sustainable growth and employment in the modern bioeconomy.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Docs%2FDiversifying%20Edible%20Protein%20Sources%20for%20a%20Sustainable%20Future.pdf?alt=media&token=7b6be9eb-4779-455b-bfb0-7294165cb8b1",
    themes: [0,1,3],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },
  {
    //WorkshopTopic 4
    id: "D",
    title: "Building Resilient Biomass Supply Chains for a Sustainable Bioeconomy",
    description: "The U.S. must transition from a fossil-fuel-based economy to a bioeconomy that uses renewable biomass. This initiative focuses on creating resilient biomass supply chains to support the bioeconomy, while reducing carbon emissions, enhancing sustainability, and generating economic growth.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Docs%2FBuilding%20Resilient%20Biomass%20Supply%20Chains%20for%20a%20Sustainable%20Bioeconomy.pdf?alt=media&token=bc9f9a53-567c-41d1-a7c1-003d5ae56583",
    themes: [2,0,1],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },
  {
    //WorkshopTopic 5
    id: "E",
    title: "Creating Value from Waste Carbon for a Circular Bioeconomy",
    description: "Waste carbon from agricultural, industrial, and consumer wastes could be transformed into valuable resources for critical materials, fuels, and food. This initiative outlines a bold plan to revolutionize waste management, reduce environmental impacts, and build a more resilient economy.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Docs%2FCreating%20Value%20from%20Waste%20Carbon%20for%20a%20Circular%20Bioeconomy.pdf?alt=media&token=0093f104-92ab-4ade-8071-f56fa16c3d77",
    themes: [0,1,2],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },
  {
    //WorkshopTopic 6
    id: "F",
    title: "Unleashing the Power of Biology for Carbon Capture and Utilization",
    description: "Further development of biomanufacturing technologies that not only capture carbon emissions but also convert them into useful products will enable a circular U.S. bioeconomy that boosts domestic bio-production, reduces environmental impacts, and fortifies supply chains.",
    summaryURL: "https://firebasestorage.googleapis.com/v0/b/kistorm-media.appspot.com/o/CASA-Bio%20Docs%2FUnleashing%20the%20Power%20of%20Biology%20for%20Carbon%20Capture%20and%20Utilization.pdf?alt=media&token=148d8986-2418-4532-92df-0840feea2319",
    themes: [0],
    advances: [1, 4, 3, 2, 0],
    // advances: "Foundational Discovery, Data Infrastructure, Artificial Intelligence, Biomanufacturing, and Workforce Development.",
  },

 
]

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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tagline: `# Climate Change Solutions
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
`,
    introduction: `## Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id faucibus turpis, quis gravida nisi. Curabitur nulla tortor, rhoncus sed luctus id, interdum pulvinar ipsum. Vestibulum finibus lobortis dictum. In lobortis et risus laoreet facilisis. Mauris sed suscipit justo. Integer porta luctus nibh, eget lacinia massa scelerisque eu. Cras rhoncus augue neque, sed interdum lectus mollis eu. Nam semper justo lectus, quis semper felis vestibulum vel. Praesent ut sapien sit amet justo tempor elementum a ac risus. Mauris mollis volutpat vehicula. Phasellus sit amet risus ipsum. Cras in ultricies leo, vel ornare mi. Nam fermentum rutrum massa, quis fermentum nibh convallis eget. Morbi faucibus varius magna, sed rutrum enim dignissim sit amet. Etiam lacinia eu magna id pretium. Morbi fringilla imperdiet tortor, ut auctor nisi.
`,
    content: `Phasellus et sapien id erat molestie dignissim. Proin id porta nunc, efficitur egestas tellus. Morbi dignissim at tellus ut mattis. Nunc dictum erat eu mauris malesuada efficitur. Aenean sed placerat metus, vel volutpat ex. Sed tristique ornare dolor, ut elementum mauris fringilla vitae. Nunc facilisis congue auctor.

Donec vel urna imperdiet, varius purus id, tempor sapien. Nulla id ex ultricies, auctor libero id, dapibus sapien. Donec condimentum metus quis pharetra convallis. Suspendisse pretium lobortis felis id scelerisque. Pellentesque varius, ipsum vitae vestibulum dictum, nulla urna consequat nisi, sit amet posuere risus urna eget mauris. Maecenas rhoncus, mi non dignissim gravida, quam nisl auctor sem, in posuere augue augue vitae felis. Aliquam ut nisi erat. Aenean lacinia non dui sed euismod. Sed vitae tristique enim, mollis tempus nisl. Nunc eget sapien pharetra, aliquam magna id, vestibulum ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras finibus volutpat venenatis. Nullam id fermentum justo.

Duis vel orci scelerisque, tempor dolor ac, rutrum tellus. Donec vestibulum justo ut lectus faucibus tristique. Nullam volutpat tincidunt consequat. Sed vitae tellus ultrices, vulputate enim sed, tempor sapien. Mauris dictum tincidunt congue. Quisque dignissim lorem non tristique tempus. Aliquam scelerisque ligula at suscipit rutrum. Integer vitae lacus ut felis semper eleifend non a nisi. Integer ornare mi in efficitur euismod. Nunc molestie magna tellus, sit amet aliquet felis tristique sed. Pellentesque lacinia consequat nibh, at commodo lacus porta quis. Nullam nunc turpis, rhoncus et euismod id, tempus eu metus. Morbi sed felis lectus. Curabitur venenatis quis nisl quis interdum. Vivamus auctor vehicula risus, et ullamcorper diam suscipit ac. Curabitur quis feugiat enim, vel feugiat purus.
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tagline: `# Food and Agriculture Innovation
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
`,
    introduction: `## Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id faucibus turpis, quis gravida nisi. Curabitur nulla tortor, rhoncus sed luctus id, interdum pulvinar ipsum. Vestibulum finibus lobortis dictum. In lobortis et risus laoreet facilisis. Mauris sed suscipit justo. Integer porta luctus nibh, eget lacinia massa scelerisque eu. Cras rhoncus augue neque, sed interdum lectus mollis eu. Nam semper justo lectus, quis semper felis vestibulum vel. Praesent ut sapien sit amet justo tempor elementum a ac risus. Mauris mollis volutpat vehicula. Phasellus sit amet risus ipsum. Cras in ultricies leo, vel ornare mi. Nam fermentum rutrum massa, quis fermentum nibh convallis eget. Morbi faucibus varius magna, sed rutrum enim dignissim sit amet. Etiam lacinia eu magna id pretium. Morbi fringilla imperdiet tortor, ut auctor nisi.
`,
    content: `Phasellus et sapien id erat molestie dignissim. Proin id porta nunc, efficitur egestas tellus. Morbi dignissim at tellus ut mattis. Nunc dictum erat eu mauris malesuada efficitur. Aenean sed placerat metus, vel volutpat ex. Sed tristique ornare dolor, ut elementum mauris fringilla vitae. Nunc facilisis congue auctor.

Donec vel urna imperdiet, varius purus id, tempor sapien. Nulla id ex ultricies, auctor libero id, dapibus sapien. Donec condimentum metus quis pharetra convallis. Suspendisse pretium lobortis felis id scelerisque. Pellentesque varius, ipsum vitae vestibulum dictum, nulla urna consequat nisi, sit amet posuere risus urna eget mauris. Maecenas rhoncus, mi non dignissim gravida, quam nisl auctor sem, in posuere augue augue vitae felis. Aliquam ut nisi erat. Aenean lacinia non dui sed euismod. Sed vitae tristique enim, mollis tempus nisl. Nunc eget sapien pharetra, aliquam magna id, vestibulum ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras finibus volutpat venenatis. Nullam id fermentum justo.

Duis vel orci scelerisque, tempor dolor ac, rutrum tellus. Donec vestibulum justo ut lectus faucibus tristique. Nullam volutpat tincidunt consequat. Sed vitae tellus ultrices, vulputate enim sed, tempor sapien. Mauris dictum tincidunt congue. Quisque dignissim lorem non tristique tempus. Aliquam scelerisque ligula at suscipit rutrum. Integer vitae lacus ut felis semper eleifend non a nisi. Integer ornare mi in efficitur euismod. Nunc molestie magna tellus, sit amet aliquet felis tristique sed. Pellentesque lacinia consequat nibh, at commodo lacus porta quis. Nullam nunc turpis, rhoncus et euismod id, tempus eu metus. Morbi sed felis lectus. Curabitur venenatis quis nisl quis interdum. Vivamus auctor vehicula risus, et ullamcorper diam suscipit ac. Curabitur quis feugiat enim, vel feugiat purus.
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tagline: `# Supply Chain Resilience
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
`,
    introduction: `## Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id faucibus turpis, quis gravida nisi. Curabitur nulla tortor, rhoncus sed luctus id, interdum pulvinar ipsum. Vestibulum finibus lobortis dictum. In lobortis et risus laoreet facilisis. Mauris sed suscipit justo. Integer porta luctus nibh, eget lacinia massa scelerisque eu. Cras rhoncus augue neque, sed interdum lectus mollis eu. Nam semper justo lectus, quis semper felis vestibulum vel. Praesent ut sapien sit amet justo tempor elementum a ac risus. Mauris mollis volutpat vehicula. Phasellus sit amet risus ipsum. Cras in ultricies leo, vel ornare mi. Nam fermentum rutrum massa, quis fermentum nibh convallis eget. Morbi faucibus varius magna, sed rutrum enim dignissim sit amet. Etiam lacinia eu magna id pretium. Morbi fringilla imperdiet tortor, ut auctor nisi.
`,
    content: `Phasellus et sapien id erat molestie dignissim. Proin id porta nunc, efficitur egestas tellus. Morbi dignissim at tellus ut mattis. Nunc dictum erat eu mauris malesuada efficitur. Aenean sed placerat metus, vel volutpat ex. Sed tristique ornare dolor, ut elementum mauris fringilla vitae. Nunc facilisis congue auctor.

Donec vel urna imperdiet, varius purus id, tempor sapien. Nulla id ex ultricies, auctor libero id, dapibus sapien. Donec condimentum metus quis pharetra convallis. Suspendisse pretium lobortis felis id scelerisque. Pellentesque varius, ipsum vitae vestibulum dictum, nulla urna consequat nisi, sit amet posuere risus urna eget mauris. Maecenas rhoncus, mi non dignissim gravida, quam nisl auctor sem, in posuere augue augue vitae felis. Aliquam ut nisi erat. Aenean lacinia non dui sed euismod. Sed vitae tristique enim, mollis tempus nisl. Nunc eget sapien pharetra, aliquam magna id, vestibulum ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras finibus volutpat venenatis. Nullam id fermentum justo.

Duis vel orci scelerisque, tempor dolor ac, rutrum tellus. Donec vestibulum justo ut lectus faucibus tristique. Nullam volutpat tincidunt consequat. Sed vitae tellus ultrices, vulputate enim sed, tempor sapien. Mauris dictum tincidunt congue. Quisque dignissim lorem non tristique tempus. Aliquam scelerisque ligula at suscipit rutrum. Integer vitae lacus ut felis semper eleifend non a nisi. Integer ornare mi in efficitur euismod. Nunc molestie magna tellus, sit amet aliquet felis tristique sed. Pellentesque lacinia consequat nibh, at commodo lacus porta quis. Nullam nunc turpis, rhoncus et euismod id, tempus eu metus. Morbi sed felis lectus. Curabitur venenatis quis nisl quis interdum. Vivamus auctor vehicula risus, et ullamcorper diam suscipit ac. Curabitur quis feugiat enim, vel feugiat purus.
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tagline: `# Human Health
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
`,
    introduction: `## Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id faucibus turpis, quis gravida nisi. Curabitur nulla tortor, rhoncus sed luctus id, interdum pulvinar ipsum. Vestibulum finibus lobortis dictum. In lobortis et risus laoreet facilisis. Mauris sed suscipit justo. Integer porta luctus nibh, eget lacinia massa scelerisque eu. Cras rhoncus augue neque, sed interdum lectus mollis eu. Nam semper justo lectus, quis semper felis vestibulum vel. Praesent ut sapien sit amet justo tempor elementum a ac risus. Mauris mollis volutpat vehicula. Phasellus sit amet risus ipsum. Cras in ultricies leo, vel ornare mi. Nam fermentum rutrum massa, quis fermentum nibh convallis eget. Morbi faucibus varius magna, sed rutrum enim dignissim sit amet. Etiam lacinia eu magna id pretium. Morbi fringilla imperdiet tortor, ut auctor nisi.
`,
    content: `Phasellus et sapien id erat molestie dignissim. Proin id porta nunc, efficitur egestas tellus. Morbi dignissim at tellus ut mattis. Nunc dictum erat eu mauris malesuada efficitur. Aenean sed placerat metus, vel volutpat ex. Sed tristique ornare dolor, ut elementum mauris fringilla vitae. Nunc facilisis congue auctor.

Donec vel urna imperdiet, varius purus id, tempor sapien. Nulla id ex ultricies, auctor libero id, dapibus sapien. Donec condimentum metus quis pharetra convallis. Suspendisse pretium lobortis felis id scelerisque. Pellentesque varius, ipsum vitae vestibulum dictum, nulla urna consequat nisi, sit amet posuere risus urna eget mauris. Maecenas rhoncus, mi non dignissim gravida, quam nisl auctor sem, in posuere augue augue vitae felis. Aliquam ut nisi erat. Aenean lacinia non dui sed euismod. Sed vitae tristique enim, mollis tempus nisl. Nunc eget sapien pharetra, aliquam magna id, vestibulum ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras finibus volutpat venenatis. Nullam id fermentum justo.

Duis vel orci scelerisque, tempor dolor ac, rutrum tellus. Donec vestibulum justo ut lectus faucibus tristique. Nullam volutpat tincidunt consequat. Sed vitae tellus ultrices, vulputate enim sed, tempor sapien. Mauris dictum tincidunt congue. Quisque dignissim lorem non tristique tempus. Aliquam scelerisque ligula at suscipit rutrum. Integer vitae lacus ut felis semper eleifend non a nisi. Integer ornare mi in efficitur euismod. Nunc molestie magna tellus, sit amet aliquet felis tristique sed. Pellentesque lacinia consequat nibh, at commodo lacus porta quis. Nullam nunc turpis, rhoncus et euismod id, tempus eu metus. Morbi sed felis lectus. Curabitur venenatis quis nisl quis interdum. Vivamus auctor vehicula risus, et ullamcorper diam suscipit ac. Curabitur quis feugiat enim, vel feugiat purus.
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tagline: `# Cross-Cutting Advances
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
`,
    introduction: `## Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id faucibus turpis, quis gravida nisi. Curabitur nulla tortor, rhoncus sed luctus id, interdum pulvinar ipsum. Vestibulum finibus lobortis dictum. In lobortis et risus laoreet facilisis. Mauris sed suscipit justo. Integer porta luctus nibh, eget lacinia massa scelerisque eu. Cras rhoncus augue neque, sed interdum lectus mollis eu. Nam semper justo lectus, quis semper felis vestibulum vel. Praesent ut sapien sit amet justo tempor elementum a ac risus. Mauris mollis volutpat vehicula. Phasellus sit amet risus ipsum. Cras in ultricies leo, vel ornare mi. Nam fermentum rutrum massa, quis fermentum nibh convallis eget. Morbi faucibus varius magna, sed rutrum enim dignissim sit amet. Etiam lacinia eu magna id pretium. Morbi fringilla imperdiet tortor, ut auctor nisi.
`,
    content: `Phasellus et sapien id erat molestie dignissim. Proin id porta nunc, efficitur egestas tellus. Morbi dignissim at tellus ut mattis. Nunc dictum erat eu mauris malesuada efficitur. Aenean sed placerat metus, vel volutpat ex. Sed tristique ornare dolor, ut elementum mauris fringilla vitae. Nunc facilisis congue auctor.

Donec vel urna imperdiet, varius purus id, tempor sapien. Nulla id ex ultricies, auctor libero id, dapibus sapien. Donec condimentum metus quis pharetra convallis. Suspendisse pretium lobortis felis id scelerisque. Pellentesque varius, ipsum vitae vestibulum dictum, nulla urna consequat nisi, sit amet posuere risus urna eget mauris. Maecenas rhoncus, mi non dignissim gravida, quam nisl auctor sem, in posuere augue augue vitae felis. Aliquam ut nisi erat. Aenean lacinia non dui sed euismod. Sed vitae tristique enim, mollis tempus nisl. Nunc eget sapien pharetra, aliquam magna id, vestibulum ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras finibus volutpat venenatis. Nullam id fermentum justo.

Duis vel orci scelerisque, tempor dolor ac, rutrum tellus. Donec vestibulum justo ut lectus faucibus tristique. Nullam volutpat tincidunt consequat. Sed vitae tellus ultrices, vulputate enim sed, tempor sapien. Mauris dictum tincidunt congue. Quisque dignissim lorem non tristique tempus. Aliquam scelerisque ligula at suscipit rutrum. Integer vitae lacus ut felis semper eleifend non a nisi. Integer ornare mi in efficitur euismod. Nunc molestie magna tellus, sit amet aliquet felis tristique sed. Pellentesque lacinia consequat nibh, at commodo lacus porta quis. Nullam nunc turpis, rhoncus et euismod id, tempus eu metus. Morbi sed felis lectus. Curabitur venenatis quis nisl quis interdum. Vivamus auctor vehicula risus, et ullamcorper diam suscipit ac. Curabitur quis feugiat enim, vel feugiat purus.
`,
    footnotes: `- Footnote 1
- Footnote 2
`,
  },
]

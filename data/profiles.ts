export type ProfileData = {
    photo: string,
    name: string,
    affiliation: string
}

export const profiles:ProfileData[] = [
    {
        photo: 'https://roadmap.ebrc.org/wp-content/uploads/2022/09/Alam_Khalid_Color-1-150x150.jpg',
        name: 'Khalid Alam',
        affiliation: 'Stemloop, Inc.'
    },
    {
        photo: 'https://roadmap.ebrc.org/wp-content/uploads/2022/09/T.Alexander_Headshot_Smile-1-150x150.png',
        name: 'Thomas Alexander',
        affiliation: 'North Carolina State University'
    },
    {
        photo: 'https://roadmap.ebrc.org/wp-content/uploads/2019/06/Emily-Aurand-e1602543591681-150x150.jpg',
        name: 'Emily R. Aurand',
        affiliation: 'EBRC'
    }
]
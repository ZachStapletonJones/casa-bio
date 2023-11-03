import { ProfileData, profiles } from '@/data/profiles'
import React from 'react'


function Profile(profile:ProfileData){
    return(
        <div className='flex flex-col outline outline-1 rounded text-center bg-slate-300 w-40 h-60 max-h-60'>
            <img className='aspect-square' src={profile.photo} alt={profile.name} />
            <div>{profile.name}</div>
            <div className='text-sm italic'>{profile.affiliation}</div>
        </div>
    )
}

export default function ProfileGrid() {
    return (
        <div className='flex grow gap-4'>
            {profiles.map((p, index)=><Profile key={index} {...p} />)}
        </div>
    )
}
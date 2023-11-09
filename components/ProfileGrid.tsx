import { ProfileData, profiles } from '@/data/profiles'
import React from 'react'


function Profile(profile:ProfileData){
    return(
        <div className='flex flex-row outline outline-1 rounded-lg text-center items-start p-2 gap-2 bg-slate-100 h-20 max-h-20'>
            <img className='aspect-square h-16 w-16 object-scale-down' src={profile.photo} alt={profile.name} />
            <div className='flex flex-col items-start text-left'>
                <div className='font-medium'>{profile.name}</div>
                <div className='text-sm italic'>{profile.affiliation}</div>
                <div className='text-sm'>Link</div>
            </div>
        </div>
    )
}

export default function ProfileGrid() {
    return (
        <div className='flex grow gap-4 flex-wrap'>
            {profiles.map((p, index)=><Profile key={index} {...p} />)}
        </div>
    )
}
import { ProfileData, profiles } from '@/data/profiles'
import React from 'react'


function Profile(profile:ProfileData){
    return(
        <div className='flex flex-row outline outline-1 outline-slate-300 rounded-lg text-center items-start p-3 gap-2 h-25 max-h-25'>
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
        <div className='flex w-full grow gap-2 md:gap-4 flex-wrap'>
            {profiles.map((p, index)=><Profile key={index} {...p} />)}
        </div>
    )
}
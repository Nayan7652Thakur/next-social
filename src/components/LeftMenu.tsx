import React from 'react'
import ProfileCard from './ProfileCard'

const LeftMenu = ({type} : {type: "home" | "profile"}) => {
  return (
    <div className='flex flex-col gap-6'>
{type==="home" && <ProfileCard />}
<div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'>

</div>
    </div>
  )
}

export default LeftMenu

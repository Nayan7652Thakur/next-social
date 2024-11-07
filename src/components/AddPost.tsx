import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* AVATAR */}

      <Image src='https://images.pexels.com/photos/17960031/pexels-photo-17960031/free-photo-of-tenements-near-canal-in-amsterdam.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' width={48} height={48} className='w-12 h-12 object-cover rounded-full' />
      {/* POST */}
      <div className='flex-1'>
        {/* TEXT INPUT */}
        <div className='flex gap-4'>
          <textarea placeholder="what's on your mind?" className='flex-1 bg-slate-100 rounded-lg p-2'></textarea>
          <Image src='/emoji.png' alt='' width={20} height={20} className='w-5 h-5 cursor-pointer self-end' />
        </div>
        {/* post option */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src='/addimage.png' alt='' width={20} height={20} />
            Photo
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src='/addVideo.png' alt='' width={20} height={20} />
            video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src='/poll.png' alt='' width={20} height={20} />
            poll
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image src='/addevent.png' alt='' width={20} height={20} />
            event
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddPost

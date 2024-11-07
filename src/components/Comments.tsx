import Image from 'next/image'
import React from 'react'

const Comments = () => {
    return (
        <div>
            {/* WRITE */}
            <div className='flex items-center gap-4'>
                <Image src='https://images.pexels.com/photos/27637316/pexels-photo-27637316/free-photo-of-various-nuts-and-fruits-on-a-cutting-board.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' width={32} height={32} className='w-8 h-8 rounded-full' />
                <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                    <input type="text" placeholder='write a comment...' className='bg-transparent outline-none flex-1' />
                    <Image src='/emoji.png' alt='' width={16} height={16} className='cursor-pointer' />

                </div>
            </div>

            {/* COMMENTS */}  
            <div>
                {/* COMMENT */}
                <div className='flex gap-4 justify-between mt-6'>
                    {/* AVATAR */}
                    <Image src='https://images.pexels.com/photos/27637316/pexels-photo-27637316/free-photo-of-various-nuts-and-fruits-on-a-cutting-board.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' width={40} height={40} className='w-10 h-10 rounded-full' />
                    {/* DESC */}
                    <div className='flex flex-col gap-2 flex-1'>
                        <span className='font-medium'>nayan thakur</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio iusto, aspernatur eveniet voluptatum quae illum reprehenderit quos fuga totam nostrum id error ducimus sint soluta rerum minus quis facilis perferendis.</p>
                        <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                            <div className='flex items-center gap-4'>
                                <Image src='/like.png' alt='' width={12} height={12} className='cursor-pointer w-4 h-4' />
                                <span className='text-gray-300'>|</span>
                                <span className='text-gray-500'>123 Likes</span>
                            </div>
                            <div>
                                Reply
                            </div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image src='/more.png' alt='' width={16} height={16} className='cursor-pointer w-4 h-4' />
                </div>

            </div>

        </div>
    )
}

export default Comments

import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src='https://images.pexels.com/photos/29104449/pexels-photo-29104449/free-photo-of-graceful-jellyfish-in-dark-aquarium.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' width={40} height={40} className='w-10 h-10 rounded-full' />
                    <span className='font-medium'>Jack Oggy</span>
                </div>
                <Image src='/more.png' alt='' width={16} height={16} />
            </div>

            {/* DESCRIPTION */}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image src='https://images.pexels.com/photos/28957623/pexels-photo-28957623/free-photo-of-aerial-night-view-of-paris-featuring-les-invalides.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' fill alt='' className='object-cover rounded-md' />
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolorem voluptatibus facilis deserunt hic unde quas, expedita aperiam quasi possimus nisi. Recusandae repudiandae reprehenderit minima reiciendis iure provident pariatur voluptas?</p>
            </div>

            {/* INTERACTION */}
            <div className='flex items-center justify-between text-sm my-4'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src='/like.png' alt='' width={16} height={16} className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-300'>123 <span className='hidden md:inline'> Likes</span></span>
                    </div>

                    <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                        <Image src='/comment.png' alt='' width={16} height={16} className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-300'>123 <span className='hidden md:inline'> Comments</span></span>
                    </div>
                </div>
                <div>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                        <Image src='/share.png' alt='' width={16} height={16} className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-300'>123 <span className='hidden md:inline'>Shares</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post

import React from 'react'
import Avatar from 'react-avatar';
function SingleMovie() {
  return (
    <>
      <div className="w-screen min-h-screen font-poppins bg-zinc-700 text-white">
        <div className='px-[100px]'>
          <iframe width="100%" height="550" className='rounded-xl ' src="https://www.youtube.com/embed/AclQP1hsrIc?si=MQjktEh4-zP2uSe-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h3 className='text-2xl mt-4 mb-2'>Fields of Destiny</h3>
          <p className='text-gray-400'>The description will be populated here</p>

          <h3 className='text-2xl mt-5 mb-3'>Comments</h3>
          <input type="text" className='mb-4 border-0 w-[70%] p-[10px] pl-0 border-b-[1px] border-b-[#fff] bg-transparent outline-0' placeholder='Write your comment here'/>

          <div className='w-[70%]'>
            <div className='w-full mb-2 flex items-centerp-[10ox] bg-[#27272A] rounded-xl cursor-pointer'>
              <Avatar name="User name" size="50" className='cursor-pointer mr-3'/>
              <div>
                <p className='text-gray-500 text-md'>@username</p>
                <p>This is amazing</p>
              </div>

            </div>
            <div className='w-full mb-2 flex items-centerp-[10ox] bg-[#27272A] rounded-xl cursor-pointer'>
              <Avatar name="User name" size="50" className='cursor-pointer mr-3'/>
              <div>
                <p className='text-gray-500 text-md'>@username</p>
                <p>This is soo good</p>
              </div>

            </div>
            <div className='w-ful  mb-2 flex items-centerp-[10ox] bg-[#27272A] rounded-xl cursor-pointer'>
              <Avatar name="User name" size="50" className='cursor-pointer mr-3'/>
              <div>
                <p className='text-gray-500 text-md'>@username</p>
                <p>I love This</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMovie
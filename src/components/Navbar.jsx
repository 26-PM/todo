import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-1 my-5 navbar flex justify-evenly items-center bg-black text-white p-4 px-20 h-20 text-xl'>
        <div className="logo cursor-pointer hover:text-lg transition-all duration-5 hover:font-bold">Task Manager</div>
      <ul className='flex gap-10'>
        <li className='cursor-pointer hover:text-lg transition-all duration-5 hover:font-bold'>Home</li>
        <li className='cursor-pointer hover:text-lg transition-all duration-5 hover:font-bold'>Your Tasks</li>
      </ul>
    </div>
  )
}

export default Navbar

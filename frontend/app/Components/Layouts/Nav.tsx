import React from 'react'

const Nav = () => {
    return (
      <div className=' fixed bg-white'>
        <div className='flex items-center h-16 w-[100vw]'>
          <section className=' w-[70%]'>
            <Image src={upxtech} alt='' className=' h-28 w-52 ml-2' />
          </section>
          <section className='flex justify-between w-[30%]'>
            <h1 className=' mr-3'>About</h1>
            <h1 className=' mr-3'>Services</h1>
            <h1 className=' mr-3'>Connect</h1>
          </section>
        </div>
      </div>
    );
  };

export default Nav
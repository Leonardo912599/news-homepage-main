import React, { useState } from 'react'
import CardTecnologie from './components/cardTecnologie'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='min-h-screen px-[20px] sm:px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px] py-[80px] bg-gray-100 max-w-screen'>
   
      <nav className='flex flex-row items-center justify-between w-full'>
        <img className='w-[32px] h-[32px]' src='/logo.svg' alt='Logo' />
        
        <ul className='hidden md:flex flex-row text-gray-700'>
          <li className='ml-4 hover:cursor-pointer'>Home</li>
          <li className='ml-4 hover:cursor-pointer'>New</li>
          <li className='ml-4 hover:cursor-pointer'>Popular</li>
          <li className='ml-4 hover:cursor-pointer'>Trending</li>
          <li className='ml-4 hover:cursor-pointer'>Categories</li>
        </ul>

        <img
          src='/icon-menu.svg'
          alt='Menu'
          className='w-[24px] h-[24px] md:hidden cursor-pointer'
          onClick={() => setMenuOpen(true)}
        />
      </nav>

      {menuOpen && (
        <div className='fixed inset-0 bg-opacity-40 z-40'>
          <div className='fixed top-0 right-0 w-[250px] h-full bg-white shadow-md p-6 z-50 flex flex-col'>
            <div className='flex justify-end'>
              <img
                src='/icon-menu-close.svg'
                alt='Close'
                className='w-[24px] h-[24px] cursor-pointer mb-6'
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <ul className='flex flex-col gap-6 text-gray-800 font-semibold'>
              <li className='hover:cursor-pointer'>Home</li>
              <li className='hover:cursor-pointer'>New</li>
              <li className='hover:cursor-pointer'>Popular</li>
              <li className='hover:cursor-pointer'>Trending</li>
              <li className='hover:cursor-pointer'>Categories</li>
            </ul>
          </div>
        </div>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-6 w-full'>
        <div className='col-span-4 pr-4 pt-4 min-h-[500px]'>
          <img className='w-full max-h-full' src='/image-web-3-desktop.jpg' alt='Web 3.0' />
          <div className='flex flex-col sm:flex-row items-center max-h-full justify-center mt-4'>
            <h1 className='text-5xl w-full sm:w-2/5 text-start font-bold'>The Bright Future of Web 3.0</h1>
            <div className='flex flex-col w-full sm:w-1/2 h-full items-start justify-end pt-2 px-2'>
              <p className='mb-5'>
                We dive into the next evolution on the web that claims to put the power
                of the platforms back into the hands of the people. But is it really
                fulfilling its promise?
              </p>
              <button className='bg-red-500 hover:cursor-pointer text-lg font-bold p-3 w-40'>Read More</button>
            </div>
          </div>
        </div>
        <div className='col-span-2 pl-4 pt-4 min-h-[450px]'>
          <div className='flex flex-col items-start bg-slate-950 p-8 h-full'>
            <h4 className='text-3xl text-amber-500'>New</h4>
            <div className='flex flex-col justify-center border-b border-gray-400 pt-6 pb-6'>
              <p className='text-white'>Hydrogen vs Electric Cars</p>
              <p className='text-gray-400'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className='flex flex-col justify-center border-b border-gray-400 pt-6 pb-6'>
              <p className='text-white'>The Downsides of AI Artistry</p>
              <p className='text-gray-400'>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className='flex flex-col justify-center pt-6 pb-6'>
              <p className='text-white'>Is VC Funding Drying Up?</p>
              <p className='text-gray-400'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-start justify-start sm:items-center sm:justify-center mt-[50px]'>
        <CardTecnologie title={"01"} subtitle={"Reviving Retro PCs"}
          content={"What happens when old PCs are given modern upgrades?"}
          ruta={"/image-retro-pcs.jpg"} />
        <CardTecnologie title={"02"} subtitle={"Top Laptops of 2022"}
          content={"Our best picks for various needs and budgets"}
          ruta={"/image-top-laptops.jpg"} />
        <CardTecnologie title={"03"} subtitle={"The Growth of Gaming"}
          content={"How the pandemic has sparked fresh opportunities"}
          ruta={"/image-gaming-growth.jpg"} />
      </div>
    </div>
  )
}

export default App

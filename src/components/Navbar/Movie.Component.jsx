import React, { useContext } from 'react';
import {BiChevronDown, BiMenu, BiSearch, BiShareAlt} from "react-icons/bi";
import { MovieContext } from '../../context/Movie.context';
import { Link } from 'react-router-dom';
import {GiClick} from "react-icons/gi"


const NavSm = () => {
  const {movie} = useContext(MovieContext);

  return (<>
    <div className='text-gray-700 flex items-center justify-between'>
      <div>
        <h3 className='text-xl font-bold'>{movie.original_title}</h3>
      </div>
      <div className='w-8 h-8'>
      <BiShareAlt className='w-full h-full' />
      </div>
    </div>
    </>
  )
}

const NavMd =() =>{
  return <>
    <div className='container flex mx-auto items-center gap-3 px-4 justify-between'>

      <div className='w-10 h-10'>
          <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-ticket-png.png" 
          alt="logo"
          className='w-full h-full' />
      </div>

      <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
        <BiSearch />
        <input type="search" className='w-full bg-transparent border-none focus:outline-none' />
      </div>
      
    </div>
  </>
}

const NavLg = () => {
  return <>
  <div className='container flex mx-auto items-center gap-3 px-4 justify-between'>

    <div className='flex items-center w-1/2 gap-3'>
      <div className='w-10 h-10'>
        <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-ticket-png.png" 
        alt="logo"
        className='w-full h-full' />
      </div>
      <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
        <BiSearch />
        <input type="search" className='w-full bg-transparent border-none focus: outline-none'
        placeholder='search for movies, events, plays, sports and activites' />
      </div>
    </div>

    <div className='flex items-center gap-3'>
      <span className='text-gray-200 text-base flex items-center cursor-pointer hover:text-white'>
        Hyderabad <BiChevronDown />
      </span>
      <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>
        Sign In
      </button>
      <div className='w-8 h-8 text-white'>
        <BiMenu className='w-full h-full' />
      </div>
    </div>

  </div>
  </>  
}

const MovieNavbar = () => {

  return (
    <>
    <nav className='bg-white border-b-2 md:bg-darkBackground-700 lg:border-b-0 lg:bg-darkBackground-700 px-4 py-3'>

      {/* mobile-screen navbar */}
      <div className='md:hidden'>
        <NavSm />
      </div>

      {/* mid/tab-screen navbar */}

      <div className='hidden md:flex lg:hidden'>
        <NavMd />
      </div>

      {/* large-screen navbar */}

      <div className='hidden md:hidden lg:flex'>
        <NavLg />
      </div>

    </nav>
    <nav className='bg-darkBackground-800 py-1'>
    <div className='hidden md:hidden lg:flex'>
        <div className='container flex mx-auto items-center gap-3 px-4'>
        <Link to={``}>
        <span className='text-sm text-gray-200  flex items-center cursor-pointer hover:text-white'>
          Movies</span>
        </Link>
        <Link to={``}>
          <span className='text-sm text-gray-200 flex items-center cursor-pointer hover:text-white'>
          Stream</span>
        </Link>
          <Link to={``}>
        <span className='text-sm text-gray-200 flex items-center cursor-pointer hover:text-white'>
          Events</span>
        </Link>

          <Link to={`/Plays`}>
        <span className='text-sm font-bold text-gray-200 flex items-center cursor-pointer hover:text-white'>
          Plays<GiClick/></span>
        </Link>

          <Link to={``}>
        <span className='text-sm text-gray-200  flex items-center cursor-pointer hover:text-white'>
          Sports</span>
        </Link>

          <Link to={``}>
        <span className='text-sm text-gray-200 flex items-center cursor-pointer hover:text-white'>
          Activies</span>
        </Link>

          <Link to={``}>
        <span className='text-sm text-gray-200 flex items-center cursor-pointer hover:text-white'>
          Buss</span>
        </Link>

        </div>
      </div>
    </nav>
    </>
  )
}

export default MovieNavbar
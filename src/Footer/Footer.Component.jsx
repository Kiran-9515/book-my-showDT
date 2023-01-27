import React from 'react'
import {RiCustomerService2Line} from "react-icons/ri";
import {IoTicket} from "react-icons/io5";
import {GoMailRead} from "react-icons/go";

const Footer = () => {
  return (
    <div className='bg-darkBackground-700 px-4 py-3 mt-4'>
        <div className='container text-gray-500 flex mx-auto items-center gap-3 px-4 justify-between '>
            <div className='cursor-pointer hover:text-gray-300'>
                <RiCustomerService2Line />
                <span>24/7 CUSTOMER CARE</span>
            </div>
            <div className='cursor-pointer hover:text-gray-300'>
                <IoTicket />
                <span>RESEND BOOKING CONFIRMATION</span>
            </div>
            <div className='cursor-pointer hover:text-gray-300'>
                <GoMailRead />
                <span>SUBSCRIBE TO THE NEWSLETTER</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
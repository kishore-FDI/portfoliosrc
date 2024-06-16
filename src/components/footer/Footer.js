import React from 'react'
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    const isWideScreen=true;
  return (
    <footer className='flex justify-center mb-4'>
        <small className='flex leading-[1.5] justify-center items-center flex-col gap-3 text-base text '>
            <div>&copy; 2024 Kishore Kumar  K</div>
            <ul className='flex flex-row gap-3'>
          {navLinksdata.map(({ _id, title, link }) => (
            <li className="" 
                key={_id}>
              <Link
                activeClass="semi-active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-3'>
        <div className='border border-b p-1 rounded-xl'>
        <a href="https://www.instagram.com/kishorekumark22/"><FaInstagram className='text-xl'/></a>
        </div>
        <div className='border flex items-center p-0.5 border-b rounded-xl'>
        <a href="https://www.instagram.com/kishorekumark22/"><CiLinkedin className=' text-2xl'/></a>
        </div>
        <div className='border flex items-center px-1 border-b rounded-xl'>
        <a href="https://wa.me/918124075301"><FaWhatsapp className=' text-xl'/></a>
        </div>
        </div>
        </small>
    </footer>
  )
}

export default Footer
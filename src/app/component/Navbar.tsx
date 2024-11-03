'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../../public/images/logo3-removebg-preview.png';
import Men from '../../../public/images/Menu@3x.png';
import Link from 'next/link';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});

  const handleMouseEnter = (index: number) => {
    setDropdownOpen({ ...dropdownOpen, [index]: true });
  };

  const handleMouseLeave = (index: number) => {
    setDropdownOpen({ ...dropdownOpen, [index]: false });
  };

  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);

  const handleShow = () => {
    setHide(true);
    setShow(false);
  };
  
  const handleHide = () => {
    setShow(true);
    setHide(false);
  };

  return (
    <main className='px-4 md:px-20 py-4 z-10'>
      <div className='flex justify-between items-center'>
        <div className='flex w-[90%] md:w-[75%] justify-between items-center'>
         <div>
         <Link href='/'><Image src={Logo} alt='' className='w-[100px] h-[100px]' /></Link>
         </div>
          <div className='hidden md:flex gap-6'>
            {Nav.map((item, i) => (
              <div
                className='font-[700] text-[14px] mt-[-20px] relative'
                key={i}
                onMouseEnter={() => item.submenu && handleMouseEnter(i)}
                onMouseLeave={() => item.submenu && handleMouseLeave(i)}
              >
                <Link href={item.link}>
                  <p>{item.name}</p>
                </Link>
                {item.submenu && dropdownOpen[i] && (
                  <ul className='absolute top-full left-0 mt-0 p-2 w-48 bg-white shadow-lg border z-20'>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className='py-2 px-4 hover:bg-gray-100'>
                        <Link href={subItem.link}>
                          <p>{subItem.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='hidden md:block mt-[-40px]'>
          <Link href='/contact'><button className='bg-[#CDA233] rounded-[36px] px-6 py-2 font-[700] text-[14px]'>Contact Us</button></Link>
        </div>

        <div className='flex items-center gap-6 md:hidden  mt-[-50px]'>
        <Link href='/contact'><button className='bg-[#CDA233] rounded-[36px] px-6 py-2 font-[700] text-[10px] w-[100px]'>Contact Us</button></Link>
        <div>
          {show && <MenuOutlined onClick={handleShow} />}
          {hide && <CloseOutlined onClick={handleHide} />}
        </div>
        </div>
      </div>
      {hide && (
        <div className='block lg:hidden bg-[#fff] w-full px-4 top-50 pb-10 border-t '>
          <ul className='flex flex-col gap-3 text-[#000] text-[16px] font-[600]'>
          {Nav.map((item, i) => (
              <div
                className='font-[700] text-[14px] mt-[0px] relative'
                key={i}
                onMouseEnter={() => item.submenu && handleMouseEnter(i)}
                onMouseLeave={() => item.submenu && handleMouseLeave(i)}
              >
                <Link href={item.link}>
                  <p>{item.name}</p>
                </Link>
                {item.submenu && dropdownOpen[i] && (
                  <ul className='absolute top-full left-0 mt-0 p-2 w-48 bg-white shadow-lg border z-20'>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className='py-2 px-4 hover:bg-gray-100'>
                        <Link href={subItem.link}>
                          <p>{subItem.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
      
        </div>
      )}
    </main>
  );
};

export default Navbar;

const Nav = [
  { name: 'About Us', link: '/about' },
  { name: 'Why M.A. Mahmud SAN & Co', link: '/why' },
  {
    name: 'Our Talents', link: '', submenu: [
      { name: 'Principal Partner', link: '/principal' },
      { name: 'Legal Staff', link: '/partner' },
      { name: 'Admin Staff', link: '/hod' },
      // { name: 'Senior Counsel', link: '/senior-counsel' },
      // { name: 'Counsel', link: '/counsel' },
    ]
  },
  { name: 'Our Practice Areas', link: '/practice' },
  {
    name: 'Insights', link: '', submenu: [
      { name: 'News', link: '/news' },
      { name: 'Publications', link: '/publications' },
      { name: 'Career', link: '/career' },
      { name: 'Newsletter', link: '/newsletter' },
    ]
  },
  // { name: 'Contact Us', link: '/contact' },
];

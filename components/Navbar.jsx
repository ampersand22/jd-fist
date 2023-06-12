import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import NavLogo from '../public/assets/gcu2.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [position, setPosition] = useState('fixed')
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/facebook' ||
      router.asPath === '/instagram'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);
  

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-yellow-300'>
        <Link legacyBehavior href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='70'
              height='60'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/#bio'>Bio</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/#prowrestling'>Pro Wrestling</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/#mma'>MMA</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link legacyBehavior href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link legacyBehavior href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                    responsive='true'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              {/* <p className='w-[85%] md:w-[90%] py-4'>
                
              </p> */}
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link legacyBehavior href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link legacyBehavior href='/#bio'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Bio
                </li>
              </Link>
              <Link legacyBehavior href='/#prowrestling'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Pro Wrestling
                </li>
              </Link>
              <Link legacyBehavior href='/#mma'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  MMA
                </li>
              </Link>
              
              <Link legacyBehavior href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#2f2f2f]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.facebook.com/PinGriffeyJr/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaFacebook />
                  </div>
                </a>
                <a
                  href='https://www.instagram.com/that_jd_griffey/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaInstagram />
                  </div>
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

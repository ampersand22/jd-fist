import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import bgImg from "../public/assets/jdbg3.png";
import profileaew from "../public/assets/profileaew.jpeg";


const Main = () => {
  return (


    <div id='home' className='w-full h-screen text-center'>
    <div style={{
        zIndex: -1,
        position: "fixed",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
      }}>
      <Image 
          src={bgImg}
          alt= "bgImg"
          fill
          style={{ objectFit: "cover" }}
        />

    </div>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div className='landing-box'>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#2f2f2f]'>JD Griffey</span>
          </h1>
          <h3 className='py-2 text-gray-700'>#PinGriffeyJr #Perfect10Griffey</h3>
          <q className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Pinfall, Submission, TKO... I&#39;ll never leave it to the judges.
          </q>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.facebook.com/PinGriffeyJr/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebook />
              </div>
            </a>
            <a
              href='https://www.instagram.com/that_jd_griffey/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

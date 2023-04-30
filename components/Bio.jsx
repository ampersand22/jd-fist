import Image from 'next/image';
import Link from 'next/link';
import bioImg from '../public/assets/gymchair.jpeg';

const About = () => {
  return (
    <div id='bio' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase tracking-widest text-[#2f2f2f] bg-yellow-300 w-20 px-2 text-3xl'>
            Bio
          </p>
          {/* <h2 className='py-4'>Who I Am</h2> */}
          <p className='py-2 text-gray-900 '>
          Hailing from Coral Gables, Florida, Jerome Daniel Griffey has spent several years honing his craft in the ring, the octagon, and life. A current member of the AEW/ROH roster, JD has spent
           wrestled for multiple promotions, including: Metroplex Wrestling, Texoma Wrestling...
          </p>
          <p className='py-2 text-gray-600'>
            
          </p>
          <Link legacyBehavior href='/#prowrestling'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out the gallery.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={bioImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

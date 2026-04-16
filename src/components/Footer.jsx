import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo-xl.png'
import fbLogo from '@/assets/facebook.png'
import instaLogo from '@/assets/instagram.png'
import Xlogo from '@/assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#6c8e2b]'>
            <footer className="footer footer-horizontal footer-center  text-white py-10">
  <aside>
                <Image
                    width={200}
                    height='auto'
                src={logo} alt='keen-keeper logo'/>
    <p className="font-bold px-12">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>
  
  </aside>
            <nav>
                <div>  <p className='text-lg font-bold'>Social Links</p></div>
                <div className="grid grid-flow-col gap-4">                  
      <a>
                        <Image
                            src={fbLogo}
                                alt='facebook logo'
                                height='auto' width='auto'                            />
      </a>
      <a>
                        <Image
                                src={instaLogo} alt='instagram logo'
                            height='auto' width='auto' />
      </a>
      <a>
                            <Image src={Xlogo} alt='twitter logo'
                            height='auto' width='auto' />
      </a>
    </div>
            </nav>          
        </footer>
            <div className='divider'></div>
            <footer className='pb-6 container mx-auto'>
                 <div className='flex justify-between md:flex-row flex-col items-center text-zinc-300 space-y-2'>
                <div>  <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
                <div className='flex gap-4'>
                        <a href="">
                            <p>Privacy Policy</p>
                        </a>
                    <a href=""><p>Terms Of Services</p></a>
                    <a href=""><p>Cookies</p></a>
                </div>
              
            </div>
            </footer>
        </div>
       
    );
};

export default Footer;
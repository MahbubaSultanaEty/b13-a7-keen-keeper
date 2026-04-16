'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import { Home, Clock, ChartArea, Icon, } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png'

const Navbar = () => {
    const navItems = [
        {
            path: '/',
            text: "Home",
            icon: Home
        },
        {
            path: '/timeline',
            text: "Timeline",
            icon: Clock
        },
        {
            path: '/stats',
            text: "stats",
            icon: ChartArea
        }
    ]
    

    const pathName = usePathname();
    console.log(navItems[0].text);
    
    return (
        <div className='bg-base-100 shadow-sm'>
             <div className="navbar container mx-auto ">
  <div className="flex-1">
                <Image src={logo} height='auto' width='auto' alt='logo'>
                    
   </Image>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
        {
                        navItems.map((navItem, index) => {
                            const isActive = navItem.path == pathName;
                            const Icon = navItem.icon;
                            return (<li key={index}>
                                <Link
                                    className={`hover:text-green-500 ${isActive? "text-blue-200 bg-[#6c8e2b]": ""}`}
                                    href={navItem.path}>
                                 {Icon && <Icon/>}
                                {navItem.text}
                                </Link>
                            </li>)
           })
        }
    </ul>
            </div>
            
</div>
        </div>
       
    );
};

export default Navbar;
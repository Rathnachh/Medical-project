import React from 'react'
import Container from '@/components/Container';
import { Navbar } from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';
import Image from 'next/image';

import  Footer from '@/components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
        <Breadcrumb />
        <Contact/> 
      <Image
                  src="/contact/map.svg"
                  alt="map"
                  width={1728}
                  height={400}
                />
                
      <Footer/>
    </div>
  )
}

export default About

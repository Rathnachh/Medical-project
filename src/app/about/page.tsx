import React from 'react'
import Container from '@/components/Container';
import { Navbar } from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import AboutUs from '@/components/about';
import Value from '@/components/CoreValue';
import Team from '@/components/Team';
import  Footer from '@/components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Breadcrumb />
        <AboutUs/>
        
      </Container>
      <Value />
      <Team />
      <Footer/>
    </div>
  )
}

export default About


import React from 'react';
import { Navbar } from '@/components/Navbar';
import MedicalCarousel from '@/components/Carousel';
import { Categories } from '@/components/Categories';
import {Features} from "@/components/Feature"
import Product from '@/components/Product';
import SaleOfTheMonthSection from "@/components/Poster"
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import { Brand } from '@/components/Company-brand';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MedicalCarousel />
      <Features />
      <Categories />
      <Product  />
      <SaleOfTheMonthSection />
      <Blog/>
      <Brand/>
      <Footer/>
    </div>
  );
};


export default HomePage;

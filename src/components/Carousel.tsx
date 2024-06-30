'use client'
import React, { Component } from 'react';
import Image from 'next/image';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

interface Slide {
  imageSrc: string;
  alt: string;
  heading: string;
  description: string;
  buttonText: string;
}

interface Props {}

interface State {
  currentSlide: number;
}

class MedicalCarousel extends Component<Props, State> {
  slides: Slide[];

  constructor(props: Props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
    this.slides = [
      {
        imageSrc: '/medical.svg',
        alt: 'Medical Equipment 1',
        heading: 'Medical Equipment Provider',
        description:
          'Medicom experienced since 1993 in medical equipment supply. Sale up to 30% OFF.',
        buttonText: 'Shop Now',
      },
      {
        imageSrc: '/medical.svg',
        alt: 'Medical Equipment 2',
        heading: 'High-Quality Medical Supplies',
        description:
          'Medicom is a major supplier of medical and laboratory equipment throughout the kingdom.',
        buttonText: 'Shop Now',
      },
      // Add more slides as needed
    ];
  }

  nextSlide = (): void => {
    const { currentSlide } = this.state;
    const totalSlides = this.slides.length;
    this.setState({
      currentSlide: currentSlide === totalSlides - 1 ? 0 : currentSlide + 1,
    });
  };

  prevSlide = (): void => {
    const { currentSlide } = this.state;
    const totalSlides = this.slides.length;
    this.setState({
      currentSlide: currentSlide === 0 ? totalSlides - 1 : currentSlide - 1,
    });
  };

  render() {
    const { currentSlide } = this.state;
    const slide = this.slides[currentSlide];

    return (
      <section className="bg-[#F2F2F2] h-[640px] flex items-center">
        <div className="w-full px-[140px]">
          <div className="container mx-auto flex items-center justify-center text-left space-x-10 relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100"
              onClick={this.prevSlide}
            >
              <FiArrowLeft className="text-gray-500 h-6 w-6" />
            </button>
            <Image
              src={slide.imageSrc}
              alt={slide.alt}
              width={450}
              height={500}
              className="object-cover"
            />
            <div className="flex flex-col">
              <div className="flex flex-col w-full items-start">
                <span className="text-[#008001] text-[18px] font-semibold">
                  Medicom experienced since 1993 in
                </span>
                <h1 className="text-[52px] font-extrabold">{slide.heading}</h1>
              </div>
              <div className="flex flex-col items-start mt-10">
                <p className="text-[32px]">
                  Sale up to{' '}
                  <strong className="text-[#FF8A00] font-medium">30% OFF</strong>
                </p>
                <span>{slide.description}</span>
                <button className="mt-6 px-8 py-4 bg-[#008001] text-white rounded-full flex items-center justify-center space-x-2">
                  <span>{slide.buttonText}</span>
                  <FiArrowRight />
                </button>
              </div>
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100"
              onClick={this.nextSlide}
            >
              <FiArrowRight className="text-gray-500 h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default MedicalCarousel;

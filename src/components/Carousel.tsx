'use client';
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
    ];
  }

  nextSlide = (): void => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % this.slides.length,
    }));
  };

  prevSlide = (): void => {
    this.setState((prevState) => ({
      currentSlide:
        prevState.currentSlide === 0 ? this.slides.length - 1 : prevState.currentSlide - 1,
    }));
  };

  render() {
    const { currentSlide } = this.state;
    const slide = this.slides[currentSlide];

    return (
      <section className="bg-[#F2F2F2] h-auto flex items-center py-10">
        <div className="w-full px-5 sm:px-10 lg:px-[140px]">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-6 lg:space-y-0 lg:space-x-10 relative mx-w-auto">
            {/* Left Arrow */}
            <button
              className="absolute left-2 lg:left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 shadow-md"
              onClick={this.prevSlide}
            >
              <FiArrowLeft className="text-gray-500 h-6 w-6" />
            </button>

            {/* Image Section */}
            <Image
              src={slide.imageSrc}
              alt={slide.alt}
              width={450}
              height={500}
              className="object-cover w-[90%] sm:w-[70%] lg:w-[450px] mx-auto"
            />

            {/* Text Content */}
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
              <span className="text-[#008001] text-lg sm:text-xl font-semibold">
                Medicom experienced since 1993 in
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold lg:leading-[1]">
                {slide.heading}
              </h1>

              <div className="mt-6">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Sale up to{' '}
                  <strong className="text-[#FF8A00] font-medium">30% OFF</strong>
                </p>
                <span className="block text-gray-700 mt-2 text-sm sm:text-base">
                  {slide.description}
                </span>
              </div>

              <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-[#008001] text-white rounded-full flex items-center space-x-2 text-sm sm:text-base">
                <span>{slide.buttonText}</span>
                <FiArrowRight />
              </button>
            </div>

            {/* Right Arrow */}
            <button
              className="absolute right-2 lg:right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 shadow-md"
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

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Devon Lane",

    image:
      "https://res.cloudinary.com/dme9eydlq/image/upload/v1772953281/BG_2_i2zh3n.png",
    text: "We love Seoul Mirage! The quality of these products is unmatched...",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Cooper",
    image:
      "https://res.cloudinary.com/dme9eydlq/image/upload/v1772881421/glowly_uploads/jgqk2n0fgbnccwfblzqx.png",
    text: "The authentic Korean ingredients make a huge difference...",
    rating: 5,
  },
  {
    id: 3,
    name: "Theresa Webb",
    image:
      "https://res.cloudinary.com/dme9eydlq/image/upload/v1772953281/BG_2_i2zh3n.png",
    text: "I've tried many brands, but this one stands out...",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-white overflow-hidden font-raleway">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-500 mb-2">
            3940+ Happy Users
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#A68B77]">
            Don't just take our words
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          className="testimonial-swiper !pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-[#F9F9F9] p-8 md:p-0 rounded-sm">
                {/* User Image Wrapper */}
                <div className="relative w-40 h-48 md:w-48 md:h-56 flex-shrink-0 overflow-hidden rounded-xl shadow-sm bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 192px"
                    priority={false}
                    onError={(e) =>
                      console.log("Image not found at:", item.image)
                    }
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 text-[#E6A4B4] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-secondary italic">
                    "{item.text}"
                  </p>
                  <h4 className="text-lg font-bold text-gray-900 tracking-tight">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                    Verified Customer
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles for Swiper Pagination */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #a68b77;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #a68b77 !important;
          width: 24px;
          border-radius: 4px;
        }
        .testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;

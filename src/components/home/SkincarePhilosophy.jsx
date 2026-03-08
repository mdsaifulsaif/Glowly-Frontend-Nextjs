'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // react-router এর বদলে next/link
import Image from "next/image"; // Next.js Image optimization

const SkincarePhilosophy = () => {
  const fadeIn = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <section className="w-full bg-[#F9E4CB] overflow-hidden font-raleway">
      {/* Container wrapper aligned with your global style */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[500px] gap-8 md:gap-0">
          
          {/* Left Side: Content Box */}
          <motion.div
            {...fadeIn}
            className="flex flex-col justify-center py-16 md:py-24 md:pr-12 lg:pr-24 text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight uppercase tracking-tight">
              Our Skincare <br className="hidden lg:block" /> Philosophy
            </h2>

            <div className="space-y-6 text-gray-700 text-sm md:text-lg leading-relaxed max-w-lg font-secondary">
              <p>
                Seoul Mirage was born from a deep appreciation for Korean
                skincare innovation and the belief that effective products
                should be accessible to everyone.
              </p>
              <p>
                We combine time-tested Korean ingredients with modern science to
                create formulations that deliver visible results. Each product
                is meticulously crafted to honor the tradition.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/about">
                <button className="global-btn bg-white text-black hover:bg-gray-50 transition-all">
                  About Us
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Image - Using Next.js Image for optimization */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[400px] md:h-auto w-full min-h-[500px]"
          >
            <Image
              src="/assets/ab1.png"
              alt="Skincare Philosophy Products"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkincarePhilosophy;
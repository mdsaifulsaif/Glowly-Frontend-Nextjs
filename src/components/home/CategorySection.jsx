"use client"; // এটি অবশ্যই থাকতে হবে

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/helper/BASE_URL";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/categories`);
        if (response.data.success) {
          // প্রধম ৪টি ক্যাটাগরি নেওয়া হচ্ছে
          setCategories(response.data.data.slice(0, 4));
        }
      } catch (error) {
        console.error("Category fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="bg-[#F5F2F0] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* আপনার Global CSS এর .section-title ক্লাস */}
        <h2 className="section-title mb-10">Shop by Category</h2>

        {/* Categories Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 animate-pulse rounded-[8px]"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/category/${cat.name.toLowerCase()}`}
                className="relative group cursor-pointer overflow-hidden aspect-square rounded-[8px]"
              >
                {/* Next.js Image Component */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay with Text */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center z-10">
                  <h3 className="text-white text-lg md:text-xl font-medium tracking-widest uppercase">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;

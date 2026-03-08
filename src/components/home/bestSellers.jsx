"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { IoArrowForwardOutline } from "react-icons/io5";
import ProductCard from "@/components/shared/productCard";
import { BASE_URL } from "@/helper/BASE_URL";

function BestSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        setLoading(true);
        // API call
        const response = await axios.get(`${BASE_URL}/products`);

      
        const allData = response.data?.products || response.data?.data || [];

        if (allData.length > 0) {
        
          let filtered = allData.filter((item) => item.isBestseller === true);

  
          if (filtered.length < 4) {
            filtered = allData;
          }

      
          const randomFour = [...filtered]
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);

          setProducts(randomFour);
        }
      } catch (error) {
        console.error("Fetch Error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white font-raleway">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-baseline md:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title">
              Bestsellers
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Our community's most-loved Korean skincare essentials.
            </p>
          </div>

          <Link
            href="/shop"
            className="group flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-black hover:opacity-70 transition-all"
          >
            View all products
            <IoArrowForwardOutline className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        {/* Grid Section */}
        {loading ? (
          /* Loading Skeleton State */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-100 aspect-[3/4] rounded-sm mb-4"></div>
                <div className="h-4 bg-gray-100 w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-100 w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Actual Product Grid */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400 py-10">
                No bestsellers found at the moment.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default BestSellers;

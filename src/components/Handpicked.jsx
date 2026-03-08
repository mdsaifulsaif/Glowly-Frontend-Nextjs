"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"; 
import { CgArrowLongRight } from "react-icons/cg";
import ProductCard from "@/components/shared/productCard";
import { BASE_URL } from "@/helper/BASE_URL";
import { IoArrowForwardOutline } from "react-icons/io5";

function Handpicked() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/products`);

        if (response.data.success) {
          const allData = response.data.data;

         
          let filtered = allData.filter((item) => item.isNew === true);

        
          const sourceData = filtered.length >= 4 ? filtered : allData;

        
          const shuffled = [...sourceData]
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);

          setProducts(shuffled);
        }
      } catch (error) {
        console.error("Error fetching products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  return (
    <section className="mt-16 mb-20">
      <div className="container mx-auto px-4  ">
       
         {/* Header Section */}
        <div className="flex flex-col md:flex-row items-baseline md:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title">
               Hand picked for you
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

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-gray-100 animate-pulse rounded-sm"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Handpicked;
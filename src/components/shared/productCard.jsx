"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoBagHandleOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const {
    _id,
    name,
    thumbnail,
    salePrice,
    categoryID,
    rating = 4.9,
    reviews = 186,
  } = product || {};

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (product) {
      addToCart(product, 1);
      toast.success(`${name} added to cart!`, {
        style: {
          borderRadius: "0px",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
        },
      });
    }
  };

  return (
    <Link
      href={`/product/${_id}`}
    
      className="product-card group"
    >

      <div className="relative overflow-hidden bg-[#F8F8F8] aspect-[3/4] rounded-[8px]">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={name || "Product Image"}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
    
            className="card-image transition-transform duration-1000 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            No Image
          </div>
        )}

        {/* Hover "Add to Cart" Button Overlay */}
        <div className="absolute inset-0 flex items-end justify-center p-4 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        
            className="bg-white text-black w-full py-3 flex items-center justify-center gap-2 font-bold shadow-2xl text-[10px] uppercase tracking-widest border border-gray-100"
            onClick={handleAddToCart}
          >
            <IoBagHandleOutline size={16} />
            <span>Add to Cart</span>
          </motion.button>
        </div>
      </div>

      {/* Content Section */}
      <div className="card-content pt-4">
        {/* card-category  */}
        <span className="card-category">{categoryID?.name || "Skincare"}</span>

        {/*  .card-title */}
        <h3 className="card-title line-clamp-1">{name}</h3>

        <div className="flex items-center justify-between mt-1">
          {/* CSS এর .card-price ক্লাস */}
          <p className="card-price">${salePrice}</p>

          {/*rating-container */}
          <div className="rating-container">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="font-medium text-gray-700">{rating}</span>
            <span className="text-gray-400">({reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

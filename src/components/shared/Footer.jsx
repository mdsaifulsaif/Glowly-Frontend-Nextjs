"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BASE_URL } from "@/helper/BASE_URL";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/subscribe`, { email });
      if (res.data.success) {
        toast.success(res.data.message || "Subscribed successfully!");
        setEmail("");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <section className="py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Join Our Community
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 px-4"
            >
              Subscribe to our newsletter for exclusive offers, skincare tips,
              and new product announcements.
            </motion.p>

            <motion.form
              onSubmit={handleSubscribe}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-[600px] flex flex-col sm:flex-row items-center gap-4 px-4"
            >
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full px-6 py-4 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-gray-400 transition-all placeholder:text-gray-400 disabled:bg-gray-50"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#D1A0B0] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#c48e9f] transition-all w-full sm:w-auto whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Subscribe"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link href="/">
              <img
                src="/assets/logo.png"
                alt="Seoul Mirage"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 max-w-[300px] text-[16px] leading-relaxed">
              Experience the best of Korean skincare with Seoul Mirage. Your
              journey to glowing skin starts here.
            </p>
            <div className="flex gap-4 text-[#D185A2] justify-center md:justify-start">
              <Link href="#" className="hover:opacity-70 transition">
                <FaGoogle size={18} />
              </Link>
              <Link href="#" className="hover:opacity-70 transition">
                <FaFacebookF size={18} />
              </Link>
              <Link href="#" className="hover:opacity-70 transition">
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[24px] font-semibold mb-6">Shop</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-black transition"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-600 hover:text-black transition"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-600 hover:text-black transition"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[24px] font-semibold mb-6">About</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-black transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-black transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 hover:text-black transition"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-black transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-[14px] text-gray-500 font-medium">
            © 2026 Seoul Mirage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

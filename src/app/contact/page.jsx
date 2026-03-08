"use client";

import React, { useState } from "react";
import { FaRegEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ContactUsPage = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "How long will my order take to arrive?",
      answer:
        "Orders are typically processed within 1-2 business days. Domestic shipping takes 3-5 business days, while international shipping can take 7-14 business days depending on the location.",
    },
    {
      id: 2,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination and will be calculated at checkout.",
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused and unopened products. Please contact our support team to initiate a return process.",
    },
    {
      id: 4,
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely. Seoul Mirage is committed to cruelty-free practices, and we ensure all our partner brands adhere to the same standards.",
    },
    {
      id: 5,
      question: "How can I track my order?",
      answer:
        "Once your order ships, you will receive an email with a tracking number and a link to monitor your package's progress.",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-raleway">
      {/* --- Header Section --- */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-12 tracking-tight">
          Contact Us
        </h1>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Form Side */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-3 uppercase tracking-wider">
              Get in Touch
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-10 max-w-md leading-relaxed">
              Have a question or need assistance? Fill out the form below and
              our team will get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#333]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-[#E5E5E5] p-4 rounded-sm focus:outline-none focus:border-black transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#333]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-[#E5E5E5] p-4 rounded-sm focus:outline-none focus:border-black transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#333]">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full border border-[#E5E5E5] p-4 rounded-sm focus:outline-none focus:border-black transition-all resize-none text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-black text-white px-12 py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-opacity-80 transition-all w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="flex-1 hidden lg:flex justify-end items-center">
            <img
              src="/assets/cont2.png"
              alt="Contact Seoul Mirage"
              className="w-full max-w-[550px] aspect-[4/5] object-cover rounded-sm grayscale-[20%]"
            />
          </div>
        </div>
      </div>

      {/* --- Other Ways to Reach Us (Beige Section) --- */}
      <div className="bg-[#F2E6D9] py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-12 uppercase tracking-wider text-center md:text-left">
            Connect With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <FaRegEnvelope className="text-xl text-[#D1A0B0]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1A1A1A] mb-2 uppercase tracking-tighter">
                  Email
                </h4>
                <p className="text-sm text-gray-600">hello@seoulmirage.com</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <FaPhone className="text-xl text-[#D1A0B0]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1A1A1A] mb-2 uppercase tracking-tighter">
                  Phone
                </h4>
                <p className="text-sm text-gray-600">+82 2 123 4567</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <FaMapMarkerAlt className="text-xl text-[#D1A0B0]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1A1A1A] mb-2 uppercase tracking-tighter">
                  Location
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  123 Beauty Lane, Gangnam
                  <br />
                  Seoul, South Korea
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FAQ Section --- */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* FAQ Image */}
          <div className="flex-1 hidden lg:block">
            <img
              src="/assets/cont1.png"
              alt="Frequently Asked Questions"
              className="w-full aspect-square object-cover rounded-sm"
            />
          </div>

          {/* FAQ Accordion Side */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              FAQs
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-12 leading-relaxed max-w-lg">
              Find answers to our most commonly asked questions about orders,
              shipping, and products.
            </p>

            <div className="border-t border-[#EEE]">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-[#EEE]">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === faq.id ? null : faq.id)
                    }
                    className="w-full flex justify-between items-center py-6 text-left group transition-all"
                  >
                    <span
                      className={`text-[15px] font-bold tracking-tight transition-colors ${
                        openFaq === faq.id ? "text-[#D1A0B0]" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                    {openFaq === faq.id ? (
                      <FiChevronUp className="text-xl text-[#D1A0B0]" />
                    ) : (
                      <FiChevronDown className="text-xl text-gray-400 group-hover:text-black" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[14px] text-gray-500 pb-8 leading-relaxed pr-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

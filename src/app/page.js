"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/contexts/authContext";
import { dimensionValueTypes } from "framer-motion";
import Hero from "@/components/home/hero";
import BestSellers from "@/components/home/bestSellers";
import CategorySection from "@/components/home/CategorySection";
import SkincarePhilosophy from "@/components/home/SkincarePhilosophy";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import NewArrivals from "@/components/home/NewArrivals";

function Home() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("Current Logged In User:", user);
    } else {
      console.log("No user is currently logged in.");
    }
  }, [user]);

  return (
    <div>
      <Hero />
      <BestSellers />
      <CategorySection />
      <SkincarePhilosophy />
      <TestimonialSlider />
      <NewArrivals />
    </div>
  );
}

export default Home;

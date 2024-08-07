'use client' 
import React from "react";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'; 
import {TestimonialsgetApi } from '@/app/Api/getApi';
import TestimonialsComponent from "./TestimonialsComponent";

const Testimonials = () => {

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-40 mb-28">
        <h2 className="text-customblue">TESTIMONIALS</h2>
        <h1 className="sm:text-5xl sm:w-2/4 text-center mt-5 text-2xl font-bold">The Trust From Clients</h1>
      </div>
      <div className="mb-10 sm:mx-32 overflow-x-auto flex justify-center ">
        <TestimonialsComponent />
      </div>
    </div>
  );
};

export default Testimonials;

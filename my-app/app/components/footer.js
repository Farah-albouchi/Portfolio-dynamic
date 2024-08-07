'use client' 

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation'; 
import { ContactgetApi } from '@/app/Api/getApi';
import { useState , useEffect } from "react";
const FooterPart = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[1]; 
  const [portfolioData, setPortfolioData] = useState(null); 

  useEffect(() => {
    if (id) {
        async function fetchData() {
            try {
                const data = await ContactgetApi(id); 
                console.log(data)
                setPortfolioData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
            }
        }

        fetchData();
    }
}, [id]);
  return (
    <div className="bg-customblue flex justify-between items-center h-24 p-4">
      <p className="text-customwhite font-normal text-sm">© Copyright 2024. All Rights Reserved.</p>
      <div className="flex space-x-4">
         <h2 className='text-white mt-1 font-medium'>FOLLOW US:</h2>
        <a href={portfolioData?.FBlink} target="_blank" rel="noopener noreferrer" className="icon-wrapper facebook">
          <FaFacebookF className="text-customwhite" size="1em" />
        </a>
        <a href={portfolioData?.INSTAlink} target="_blank" rel="noopener noreferrer" className="icon-wrapper instagram">
          <FaInstagram className="text-customwhite" size="1em" />
        </a>
        <a href={portfolioData?.LinkedIN} target="_blank" rel="noopener noreferrer" className="icon-wrapper linkedin">
          <FaLinkedinIn className="text-customwhite" size="1em" />
        </a>
        <a href={`mailto:${portfolioData?.email}`} className="icon-wrapper email">
          <MdEmail className="text-customwhite" size="1em" />
        </a>
      </div>
      <style jsx>{`
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2em;
          height: 2em;
          border-radius: 50%;
          transition: background-color 0.3s;
          background-color:#79B2F2 
        }
        
        .icon-wrapper:hover {
          background-color: gray;
        }
      `}</style>
    </div>
  );
}

export default FooterPart;

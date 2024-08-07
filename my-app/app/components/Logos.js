'use client';
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'; 
import ProgressDemo from './progress';
import { PartnersgetApi } from '@/app/Api/getApi';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Logos = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[1]; 
  const [portfolioData, setPortfolioData] = useState(null); 
  
  useEffect(() => {
      if (id) {
          async function fetchData() {
              try {
                  const data = await PartnersgetApi(id); 
                  
                  setPortfolioData(data);
                 
              } catch (error) {
                  console.error('Error fetching portfolio data:', error);
              }
          }

          fetchData();
      }
  }, [id]);
  return (
    <div className="bg-partnerBG h-56 flex flex-row items-center sm:space-x-3 space-x-3 justify-around overflow-x-auto sm:overflow-x-hidden">
      {portfolioData && portfolioData.map((item, index) => (
        
        <img
         src={`http://localhost:3000/${item.image.replace(/\\/g, '/')}`} 
        
          width={200} 
          height={200} 
        />
       
      ))}
      
    </div>
  );
}

export default Logos;

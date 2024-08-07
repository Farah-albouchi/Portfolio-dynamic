'use client' 
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'; 
import {ServicegetApi } from '@/app/Api/getApi';
import ServiceComponent from "./ServiceComponent";

const Services =() => {
     
    const pathname = usePathname();
    const id = pathname.split('/')[1]; 
    const [portfolioData, setPortfolioData] = useState(null); 
   
    useEffect(() => {
        if (id) {
            async function fetchData() {
                try {
                    const data = await ServicegetApi(id); 
                    console.log(data); 
                    setPortfolioData(data);
                   
                } catch (error) {
                    console.error('Error fetching portfolio data:', error);
                }
            }

            fetchData();
        }
    }, [id]);
    return(
        <section
        id="services" 
        className="mt-40"
        >
              <div className="flex justify-center items-center flex-col  mb-20 ">
               <h2 className=" text-customblue mb-5   " >SERVICES </h2>
               <h1 className=" sm:text-5xl text-2xl font-bold">{portfolioData?.title}<span className=' text-5xl font-bold text-customblue'> {portfolioData?.title2}</span> </h1>
               <p className='text-lg font-normal sm:w-1/2 text-center mt-6'>
               {portfolioData?.description}
               </p>
               </div>
               <div className="mb-20 mx-8 flex justify-center items-center">
          <ServiceComponent services={portfolioData?.services} />
          </div>
        </section>
    );
}
export default Services ;
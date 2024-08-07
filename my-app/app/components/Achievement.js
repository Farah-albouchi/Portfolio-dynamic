'use client';

import { AchievementgetApi } from '@/app/Api/getApi';
import AchievementComponent from "./AchievementComponent";
import { usePathname } from 'next/navigation'; 
import { useState, useEffect } from "react";

const Achievement = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[1]; 
  const [portfolioData, setPortfolioData] = useState(null); 
  useEffect(() => {
    if (id) {
        async function fetchData() {
            try {
                const data = await AchievementgetApi(id); 
             
                setPortfolioData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
            }
        }

        fetchData();
    }
}, [id]);

    return(
        <div className=" pt-32 mt-40  bg-Achievement bg-cover min-h-screen max-w-screen bg-center flex flex-col justify-center items-center ">
              <h2 className="text-customwhite">
               HOW I WORK   
              </h2>
              <h1 className=" text-white text-center text-5xl font-bold sm:w-1/2">What sets my work apart for your projects?</h1>
              <div className="flex sm:flex-row  flex-col space-y-3 sm:space-y-0 justify-between sm:space-x-3 mt-24 pb-32" >
              {portfolioData?.Achievements && portfolioData.Achievements?.length > 0 ? (
          portfolioData.Achievements.map((widget, index) => (
            <div key={index} className="achievement-item">
              <AchievementComponent title={widget.value} description={widget.description} />
            </div>
          ))
        ) : (
          <p>No Achievement available</p>
        )}
              </div>
        </div>
    )
}
export default Achievement ; 


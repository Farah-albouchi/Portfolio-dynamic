'use client' 
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'; 
import {ProjectgetApi } from '@/app/Api/getApi';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import PortfolioComponent from './PortfolioComponent';
import { Section } from 'lucide-react';
const Portfolio =() => {
  const [selectedSection, setSelectedSection] = useState('All');
  const pathname = usePathname();
    const id = pathname.split('/')[1]; 
    const [portfolioData, setPortfolioData] = useState(null); 
   
    useEffect(() => {
        if (id) {
            async function fetchData() {
                try {
                    const data = await ProjectgetApi(id); 
                    console.log(data); 
                    setPortfolioData(data);
                   
                } catch (error) {
                    console.error('Error fetching portfolio data:', error);
                }
            }

            fetchData();
        }
    }, [id]);
    

    const getButtonClasses = (section) =>
        selectedSection === section
          ? 'bg-customblue text-white  font-medium flex items-center justify-center ml-2 my-2 sm:my-0 sm:ml-5'
          : 'border border-customblue   text-customblue font-medium flex items-center justify-center ml-2 my-2 sm:my-0 sm:ml-5 ';
          const filterProjects = () => {
            if (selectedSection === 'All') {
              return portfolioData?.Projects;
            }
            return portfolioData.Projects?.filter((project) => project.type === selectedSection);
          };
        
          const filteredProjects = filterProjects();
    return(
        <section id="portfolio" className="flex flex-col justify-center items-center  mt-40 mb-28 ">
            <h2 className=" text-customblue   " >MY PORTFOLIO </h2>
            <h1 className=" sm:text-5xl sm:w-2/4 text-center mt-5 text-2xl font-bold">{portfolioData?.title}</h1>
            <div className="flex flex-wrap justify-center gap-2 mt-10 w-full">
        <button
          className={getButtonClasses('All')}
          onClick={() => setSelectedSection('All')}
        >
          All
        </button>
        {portfolioData?.types.map((type, index) => (
          <button
            key={index}
            className={getButtonClasses(type)}
            onClick={() => setSelectedSection(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="mt-10 ml-4 grid sm:grid-cols-3 gap-2 sm:grid-flow-row sm:gap-4">
        {filteredProjects?.length > 0 ? (
          filteredProjects.map((project, index) => (
            <PortfolioComponent
              key={index}
              image={project.image}
              name={project.name}
            />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
        </section>
    ) ;
}
export default Portfolio ; 
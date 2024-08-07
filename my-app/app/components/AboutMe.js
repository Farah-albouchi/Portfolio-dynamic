'use client';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'; 
import ProgressDemo from './progress';
import { AboutgetApi } from '@/app/Api/getApi';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const AboutMe = () => {
    const pathname = usePathname();
    const id = pathname.split('/')[1]; 
    const [portfolioData, setPortfolioData] = useState(null); 
    const [selectedSection, setSelectedSection] = useState('skills');
    useEffect(() => {
        if (id) {
            async function fetchData() {
                try {
                    const data = await AboutgetApi(id); 
                    
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
            ? 'bg-customblue text-white sm:w-48 sm:h-12 font-medium flex items-center justify-center space-x-4'
            : 'border border-customblue sm:w-48 sm:h-12 text-blue-600 font-medium flex items-center justify-center space-x-4';

    if (!portfolioData) return <p>Loading...</p>; 

    return (
        <section id='about' className='flex sm:flex-row flex-col mb-24 mt-40'>
            <div className="sm:ml-32 basis-1/2 ml-5">
            <Avatar className ="sm:h-96 sm:w-96 h-0 w-0 ">
          <AvatarImage  src={portfolioData?.image } alt="Profile Picture" />
          <AvatarFallback>IM</AvatarFallback>
        </Avatar>
            </div>
            <div className="basis-1/2 sm:ml-20 ml-5">
                <h1 className="text-customblue my-2">ABOUT ME</h1>
                <h1 className="text-4xl font-bold text-customblue my-2">{portfolioData.title}</h1>
                <h1 className="text-4xl font-bold my-2">{portfolioData.title2}</h1>
                <p className='text-lg font-normal mt-10'>
                    {portfolioData.description}
                </p>
                <div className="flex mt-10 justify-between space-x-1">
                    <button className={getButtonClasses('skills')}
                        onClick={() => setSelectedSection('skills')}
                    >
                        Main Skills
                    </button>
                    <button className={getButtonClasses('awards')}
                        onClick={() => setSelectedSection('awards')}
                    >
                        Awards
                    </button>
                    <button className={getButtonClasses('education')}
                        onClick={() => setSelectedSection('education')}
                    >
                        Education
                    </button>
                </div>
                <div>
                {selectedSection === 'skills' && (
                        <div>
                        {portfolioData.skills.map((skill, index) => (
                         <div>
                            <h1 className='mt-8 mb-4 text-lg'>{skill.name}</h1>
                            <ProgressDemo value={skill.progress} />
                            
                            </div>
                    ))
                    }
                    </div>
                    )}
                 {selectedSection === 'awards' && (
                        <div>
                        { portfolioData.awards.map((award,index) => (
                        <div>
                            <h1 className='mt-8 mb-2 text-xl'>{award}</h1>
                            
                        </div>
                   ) )} </div> ) }
                    {selectedSection === 'education' && (
                        <div>
                        { portfolioData.education.map((e,index) => (
                        <div>
                            <h1 className='mt-8 mb-2 text-xl'>{e}</h1>
                            
                        </div>
                   ) )} </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default AboutMe;

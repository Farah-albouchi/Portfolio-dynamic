
'use client' 
import Image from "next/image";
import '../styles.css';
import { usePathname } from 'next/navigation'; 
import { OverviewApi , ContactgetApi} from '@/app/Api/getApi';
import { useState , useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const HomePart = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[1]; 
  const [portfolioData, setPortfolioData] = useState(null);
  const [User, setUser] = useState(null);  

  useEffect(() => {
    if (id) {
        async function fetchData() {
            try {
                const data = await OverviewApi(id); 
                const res = await  ContactgetApi(id);
               
                setUser(res);
                setPortfolioData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
            }
        }

        fetchData();
    }
}, [id]);

  const handleDownload = () => {
    const downloadUrl = portfolioData.CV;
    fetch(downloadUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CV.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(err => console.error('Download failed:', err));
  };

  return (
    <section
      id="homepart"
      className="home  flex  sm:flex-row items-center justify-center bg-white"
    >
      <div className=" sm:mr-44 ml-5 flex items-center justify-center">
        <div>
          <h2
            className="sm:text-lg text-sm  mt-20 sm:mt-40  mb-2"
          >
            Welcome to my Portfolio
          </h2>
          <h1 className="Title my-2">Hi I’m</h1>
          <h1 className="Title text-customblue my-2">{User?.Firstname} {User?.Lastname}</h1>
          <h1 className="Title my-2">{portfolioData?.job}</h1>
          <p className=" mt-5 sm:text-lg text-sm font-normal">
            {portfolioData?.description}
          </p>
       
          <div className="flex mb-40  mt-10 lg:justify-start space-x-4">
            <button className="bg-customblue w-36 h-12 text-white py-2 mr-4 font-light  sm:text-normal sm:font-medium">
              Hire Me!
            </button>

            <button onClick={handleDownload} className="border border-customblue w-50 h-12   py-2 font-light sm:text-normal sm:font-medium flex items-center space-x-2">
              <span className="text-customblue">Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#07F"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="  sm:p-4 flex items-center justify-center">
      <Avatar className ="sm:h-96 sm:w-96 h-0 w-0 ">
          <AvatarImage  src={portfolioData?.image } alt="Profile Picture" />
          <AvatarFallback>IM</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
};

export default HomePart;

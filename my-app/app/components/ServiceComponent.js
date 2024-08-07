import React, {  useState, useRef, useEffect  } from "react";
import Image from "next/image";
const ServiceComponent = ({ services }) => {

  const scrollContainerRef = useRef(null);



  const [hoveredIndex, setHoveredIndex] = useState(null);


  const getBackground =(index) => 
   hoveredIndex ===index ? "bg-customblue text-white  flex-none   border-customborder border-2 p-5 h-72 w-96 rounded-xl " :" bg-white flex-none  border-customborder border-2 p-5 h-72 w-96 rounded-xl " ;
 const getHoverdTitle =(index) =>
   hoveredIndex === index ? "font-bold text-2xl mt-3 bg-customblue  text-white" : "font-bold text-2xl mt-6 bg-white" ;
const getHoverdText = (index) => 
    hoveredIndex === index ? " bg-customblue font-normal text-white mt-1" :"text-customblack font-normal mt-1"   ;


  return (
    <div>
    
      <div
        ref={scrollContainerRef}
       className="flex flex-row space-x-4 overflow-x-auto pb-4"
      
      > { services && services.length > 0 ? (
        services.map((widget, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={getBackground(index)}
          >
            {hoveredIndex === index ? (
              <Image
                className="bg-customblue"
                src="/assets/icon-design.png"
                alt="Icon"
                width={200}
                height={200}
              />
            ) : (
              <Image
                src="/assets/icon-blue.png"
                alt="Icon"
                width={45}
                height={45}
              />
            )}
            <h3 className={getHoverdTitle(index)}>{widget.title}</h3>
            <p className={getHoverdText(index)}>{widget.description}</p>
          </div>
        ))) : (
          <p>No services available</p>
        )}
      </div>
    </div>
  );
};

export default ServiceComponent;

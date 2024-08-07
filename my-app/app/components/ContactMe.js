'use client'

import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { usePathname } from 'next/navigation'; 
import { ContactgetApi } from '@/app/Api/getApi';
import { MessagesAddApi } from '@/app/Api/postApi';
import { toast } from "sonner";
import { format } from 'date-fns';

const ContactMe = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    details: '',
    isChecked: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    setFormData({ ...formData, isChecked: event.target.checked });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const { name, email ,isChecked } = formData;
    let valid = true;
  
    if (!name || !email || !isChecked ) {
      valid = false;
   
      setErrors(prevErrors => ({
        ...prevErrors,
        name: !name,
        email: !email,
      }));
    }
  
    if (valid ) {
      try {
        const currentDate = new Date();
        const formattedDate = format(currentDate, 'MMM dd, yyyy h:mm a');

        const rep = await MessagesAddApi({
           Name : formData.name, 
           email : formData.email, 
           object : formData.message, 
           Text : formData.details ,
           date: formattedDate
        }, id);
        
        if (rep) {
          console.log("API Response:", rep); 
          toast.success("Your message has been sent successfully!"); // Show success message
        } else {
          console.error("Unexpected response data structure");
        }

        setFormData({
          name: '',
          email: '',
          message: '',
          details: '',
          isChecked: false,
        });
      } catch(err) {
        console.error("Error sending:", err);
        toast.error("Failed to send the message."); // Show error message
      }
  
      console.log('Form submitted:', formData);
    } else {
      console.log("There are errors in the form submission"); 
    }
  };
  
  return (
    <section id="contact" className="mt-32 bg-Contact bg-cover min-h-screen max-w-screen bg-center flex flex-col justify-center items-center">
      <h2 className="text-customwhite">CONTACT ME</h2>
      <h1 className="text-white text-center text-5xl font-bold sm:w-1/2">Request Free Consultancy</h1>
      <div className="flex sm:flex-row flex-col mt-20">
        {
          portfolioData ? (
            <div className="bg-white h-72 w-full sm:w-1/2 p-6 rounded-2xl">
            <h2>Hotline 24/7</h2>
            <h1 className="text-2xl mb-10">(+216) {portfolioData.phone}</h1>
            <h2>Address: {portfolioData.address}</h2>
            <p>Email: <span className="font-normal">{portfolioData.email}</span></p>
            <p>Work Hour: <span className="font-normal">{portfolioData.workingHoures
}</span></p>
          </div>
          ) : (
            <p>Loading</p>
          )
        }
     
        <div className="mt-10 sm:mt-0 sm:ml-10 w-full sm:w-2/3">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:space-x-5">
              <input
                className={`rounded-lg w-full sm:w-1/2 p-2 h-12 mb-5 sm:mb-0 ${errors.name ? 'border-red-500 border-solid  border-2' : ''}`}
                type="text"
                placeholder="Name*"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className={`rounded-lg w-full sm:w-1/2 p-2 h-12 ${errors.email ? 'border-red-500 border-solid  border-2' : ''}`}
                type="email"
                placeholder="Email Address*"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <input
              className="rounded-lg w-full p-2 h-12 mt-5"
              type="text"
              placeholder="How can we help you?"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <input
              className="rounded-lg w-full p-2 h-36 mt-5"
              type="text"
              placeholder="How can we help you?"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                checked={formData.isChecked}
                onChange={handleCheckboxChange}
              />
              <p className="text-customwhite ml-2 font-normal text-sm">By submitting, I’m agreed to the <a href="#" className="text-customwhite">Terms & Conditions</a></p>
            </div>
            <Button
              type="submit"
              sx={{
                fontSize: 20,
                textTransform: "none",
                width: 198,
                height: 50,
                fontWeight: 700,
                borderRadius: 20,
                backgroundColor: '#00489A',
                '&:hover': {
                  backgroundColor: '#003366',
                },
                color: '#ffffff',
              }}
              className="mt-5 mb-24"
            >
              Request Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

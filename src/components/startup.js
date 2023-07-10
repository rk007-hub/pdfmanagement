import Image from 'next/image'
import myImage from '../assets/pdfImg2.jpg'

import React from "react";

const BigHeadingWithImage = () => {
  return (
    <div  className="bg-white lg:flex lg:justify-between lg:items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-5xl">
          <span className="block">PDF Hub: Simplify  <span className=" text-red-400"> PDF Management</span>  and Collaborate with Ease!</span>
          {/* <span className="block text-teal-400">development</span> */}
        </h2>
        {/* <h2 className="text-3xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
          <span className="block">Get instant reminders on Telegram or WhatsApp for important <span className=" text-teal-400"> emails!</span></span>
          
        </h2> */}
        <p className="mt-5 text-xl text-gray-500">
        {/* Do you struggle to keep up with your inbox? Our application makes it easy to stay on top of urgent emails by sending instant reminders to your preferred messaging app. Simply connect your Telegram or WhatsApp account, choose the emails you want to be reminded about, and set a schedule that works for you! */}
        Welcome to PDF Hub, your all-in-one solution for managing and collaborating on PDF files. Whether youre an individual or a team, our web application is designed to streamline your workflow, ensuring seamless document sharing and collaboration. With PDF Hub, you can securely upload, organize, and access your PDF documents from anywhere, at any time.

        </p>
      </div>
      
      <div className="mt-10 flex lg:mt-0 lg:flex-shrink-0">
      <Image

          src={myImage}
          alt="Image"
          width={600}
          height={400}
          className="object-cover "
        />
      </div>
      
      
    </div>
    
  );
};

export default BigHeadingWithImage;

// const BigHeadingWithImage = () => {
//     return (
//       <div className="bg-gradient-to-r from-teal-400 to-green-450 py-12 px-4 lg:px-20">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="text-white">
//             <h2 className="text-3xl font-bold">Never miss urgent <span className=" text-teal-400"> Emails</span></h2>
//             <h1 className="text-5xl font-bold leading-tight">Get instant reminders on Telegram or WhatsApp for important emails!</h1>
//             <p className="mt-4 text-lg">Description goes here</p>
//           </div>
//           <div className="mt-6 lg:mt-0">
//           <Image
//           src={myImage}
//           alt="Image"
//           width={600}
//           height={400}
//           className="object-cover"
//         />
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default BigHeadingWithImage;
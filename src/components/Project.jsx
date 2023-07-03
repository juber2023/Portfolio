// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import project1 from "../assets/images/project-1.png";
// import project2 from "../assets/images/project-2.jpg";
// import project3 from "../assets/images/project-3.jpg";
// import project4 from "../assets/images/project-4.jpg";
// import project5 from "../assets/images/project-5.png";
// import project_person from "../assets/images/project_person1.png";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";

// const Project = () => {
//   const projects = [
//     {
//       img: project1,
//       name: "Movie App",
//       github_link: "https://github.com/Sridhar-C-25",
//       live_link: "https://myreactflix.netlify.app",
//     },
//     {
//       img: project2,
//       name: "Job search Web App",
//       github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
//       live_link: "https://myjobsearch.netlify.app",
//     },
//     {
//       img: project3,
//       name: "Highking",
//       github_link: "https://github.com/Sridhar-C-25/highking",
//       live_link: "https://highking01.netlify.app",
//     },
//     {
//       img: project4,
//       name: "React Nav",
//       github_link:
//         "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
//       live_link: "https://reacttailwindnavbar.netlify.app",
//     },
//     {
//       img: project5,
//       name: "Vue Country",
//       github_link: "https://github.com/Sridhar-C-25",
//       live_link: "https://vuecountry05.netlify.app",
//     },
//   ];
//   return (
//     <section id="projects" className="py-10 text-white">
//       <div className="text-center">
//         <h3 className="text-4xl font-semibold">
//           My <span className="text-violet-600">Projects</span>
//         </h3>
//       </div>
//       <br />
      
//         <div className=" w-3/4 mx-auto">
//           <Swiper
//             slidesPerview={1.2}
//             spaceBetween={20}
//             breakpoints={{
//               768: {
//                 slidesPerView: 1,
//               },
//             }}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination, Autoplay]}
//           >
//             {projects.map((project_info, i) => (
//               <SwiperSlide key={i}>
//                 <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
//                   <img src={project_info.img} alt="" className="rounded-lg" />
//                   <h3 className="text-xl my-4">{project_info.name}</h3>
//                   <div className="flex gap-3">
//                     <a
//                       href={project_info.github_link}
//                       target="_blank"
//                       className="text-violet-600 bg-gray-800 px-2 py-1 inline-block"
//                     >
//                       Github
//                     </a>
//                     <a
//                       href={project_info.live_link}
//                       target="_blank"
//                       className="text-violet-600 bg-gray-800 px-2 py-1 inline-block"
//                     >
//                       Live
//                     </a>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
      
//     </section>
//   );
// };

// export default Project;

// import React from 'react';
// import img1 from '../assets/images/actiontoys.png'
// import img2 from '../assets/images/codeyourcarrer.png'
// import img3 from '../assets/images/foodlovers.png'
// import img4 from '../assets/images/geometry.png'
// import img5 from '../assets/images/globalspeak.png'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Project = () => {
//   return (
//     <section id='projects'>
//       <Carousel showArrows={true} >
//                 <div>
//                     <img src={img1} />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src={img2} />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src={img3} />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src={img4} />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img src={img5}/>
//                     <p className="legend">Legend 5</p>
//                 </div>
//             </Carousel>
//     </section>
//   );
// };

// export default Project;

import React, { useState } from 'react';
import img1 from '../assets/images/actiontoys.png';
import img4 from '../assets/images/codeyourcarrer.png';
import img3 from '../assets/images/foodlovers.png';
import img5 from '../assets/images/geometry.png';
import img2 from '../assets/images/globalspeak.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Project = () => {

  return (
    <section id='projects' className='py-16 '>
      <p className='text-center text-4xl font-semibold mb-3'>Some of My Projects</p>
      <Carousel
        showArrows={true}
        interval={2000} // Set interval to 5 seconds
        autoPlay={true} // Enable autoplay
        infiniteLoop={true} // Enable infinite loop
        className='w-3/4 mx-auto rounded-xl'
      >
        <div className='rounded-xl  '>
          <img src={img1} alt="Project 1" className='' />
          <p className="mb-7 mt-2 ">
            <a href='https://toy-marketplace-a9011.web.app/' target='blank' className='button'>Live</a>
            <a href='https://github.com/juber2023/Toy_marketplace' target='blank' className='button'>Client</a>
            <a href='https://github.com/juber2023/server-toy-marketplace' target='blank' className='button'>Server</a>
            </p>
        </div>
        <div className='rounded-xl  '>
          <img src={img2} alt="Project 2" className='' />
          <p className="mb-7 mt-2">
          <a href='https://assignment12-404e0.web.app/' target='blank' className='button'>Live</a>
            <a href='https://github.com/juber2023/GlobalSpeak-School' target='blank' className='button'>Client</a>
            <a href='https://github.com/juber2023/GlobalSpeak-Server' target='blank' className='button'>Server</a>
          </p>
        </div >
        <div className='rounded-xl  '>
          <img src={img3} alt="Project 3" className='' />
          <p className="mb-7 mt-2">
          <a href='https://food-lovers-3b485.firebaseapp.com/' target='blank' className='button'>Live</a>
            <a href='https://github.com/juber2023/Restaurant-world' target='blank' className='button'>Client</a>
            <a href='https://github.com/juber2023/Server-restaurant-ordering-system' target='blank' className='button'>Server</a>
          </p>
        </div>
        <div className='rounded-xl  '>
          <img src={img4} alt="Project 4" className='' />
          <p className="mb-7 mt-2">
          <a href='https://shiny-pothos-272b3d.netlify.app/' target='blank' className='button'>Live</a>
            <a href='https://github.com/juber2023/Code_Your_Carrer' target='blank' className='button'>Client</a>
          </p>
        </div>
        <div className='rounded-xl '>
          <img src={img5} alt="Project 5" className='' />
          <p className="mb-7 mt-2">
          <a href='https://rainbow-gelato-747ca5.netlify.app/' target='blank' className='button'>Live</a>
            <a href='https://github.com/programming-hero-web-course2/b7a5-geometry-genius-assignment-juber2023' target='blank' className='button'>Client</a>
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default Project;


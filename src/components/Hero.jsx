import React from "react";
import hero from "../assets/images/juber.png";
import resumePDF from "../assets/files/resume.pdf";

const Hero = () => {
  const social_media = [
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/juber-alam-278676278?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXFmS7FIpQB2HAwHfnJJ%2BcQ%3D%3D" },
    { name: "logo-Github", link: "https://github.com/juber2023" },
    { name: "logo-facebook", link: "https://www.facebook.com/juber.eco/" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="w-3/4" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-violet-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I am <span>Juber Alam</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            MERN Stack Developer
          </h4>
          <button className="bg-violet-600 hover:bg-violet-900 rounded-xl flex px-3 py-2 mt-8 font-semibold gap-1" onClick={handleResumeDownload}>
            Resume
            <p className="text-xl"><ion-icon name="download-outline" ></ion-icon></p>
            

          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <a key={icon.name} href={icon.link} target="_blank" rel="noopener noreferrer">
                <div className="text-gray-600 hover:text-white cursor-pointer">
                  <ion-icon name={icon.name}></ion-icon>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

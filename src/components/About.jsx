import React from "react";
import aboutImg from "../assets/images/juber_photo-removebg-preview.png";
import resumePDF from "../assets/files/resume.pdf";
const About = () => {
  const info = [
    { text: "Year experience", count: "01" },
    { text: "Completed Projects", count: "20" },
    { text: "Assignments", count: "12" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'resume.pdf';
    link.click();
  };
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-violet-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 ">
              Seeking a challenging role where I can collaborate with talented teams & hone my skills. Embracing continuous learning, I aim to stay at the forefront of emerging technologies, applying them creatively to drive organizational growth and achieve exceptional results.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-violet-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              {/* <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a> */}
              <button className="bg-violet-600 hover:bg-violet-900 text-white rounded-xl flex px-3 py-2  font-semibold gap-1" onClick={handleResumeDownload}>
            Resume
            <p className="text-xl"><ion-icon name="download-outline" ></ion-icon></p>
            

          </button>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

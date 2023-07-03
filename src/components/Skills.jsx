import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Expert",
      count: 85,
      name: "Html5",
      color: "text-orange-500"
    },
    {
      logo: "logo-css3",
      level: "Expert",
      count: 90,
      name: "CSS3",
      color: "text-sky-400"
    },
    {
      logo: "logo-javascript",
      level: "Comfortable",
      count: 80,
      name: "JavaScript",
      color: "text-yellow-500"
    },
    {
      logo: "logo-react",
      level: "Expert",
      count: 90,
      name: "ReactJS",
      color: "text-blue-500"
    },
    {
      logo: "leaf-outline",
      level: "Comfortable",
      count: 80,
      name: "MongoDB",
      color: "text-green-500"
    },
    
    {
      logo: "logo-nodejs",
      level: "Familiar",
      count: 70,
      name: "NodeJS",
      color: "text-green-300"
    },
    {
      logo: "logo-vercel",
      level: "Comfortable",
      count: 80,
      name: "Vercel",
      color: "text-black"
    },
    {
      logo: "logo-firebase",
      level: "Comfortable",
      count: 80,
      name: "Firebase",
      color: "text-yellow-500"
      
    },
    
    
  ];
  return (
    <section id="skills" className="py-10  relative w-3/4 mx-auto px-10">
      <div className="mt-8  text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-violet-600">Skills</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center justify-center mt-12 gap-10 ">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2  border-white relative  p-10 rounded-xl items-center justify-center flex flex-col hover:scale-110 duration-150"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-40 h-40 flex items-center justify-center rounded-full"
              >
                
                <div className= {`text-6xl w-36 h-36 bg-zinc-800 ${skill.color} rounded-full flex items-center justify-center`} >
                  
                  <ion-icon name={skill.logo}></ion-icon>
                  
                  
                </div>
                <p className="absolute top-[200px]">{skill.name}</p>
                
              </div>
              
              <p className="text-xl mt-3">{skill.level}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

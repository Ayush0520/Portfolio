import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from "react-icons/di";
import {
  FaJava,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiCsharp,
  SiMongodb,
  SiExpress,
  SiDjango,
  SiNginx,
  SiMicrosoftazure,
} from "react-icons/si";
import { PiFileSqlDuotone } from "react-icons/pi";
import { MdAndroid } from "react-icons/md";

const technologies = [
  { name: "HTML5", icon: <DiHtml5 />, hoverClass: "group-hover:text-html" },
  { name: "CSS3", icon: <DiCss3 />, hoverClass: "group-hover:text-css" },
  { name: "JavaScript", icon: <DiJavascript1 />, hoverClass: "group-hover:text-javascript" },
  { name: "React.js", icon: <DiReact />, hoverClass: "group-hover:text-react" },
  { name: "Node.js", icon: <DiNodejs />, hoverClass: "group-hover:text-nodejs" },
  { name: "Express.js", icon: <SiExpress />, hoverClass: "group-hover:text-express" },
  { name: "Django", icon: <SiDjango />, hoverClass: "group-hover:text-django" },
  { name: "SQL", icon: <PiFileSqlDuotone />, hoverClass: "group-hover:text-sql" },
  { name: "MongoDB", icon: <SiMongodb />, hoverClass: "group-hover:text-mongodb" },
  { name: "Python", icon: <DiPython />, hoverClass: "group-hover:text-python" },
  { name: "C++", icon: <SiCplusplus />, hoverClass: "group-hover:text-cpp" },
  { name: "C#", icon: <SiCsharp />, hoverClass: "group-hover:text-csharp" },
  { name: "Java", icon: <FaJava />, hoverClass: "group-hover:text-java" },
  { name: "Docker", icon: <FaDocker />, hoverClass: "group-hover:text-docker" },
  { name: "Nginx", icon: <SiNginx />, hoverClass: "group-hover:text-nginx" },
  { name: "Microsoft Azure", icon: <SiMicrosoftazure />, hoverClass: "group-hover:text-azure" },
  { name: "GitHub", icon: <FaGithub />, hoverClass: "group-hover:text-github" },
  { name: "Android Studio", icon: <MdAndroid />, hoverClass: "group-hover:text-android" },
];

const Technologies = () => {
  return (
    <section>
      <div id="technologies-section" className="bg-white py-16">
        <div className="container mx-auto px-8 max-w-screen-xl text-center">
          <h2 className="text-4xl font-serif text-[#2e3a59] mb-4">
            Technologies I've Worked With
          </h2>
          <p className="text-lg text-[#5a6476] mb-12">
            A showcase of the tools and technologies that fuel my work.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-2 group relative"
                title={tech.name}
              >
                <div 
                  className={`
                    text-6xl text-gray-400 
                    transition-all duration-300 ease-in-out
                    group-hover:scale-125 group-hover:rotate-[360deg]
                    group-hover:shadow-lg group-hover:shadow-gray-300/50
                    ${tech.hoverClass}
                    hover:animate-pulse
                    cursor-pointer
                    p-2 rounded-lg
                  `}
                >
                  {tech.icon}
                </div>
                <span className="
                  text-sm font-medium text-[#5a6476]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  absolute -bottom-6 left-1/2 transform -translate-x-1/2
                  whitespace-nowrap
                ">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-gray-300"></div>

          <div className="mt-12 text-center">
            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
              <div className="mb-8 md:mb-0 md:flex-1">
                <h3 className="text-xl md:text-3xl font-semibold text-[#2e3a59] mb-4 md:mb-6">Currently Working</h3>
                <div className="flex justify-center">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbpHADuaZuvJWq6aykYkvpp5G2ziJGtPeSw&s"
                      alt="GEP Worlwide"
                      className="mx-auto h-20 w-auto object-contain"
                    />
                    <p className="text-sm md:text-base font-medium text-[#5a6476] mt-2">GEP Worldwide</p>
                    <p className="text-xs md:text-sm text-[#9aa0ac]">Jan, 2024 - Present</p>
                  </div>
                </div>
              </div>

              <div className="md:flex-1">
                <h3 className="text-xl md:text-3xl font-semibold text-[#2e3a59] mb-4 md:mb-6">Where I've Worked</h3>
                <div className="flex justify-center gap-8">
                  <div>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAe1BMVEX///
                      9YWFo5rqiBgoWTlZhtbnF4eXyampvj4+SMjpKVl5r39/d8fYDr7OzHyMhlZmlRUVTa2tpKSk0pqqSn2NWlpaW
                      23tzj8vHy+vkeqKHK5+VtwLuZ0c5Vt7JPtrBBsavX7eyOzcmu2thDQ0aGysa+4d/r9vZjvbjd7+5u9J0IAAAED
                      UlEQVR4nO3d63KiShiF4Q6JOYwzk0M7BlQQDUbv/wpHTBWQCl9jRRe4Uuv9TWr2fopD0zbgnFJKKaWUUkoppZR
                      SSimllFJKKaWUUkoppdSPaXxv1NjG2mTc2OS5vT/dm3T+4dDdXz+0V28yvm1v1PjfGD22dvW33uTm7eX43u7qP
                      3yP8Qyh7h9uWvtVbzL+fd3abYPodtTaY4Po7unq+J4aRJMkLTbveAorBiIfeZ+ki1e8RmscRGU+ySaDHHI8RAe
                      leQ4X+RIVUamUzvAon2MjKpFyuMqn+IiiKJn3en1jJNpf4CZ4mSpKoj1S1t8QgJRof7St8Tgf0RJFSYHXOcRLt
                      L+09TOSJCaK/LKXExIz0R6pDyNuoijpwYicqI/9iJ0oWsLP2fREPhVRB1Hk0eOjCyB6aunleCL4OHt4otG/thp
                      /OEnCROjL2uBEzUOqvXiadiBl5xT50vBEN0f8V87S8CkbOjfCQeTcNAqOjpBzbCxELp4HjPz8PBqt0RCFT9tJf
                      gYLIyIiNwvsR9szWBgxEbk8cM+fn0xhRUXkcvtYw52NuIjc1NyPcLf8ZERuZU5BLk6UMGMjcpm5G50GYUdHtDN
                      3I9SP/XRE5qEGmxThI4rN3egkCDs+IrcwjFAjbEKi2Bgcoa5phERubhxpoNEjI5F1rwY6GTESOetkhBlgUxIZR
                      5rffN8hECXRun03Ap2vKYmMETZo7pGSKDYuaZh5NUoi614W82MRJ9HW2I0gSyA4iQrjZCSiKuM2LRFRlbWIVkR
                      VIupMRJ0ZRDpd1xmnaxHVGRd9jYvqjKHj8tsMoTiJjBsQzOJZSiLrNlZ3+lXWZAjmlzRKImtKDbO6mJLImpjF/
                      GRNSWRN72MeB2Eksn4kAi2/ZiQy1s6i1j0QEpk/WE9PgbAjJDKXPYDWp/MRmYtnUA+m8RGZS7BQD4LQEZkL+VD
                      HGR9RagjBjjM6IntRMWbNg6MjspemR6dKmHERzcwHHHAr07mIbCHQtPUhJqJNQAi3EzERWaPqQ8B3PtAQvW5DD
                      34iH9VnIQruQtin0DmI1sHnq6FPxlIQ7Va+460hq3OKfOnCieJ8kXUAoV/2cFlE8WvVLp9NJ0Uadfrg3/J0UUT
                      rpM6XdfKUJyLYzdklEgXuwOx9CDho/BlE8Bc80RNBXxbyI4g88D0YVdREfexD3EQ9nIfKiIkS+LXsI16ipK/vF
                      LAS+bS39++TEuEHjHWURD7d4WWqCIl8BFoCYkRH5Ps8xg6REe2Bev90ExORT7LevmzRiIbIJ8sih3O0RUHkvc9
                      WOZrC6sKJDnOPWTEd6gt7Zcd8znKE/JzlW+Nfak7MlnOzy20x2ewG/pqlUkoppZRSSimllFJKKaWUUkoppZRSS
                      imlztp/tav/6a+S/sMAAAAASUVORK5CYII="
                      alt="IIITD"
                      className="mx-auto h-20 w-auto object-contain"
                    />
                    <p className="text-sm md:text-base font-medium text-[#5a6476] mt-2">IIITD</p>
                    <p className="text-xs md:text-sm text-[#9aa0ac]">Jan, 2021 - Dec, 2023</p>
                  </div>
                  <div>
                    <img
                      src="https://1000logos.net/wp-content/uploads/2022/06/Chegg-Logo.png"
                      alt="Chegg"
                      className="mx-auto h-20 w-auto object-contain"
                    />
                    <p className="text-sm md:text-base font-medium text-[#5a6476] mt-2">Chegg</p>
                    <p className="text-xs md:text-sm text-[#9aa0ac]">Aug, 2022 - Dec, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

import React, { useState } from "react";

import "./style.scss";
import Section from "../shared/section/Section";
import Filter from "./filters/index";
import Showcase from "./showcase";

const projectsData = [
  {
      id: 1,
      name: "Healthy Food Restraunt",
      tags: ["web-app", "mobile-app"],
      image: "photos/thumb-7.jpg"
  },
  {
      id: 2,
      name: "Anna & Daniel",
      tags: ["web-page"],
      image: "photos/thumb-2.jpg"
  },
  {
      id: 3,
      name: "Web Design Landing Page",
      tags: ["web-page"],
      image: "photos/thumb-8.jpg"
  },
  {
      id: 4,
      name: "Business Analytics Web App",
      tags: ["web-app", "mobile-app"],
      image: "photos/thumb-1.jpg"
  },
  {
      id: 5,
      name: "Limitless",
      tags: ["web-app", "web-page"],
      image: "photos/thumb-6.jpg"
  },
  {
      id: 6,
      name: "Dashboard",
      tags: ["product", "web-app", "mobile-app"],
      image: "photos/thumb-4.jpg"
  },
  {
      id: 7,
      name: "Digital Creative Agency",
      tags: ["web-app"],
      image: "photos/thumb-3.jpg"
  },
  {
      id: 8,
      name: "Virtual Reality Experience",
      tags: ["web-app", "mobile-app", "web-page"],
      image: "photos/thumb-5.jpg"
  },
];

function Portfolio() {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

const filterProjects = (tag) =>{
  setTimeout(()=>{
    if(tag !== "all"){
      const filteredProjects = projectsData.filter((f) => f.tags.includes(tag));
      setProjects(filteredProjects)
    }else{
      setProjects(projectsData)
    }
  }, 200)
}

  return (
    <Section id="portfolio" title="Check My Portfolio" background="light">
      <div className="portfolio-content-wrapper">
        <Filter filterProjects={(tag) => filterProjects(tag)}/>
       <Showcase data={projects} transition={transition}/>
       <p>NOTE: Please Click the GitHub icon and see all the projects</p>
      </div>
    </Section>
  );
}

export default Portfolio;


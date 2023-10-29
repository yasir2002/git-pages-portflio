import React from "react";
import projects from "./Projects.json";
import "../../index.css";
import project1 from "./projectsImages/project1.png";
import project2 from "./projectsImages/project2.png";
import "./ProjectCard.css"

const images = [project1, project2]; // You can add more images here if needed

const getIcon = (language) => {
  switch (language) {
    case "React":
      return { className: "fab fa-react", color: "#61dafb" };
    case "JSX":
      return { className: "fab fa-react", color: "#61dafb" };
    case "CSS":
      return { className: "fab fa-css3-alt", color: "#1572B6" };
    case "HTML":
      return { className: "fab fa-html5", color: "#E34F26" };
    case "JavaScript":
      return { className: "fab fa-js", color: "#F7DF1E" };
    default:
      return { className: "", color: "" };
  }
};

const lightColors = [
  "#f5f5f5",
  "#e8f5e9",
  "#f3e5f5",
  "#fff9c4",
  "#e1f5fe",
  "#fce4ec",
];

const ProjectCard = () => {
  return (
    <div className="container my-5" id="projects">
      <h2 className="fw-bold">Projects</h2>
      {projects.map((project, index) => (
        <div
          className="card p-4 rounded-5 mb-3 my-4 border-0"
          key={index}
          style={{ background: lightColors[index] }}
        >
          <div className="row">
            <div className="col-md-7 d-flex flex-column justify-content-around custom-content">
              <h5 className="" style={{ color: "#8602ff" }}>
                {project.type}
              </h5>
              <h2 className="fw-bold w-75">{project.name}</h2>
              <div className="d-flex justify-content-around w-50">
                {project.languages.map((language, langIndex) => {
                  const { className, color } = getIcon(language);
                  return (
                    <span key={langIndex} className="d-flex align-items-center">
                      <i
                        className={`${className} pe-1`}
                        style={{ color: color, fontSize: "20px" }}
                      >
                        {" "}
                      </i>
                      {language}
                    </span>
                  );
                })}
              </div>

              <div className="d-flex i-center mt-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn text-white fw-bold"
                  style={{ backgroundColor: "#8602ff" }}
                >
                  Visit Site <i className="fa fa-link"></i>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn text-white fw-bold ms-2"
                  style={{ backgroundColor: "#8602ff" }}
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img src={images[index]} className="img-fluid rounded" alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;

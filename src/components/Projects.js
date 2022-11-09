import ProjectCard from "./projectCard/ProjectCard";
import placeholder from "../assets/placeholder.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectCard
        title="This is a title"
        description="This is a description"
        imageUrl={placeholder}
        imageAlt="placeholder"
      />
    </div>
  );
};

export default Projects;

const ProjectCard = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-full" src={imageUrl} alt={imageAlt} ß />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

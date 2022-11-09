const About = () => {
  const devIconStyle = {
    "font-size": "50px",
    "margin-bottom": "1rem",
  };

  const iconColor = "text-base-content";

  return (
    <div className="about flex gap-x-12">
      <div className="text-xl md:text-lg basis-1/2">
        <h2 className="mb-4 md:border-l-8 md:pl-8 md:border-transparent text-xl font-bold text-primary-content">
          Quick Bio
        </h2>
        <p className="mb-4 md:border-l-8 md:pl-8 md:border-primary">
          I am a full-stack developer with a background in culinary arts and UX
          Design. As a chef, my passion was wellness and sustainability. As a
          designer, my focus was usability. I've learned to combine these
          concepts while building web and mobile applications. My goals is to
          build products that allow people to better interact with the world
          around them and do so in an efficient way.
        </p>
      </div>
      <div className="basis-1/2 flex flex-col items-left">
        <h2 className="mb-4 text-xl font-bold text-primary-content">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-x-4">
          <i
            className={`devicon-javascript-plain ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-html5-plain-wordmark ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-tailwindcss-plain ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-react-original-wordmark ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-nodejs-plain-wordmark ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-mongodb-plain-wordmark ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-flask-original ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-git-plain-wordmark ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-github-original-wordmark ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-illustrator-plain ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-photoshop-plain ${iconColor}`}
            style={devIconStyle}
          ></i>
          <i
            className={`devicon-vscode-plain-wordmark ${iconColor}`}
            style={devIconStyle}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default About;

const CurrentProject = () => {
  const devIconStyle = {
    "font-size": "50px",
  };

  const iconColor = "text-primary-content";

  return (
    <div className="current-project">
      <div className=" flex flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">Tote</h1>
          <h2 className="text-md text-accent mb-8">for farmers markets</h2>
          <p className="text-xl md:mb-8">
            Tote is a full-stack CRUD application that providesa pre-ordering
            platform for farmers markets. Producers are able to list their
            products and buyers can browse the products, add them to their cart,
            and purchase them so they are ready for them to pick up at the
            market.
          </p>
          <div className="icons flex justify-around gap-x-4 bg-base-200 w-5/6 m-auto p-4 shadow-inner shadow-base-300">
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
          </div>
        </div>
        <div className="bg-primary"></div>
        <iframe
          src="https://www.youtube.com/embed/uunkTCJJb54"
          frameborder="0"
          width="100%"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          className="lg:w-1/2"
        ></iframe>
      </div>
    </div>
  );
};

export default CurrentProject;

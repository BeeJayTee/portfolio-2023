const CurrentProject = () => {
  const devIconStyle = {
    "font-size": "50px",
  };

  const iconColor = "text-primary-content";

  return (
    <div className="current-project">
      <div className=" flex flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left basis-1/2">
          <div className="md:border-l-8 md:pl-8 md:border-transparent">
            <h1 className="text-5xl font-bold text-primary-content">Tote</h1>
            <h2 className="text-md text-accent mb-8">a farmers markets app</h2>
          </div>
          <p className="text-md mb-8 md:border-l-8 md:pl-8 md:border-primary">
            Tote is a full-stack CRUD application that providesa pre-ordering
            platform for farmers markets. Producers are able to list their
            products and buyers can browse the products, add them to their cart,
            and purchase them so they are ready for them to pick up at the
            market.
          </p>
          <div className="icons flex justify-around gap-x-4 bg-base-200 w-5/6 m-auto p-4 shadow-inner shadow-base-300 mb-8">
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
        <div className="flex flex-col justify-center gap-y-8 md:gap-y-12 basic-1/2">
          <button className="btn btn-primary">Check out Tote</button>
          <button className="btn btn-secondary">Watch the demo video</button>
        </div>
      </div>
    </div>
  );
};

export default CurrentProject;

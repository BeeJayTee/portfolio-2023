const Navbar = ({ activeTab, setActiveTab }) => {
  const handleClick = (e) => {
    setActiveTab(e.target.value);
  };
  return (
    <div className="navbar flex justify-center">
      <nav>
        <div className="tabs flex flex-col items-center gap-y-4 md:flex-row md:gap-x-8">
          <button
            value="1"
            onClick={handleClick}
            className={`tab tab-bordered ${
              activeTab === "1" ? "tab-active" : ""
            }`}
          >
            About Me
          </button>
          <button
            value="2"
            onClick={handleClick}
            className={`tab tab-bordered ${
              activeTab === "2" ? "tab-active" : ""
            }`}
          >
            In Production
          </button>
          <button
            value="3"
            onClick={handleClick}
            className={`tab tab-bordered ${
              activeTab === "3" ? "tab-active" : ""
            }`}
          >
            Past Projects
          </button>
          <button
            value="4"
            onClick={handleClick}
            className={`tab tab-bordered ${
              activeTab === "4" ? "tab-active" : ""
            }`}
          >
            Contact Me
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

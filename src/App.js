import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import CurrentProject from "./components/CurrentProject";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="App container m-auto mt-8 md:mt-32">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content w-5/6 py-8 m-auto md:w-2/3">
        {activeTab === "1" && <About />}
        {activeTab === "2" && <CurrentProject />}
        {activeTab === "3" && <Projects />}
        {activeTab === "4" && <Contact />}
      </div>
    </div>
  );
}

export default App;

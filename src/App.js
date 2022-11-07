import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <h1 className="text-sm">hello chickens</h1>
    </div>
  );
}

export default App;

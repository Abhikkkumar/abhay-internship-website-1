import { useState } from "react";
import "./App.css";

import NavbarL from "./NavbarL";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  const one = "sidebar";
  const two = "sidebar hide-sidebar";
  const [sidebarClass, setSidebarClass] = useState(two);

  function handleSidebar() {
    if (sidebarClass === one) {
      setSidebarClass(two);
    } else {
      setSidebarClass(one);
    }
  }
  return (
    <div className="App">
      <NavbarL sidebarClass={sidebarClass} handleSidebar={handleSidebar} />
      <Sidebar sidebarClass={sidebarClass} handleSidebar={handleSidebar} />
      <Home />
    </div>
  );
}

export default App;

import React from "react";
import NavBar from "./Components/NavBar";

function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="w-full">{children}</div>
    </div>
  );
}

export default Layout;

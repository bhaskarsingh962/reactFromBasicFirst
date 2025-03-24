import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

//navebar

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>LOGO</h1>
      <ul className="menu_item">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
      </ul>
    </div>
  );
};

const App = () => {
    return <div>
      <Navbar/>;  
    </div>
} 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>);
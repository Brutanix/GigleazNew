import React from "react";
import { Dropdown } from "rsuite";
import dropdown from "../assets/dropdown-arrow.png"

// const Dropdownhome = () => {
//   return (
//     <Dropdown title="Dropdown" className='home-dropdown-container'>
//     <Dropdown.Item className='home-dropdown-container'>New File</Dropdown.Item>
//     <Dropdown.Item>New File with Current Profile</Dropdown.Item>
//     <Dropdown.Item>Download As...</Dropdown.Item>
//     <Dropdown.Item>Export PDF</Dropdown.Item>
//     <Dropdown.Item>Export HTML</Dropdown.Item>
//     <Dropdown.Item>Settings</Dropdown.Item>
//     <Dropdown.Item>About</Dropdown.Item>
//    </Dropdown>
//   )
// }

const Dropdownhome = () => {
  return (
    <div>
      <div className="dropdown-bg-container">
        <select className="home-drop-container">
          <option className="selectll">monday</option>
          <option>tuesday</option>
          <option>wednesday</option>
          <option>thursday</option>
        </select>
        <img className="dropdown-arrow" src={dropdown}/>
      </div>
    </div>
  );
};

export default Dropdownhome;

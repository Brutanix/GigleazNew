import {React,useState} from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import "./utils.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  console.log(activeTab)
  const changeActiveTab=(value)=>setActiveTab(value);
  const [ismobile,setIsmobile]=useState(false)
  

  const toggleChange=()=>{
    setIsmobile(!ismobile)
    console.log(ismobile)
  }

  return (
    <div>
      <div className="nav-container">
        <div>
        <Link to="/">
          <img onClick={()=>{setIsmobile()}} className="nav-logo" src={logo} />
          </Link>
        </div>

        <ul   className={`nav-links-container ${ismobile?"mobile-nav-links-container":""}`}>
          <Link className="nav-link-router" to="/">
            <li className={`${activeTab=="jobs"?"nav-active-styling":""}`} onClick={()=>{changeActiveTab("jobs");setIsmobile()}}>Jobs</li>
          </Link>
          <Link className="nav-link-router"  to="jobbylocation">
            <li className={`${activeTab=="location"?"nav-active-styling":""}`} onClick={()=>{changeActiveTab("location");setIsmobile()}}>Location</li>
          </Link>
          <Link className="nav-link-router"  to="jobbyprofession">
            <li className={`${activeTab=="profession"?"nav-active-styling":""}`}  onClick={()=>{changeActiveTab("profession");setIsmobile()}}>Professions</li>
          </Link>
        </ul>

        <button onClick={toggleChange}  className="nav-tobble-button">{ismobile==true?<RxCross2/>:<HiMiniBars3BottomLeft/>}</button>
      </div>
    </div>
  );
};

export default Navbar;

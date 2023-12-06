import React, { useState } from 'react';
import logo from "../ui/udemy_logo.jpeg";
import person from "../ui/persons.jpg";

import { FaTag, FaHome, FaList, FaClipboard, FaLightbulb, FaLock, FaBatteryFull, FaUserShield } from 'react-icons/fa'

function Sidebar() {
    // const [currenytPage,setCurrentPage] = useState("/");
    // const [nav,setNav] = useState({
    //     {label: "Home" slug: "/", icon: "icon"}
    //     {label: ""}
    // })
    return (
        <div className='sidebar fixed'>
            <a href='#' className="logo bl">
                <img src={logo} className='bl' />
            </a>
            <ul className='nav'>
                <p>hey</p>

                <li className='com'> <li>
                    <a href='#' className='Link noul flex c333'>
                        <FaTag className='ico s15 icon-home flex' />
                        <h2 className='lbl s24'>Home</h2>
                    </a>
                </li>
                </li>
                <li>
                    <a href='#' className='Link noul flex c333'>
                        <FaList className='ico s15 icon-home flex' />
                        <h2 className='lbl s24'>Discover</h2>
                    </a>
                </li> <li>
                    <a href='#' className='Link noul flex c333'>
                        <FaTag className='ico s15 icon-home flex' />
                        <h2 className='lbl s24'>Categories</h2>
                    </a>
                </li> <li>
                    <a href='#' className='Link noul flex c333'>
                        <FaClipboard className='ico s15 icon-home flex' />
                        <h2 className='lbl s24'>My Courses</h2>
                    </a>
                </li>
            </ul>
            <div className='updated-course flex aic '>
                <FaLightbulb className='icon-lampbright ico' />
                <div className='lbl coursename c333 s15 '>Updated course</div>
                <h2 className='aurthor s13 c777'>by harsheen</h2>
            </div>

<div className='stats flex'>
    <div className='stats-box flex ' >
       <div> <FaUserShield className='ico s24 icon-shield ico-points'></FaUserShield></div>
        <h2 className='val s15 c777 fontb'>1800</h2>
        <h2 className='lbl s13 c777'>points</h2>
    </div>

    <div className='stats-box flex'>
        <div>< FaBatteryFull className='ico ico-battery s24 icon-battery-90' ></FaBatteryFull></div>
       <div> <h2 className='val s15 c777 fontb'>45.3%</h2></div>
        <h2 className='lbl s13 c777'>complete</h2>
    </div>
</div>
<div>
    <div className='me'>
        <div><img src={person} className='lbl' /> </div>
        <div className='name s15 c777'>harsheen kaur<br></br>@harsheenkaur</div>
        </div>
</div>

        </div>
    )
}
export default Sidebar;

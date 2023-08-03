import React, { useEffect, useState } from 'react'
import "../web/Style.css"
import img from "../asset/net1.png"
import img1 from "../asset/avatar.png"
function Nav() {
    const[show,handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll",null);

        };
    },[]);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src={img} alt="Netflix Logo"  className='nav__logo' />
      <img src={img1} alt="Netflix Logo"  className='nav__avatar'/>
    </div>
  )
}

export default Nav

import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material'
function Sidebar() {
  return (
    <div className =" sidebar">
        <div className = "sidebar__profile">
            <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt=""/>

            <div className="profile__details">
              <Avatar/>
               <h4> any name </h4> 
               <p> web developer</p>
            </div>
              <div className="profile__stats">
                <span> who viewed your profile</span>
                <span className="stat__number"> 20</span>
              </div>
              <div className="profile__stats">
                <span> Connection<br/><b> Grow your network </b></span>
                <span className="stat__number"> 120</span>
              </div>
        </div>
      <div className="sidebar__recent">
        <p>Recent</p>
        <p className="hash"><span>#</span>branding</p>
        <p className="hash"><span>#</span>Marketing</p>
        <p className="hash"><span>#</span>web development</p>
        <p className="hash"><span>#</span>AI/ML</p>
        <p className="hash"><span>#</span>programing</p>
        <p className="hash"><span>#</span>ReactJs</p>
      </div>
    </div>
  )
}

export default Sidebar


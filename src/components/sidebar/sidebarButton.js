import React from 'react'
import { IconContext } from 'react-icons'
import { NavLink, useLocation } from 'react-router-dom'
import "./sidebarButton.css"

function SidebarButton(props) {
    const location = useLocation()

    const isActive = location.pathname === props.to 

    const btnClass = isActive ? "btn-body active" : "btn-body"
  return (
    <NavLink to={props.to}>
        <div className={btnClass}>
            <IconContext.Provider value={{size : "24px", className : "btn-icon"}}>
            {props.icon}
            <p className='btn-title'>{props.title}</p>
            </IconContext.Provider>
        </div>
    </NavLink>
  )
}

export default SidebarButton
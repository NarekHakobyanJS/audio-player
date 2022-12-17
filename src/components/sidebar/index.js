import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import SidebarButton from './sidebarButton'
import { MdFavorite } from "react-icons/md"
import { FaGripfire, FaPlay } from "react-icons/fa"
import { FaSignOutAlt } from 'react-icons/fa'
import { IoLibrary } from "react-icons/io5"
import { MdSpaceDashboard } from "react-icons/md"
import apiClient from '../../spotify'

function Sidebar() {
  const [image, setImage] = useState("https://media-exp1.licdn.com/dms/image/C4D03AQF2Sd8qYh1xcg/profile-displayphoto-shrink_800_800/0/1660450862054?e=2147483647&v=beta&t=xqid9uM9Y3CB5vyLvTOZv2G8lALaOu_0rxCbzpCigWM")

  useEffect(() => {
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url)
    })
  }, [])
  return (
    <div className='sidebar-container'>
      <img src={image}
        className='profile-img'
        alt="profile-img"
      />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}

export default Sidebar
import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import {AiFillPlayCircle} from "react-icons/ai"
import APIKit from "../../spotify"
import "./libary.css"
import { useNavigate } from 'react-router-dom'

function Libary() {
  const [playlists, setPlaylists] = useState(null)

  useEffect(() => {
    APIKit.get('me/playlists').then(function (response) {
      setPlaylists(response.data.items)
      console.log(response.data.items)
    })
  }, [])

  const navigate = useNavigate()
  const playPlayList = (id) => {
    navigate('/player', {state : {id : id}})
  }
  return (
    <div className='screen-container'>
      <div className='library-body'>
        {playlists?.map(playlist => {
          return <div className='playlist-card'
           key={playlist.id}
           onClick={() => playPlayList(playlist.id)}
           >
            <img className='playlist-image' src={playlist.images[0].url} />
            <p className='playlist-title'>{playlist.name}</p>
            <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
            <div className='playlist-fade'>
              <IconContext.Provider value={{size : "50px", color : "E99D72"}}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Libary
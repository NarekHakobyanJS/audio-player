import React from 'react'
import "./albumImage.css"
function AlbumImage({ url }) {

    return (
            <div className='albumImage flex'>
                <img src={url} className='albumImage-art' />
                <div className='albumImage-shadow'>
                    <img src={url} className='albumImage-shadow' />
                </div>
            </div>
    )
}

export default AlbumImage
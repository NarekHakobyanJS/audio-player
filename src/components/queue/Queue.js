import React from 'react'
import "./queue.css"
function Queue({ setCurrentIndex, tracks }) {
    const changeIndex = (index) => {
        setCurrentIndex(index)
    }
    return (
        <div className='queue-container flex'>
            <div className='queue flex' >
                <p className='upNext'>Up Next</p>
                <div className='queue-list'>
                    {
                        tracks?.map((track, index) => (
                            <div className='queue-item flex'
                            onClick={() => changeIndex(index)}
                            >
                                <p className='track-name'>{track?.track?.name}</p>
                                <p>0 : 30</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Queue
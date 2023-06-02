import React from 'react'

const Loading = () => {
    return (
        <div className='container flex my-12 animate-pulse transition duration-300 mx-auto items-center justify-center'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    )
}

export default Loading
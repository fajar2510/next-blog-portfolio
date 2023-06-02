import React from 'react'

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-primary'>Work with me</h1>
            {children}
        </div>
    )
}

export default Layout
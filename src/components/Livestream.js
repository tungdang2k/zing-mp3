import React from 'react'

const Livestream = ({ image, title }) => {
    return (
        <div className='w-1/7 mx-4 flex flex-col'>
            <img src={image} alt="image" className='rounded-full w-full object-contain' />
            <p>{title}</p>
        </div>
    )
}

export default Livestream

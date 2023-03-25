import React from 'react';

const Photo = ({id, server, secret}) => {

    const source = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`

    return (

        <li>
            <img src={source} alt="" key={id}/>
        </li>

    )
}

export default Photo;
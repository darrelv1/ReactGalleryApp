import React from 'react'; 


const Gallery = ({photos}) =>{


    let pic = photos.map( (x) => {
            const id = x.id
            const serverID = x.server
            const secretID = x.secret

            const source = `https://live.staticflickr.com/${serverID}/${id}_${secretID}.jpg`

            return <img src={source} alt="" />
        })

    
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {pic}
            </ul>
        </div>
        
    )
    
}
export default Gallery;
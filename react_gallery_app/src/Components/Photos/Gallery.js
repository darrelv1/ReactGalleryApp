import React from 'react';
import { useParams } from 'react-router-dom';
import Photo from "./photo"


const Gallery = ({
                     pics,
                     searchInput,
                     updateSearch
                 }) =>{

    let {item} = useParams();
    if (item !== undefined) {
        updateSearch(item)
    } else {
        updateSearch(searchInput);
    }
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {pics.map((x) => {
                        return (
                            <Photo
                                id={x.id}
                                server={x.server}
                                secret={x.secret}
                            />)})
                }
            </ul>
        </div>
    )
}
export default Gallery;
import React from 'react';
import { useParams } from 'react-router-dom';
import Photo from "./photo"

const Gallery = ({   pics,
                     searchInput,
                     updateSearch,
                     loading
                 }) =>{

    let {item} = useParams();
    if (item !== undefined) {
        updateSearch(item)
    } else {
        updateSearch(searchInput);
    }
    return (
        <div className="photo-container">
            <h2>{searchInput} Results</h2>
            { (pics.length !== 0) ?
            <ul>
                { (loading) ?
                    <div>
                    <p className="center-div">loading... for "{searchInput}" </p>
                    </div> :
                    pics.map((x) => {
                        return (
                            <Photo
                                key={Math.floor(Math.random()*10000)}
                                id={x.id}
                                server={x.server}
                                secret={x.secret}
                            />)})
                }
            </ul> :
                <p className="center-div">No matches found for  "{searchInput}" </p>

            }
        </div>
    )
}
export default Gallery;
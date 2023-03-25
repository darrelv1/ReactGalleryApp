import React , {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Photo from "./photo"

const Gallery = ({   pics,
                     searchInput,
                     updateSearch,
                     loading
                 }) =>{

    let {item} = useParams();


    useEffect(()=>{
        console.log("this is in the useEffect")
          if (item !== undefined) {
      // console.log(item)
         updateSearch(item)
    } else {
        // console.log("would of been here")
        updateSearch(searchInput);
    }
        }, [searchInput, item])


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
                                key={x.id}
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
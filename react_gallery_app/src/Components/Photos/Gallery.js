import React, {useEffect,useState} from 'react';
import {APIKEY} from "../../config";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Photo from "./photo"


const Gallery = ({
                     pics,
                     updatePics,
                     searchInput,
                     updateSearch
                 }) => {

    const [re, setre] = useState([]);
    let {item} = useParams();
    const flickrURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${searchInput}&per_page=24&format=json&nojsoncallback=1`

    const UpdatingRender = () => {
        setre(() => {
                return (
                    pics.map((x) => {
                        return (
                            <Photo
                                id={x.id}
                                server={x.server}
                                secret={x.secret}
                            />
                        )
                    }))
            }
        )
    }

    useEffect(() => {
        let isSubscribed = true;
        if (item !== undefined) {
            updateSearch(item)
        } else {
            updateSearch(searchInput)
        }
        axios.get(flickrURL,)
            .then((response) => {
                if (isSubscribed) {
                    const PicData = response.data.photos.photo;
                    updatePics(PicData);
                }
            })
        UpdatingRender()
        return () => {
            isSubscribed = false
        }
    }, [searchInput])


    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {re}
            </ul>
        </div>
    )
}
export default Gallery;
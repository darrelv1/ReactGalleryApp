import React, {useEffect,useState, useRef} from 'react';
import {APIKEY} from "../../config";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Photo from "./photo"


const Gallery = ({pics, updatePics, searchInput, updateSearch}) => {

    const [re, setre] = useState([]);
    let gallery = <h1>Nothing</h1>;
    const button = useRef();
    let {item} = useParams();

    const flickrURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${searchInput}&per_page=24&format=json&nojsoncallback=1`
    let PicData;
    let pictures;

//Alternative was to render
    const updateGallery = () => {
        gallery = pics.map((x) => {
                return (
                    <Photo
                        id={x.id}
                        server={x.server}
                        serect={x.serect}
                    />
                )
            }
        )

    }

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
                    PicData = response.data.photos.photo;
                    updatePics(PicData);
                    pictures = PicData;
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
            <button ref={ button}>hello </button>
            <ul>
                {re}
                {/*<Photos PicData={ pics}/>*/}
                {/*{pics.length > 0 ? <Photos PicData={pics}/> : <h1>Ain't nothing here for ya</h1> }*/}
                {/*{pics.length > 0 ? <Photos PicData={pictures}/> : <h1>Ain't nothing here for ya</h1> }*/}

            </ul>
        </div>
        
    )
    
}
export default Gallery;
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
        console.log(gallery)
        console.log()
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
        }
        console.log(searchInput)
        axios.get(flickrURL,)
            .then((response) => {
                if (isSubscribed) {
                    PicData = response.data.photos.photo;
                    updatePics(PicData);
                    pictures = PicData;
                    console.log(PicData)
                    // console.log(PicData)
                    // console.log(`useState pics:  ${pics}`)
                    // console.log(`PICS ${Object.keys(pics[0])}`)
                    // console.log(`pics TYPE${pics.constructor.name}`)
                    // console.log(`useState pics (Object Keys):  ${Object.keys(pics)}`)
                }
                })
        console.log(flickrURL)
        UpdatingRender()

        console.log(re)
        return () => { isSubscribed = false}
    }, [searchInput, ])


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
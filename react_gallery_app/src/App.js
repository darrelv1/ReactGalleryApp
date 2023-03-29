import './App.css';
import SearchBar from './Components/SearchBar'
import Gallery from './Components/Photos/Gallery'
import NavSelection from './Components/NavSelection'
import NotFound from './Components/NotFound'
import {useState, useEffect, useRef} from 'react'
import React from 'react'
import {Route, Routes, Navigation} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "./config";

function App() {

    const [pics, updatePics] = useState([])
    const [search, updateSearch] = useState("cat")
    const [loading, setLoading ] = useState(true)

      const flickrURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      useEffect(() => {
        let isSubscribed = true;
        setLoading(true);

        axios.get(flickrURL,)
            .then((response) => {
                if (isSubscribed) {
                    const PicData = response.data.photos.photo;
                    updatePics(()=>{
                        setLoading(false);
                        return PicData});
                    return PicData
                }
            })

        return () => {
            isSubscribed = false

        }
    }, [search])

    return (
        <div className="container">
            <SearchBar updateSearch={updateSearch}/>
            <NavSelection/>
            <Routes>
                <Route path="/" element={
                    <Gallery
                        pics={pics}
                        updateSearch={updateSearch}
                        searchInput={search}
                    />
                }/>
                <Route path="search/:item" element={
                    <Gallery
                        pics={pics}
                        updateSearch={updateSearch}
                        searchInput={search}
                        loading={loading}
                    />
                }/>
                <Route path="cats" element={
                    <Gallery
                        pics={pics}
                        updateSearch={updateSearch}
                        searchInput='cats'
                    />
                }/>
                <Route path="dogs" element={
                    <Gallery
                        pics={pics}
                        updateSearch={updateSearch}
                        searchInput='dogs'
                    />
                }/>
                <Route path="computers" element={
                    <Gallery
                        pics={pics}
                        updateSearch={updateSearch}
                        searchInput='computers'
                    />
                }/>
                <Route path="*" element={
                    <NotFound/>
                }/>
            </Routes>


        </div>
    );
}


export default App;

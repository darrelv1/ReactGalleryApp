import './App.css';
import SearchBar from './Components/SearchBar'
import Gallery from './Components/Photos/Gallery'
import NavSelection from './Components/NavSelection'
import {useState, useEffect, useRef} from 'react'
import React from 'react'
import {Route, Routes, Navigation} from "react-router-dom";


function App() {

    const [pics, updatePics] = useState([])
    const [search, updateSearch] = useState("cat")

    return (
        <div>
            <SearchBar updateSearch={updateSearch}/>
            <NavSelection/>
            <Routes>
                <Route path="/" element={
                    <Gallery
                        pics={pics}
                        updateSearch={updateSearch}
                        updatePics={updatePics}
                        searchInput={search}
                    />
                }/>
                <Route path="search/:item" element={
                <Gallery
                    pics={pics}
                    updateSearch={updateSearch}
                    updatePics={updatePics}
                    searchInput={search}
                />
            }/>
                <Route path="cats" element={
                    <Gallery
                        pics={pics}
                        updateSearch={updateSearch}
                        updatePics={updatePics}
                        searchInput='cats'
                    />
                }/>
                <Route path="dogs" element={
                    <Gallery
                        pics={pics}
                        updateSearch={updateSearch}
                        updatePics={updatePics}
                        searchInput='dogs'
                    />
                }/>
                <Route path="computers" element={
                    <Gallery
                        pics={pics}
                        updateSearch={updateSearch}
                        updatePics={updatePics}
                        searchInput='computers'
                    />
                }/>
            </Routes>

            />
        </div>
    );
}


export default App;

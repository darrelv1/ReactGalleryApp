import './App.css';
import SearchBar from './Components/SearchBar'
import Gallery from './Components/Photos/Gallery'
import NavSelection from './Components/NavSelection'

import {useState ,useEffect, useRef} from 'react'



import React from 'react'
import { Route, Routes, Navigation } from "react-router-dom";



function App() {

    const [pics, updatePics] = useState(
        [
            // {
            //     farm: 66,
            //     id: "52743739276",
            //     secret: "44c2b8ea3e",
            //     server: "65535",
            //     title: "46th Annual Maple Syrup Festival"
            // }
        ]
    )
    const [search, updateSearch] = useState("cat")


  return (
      <div>
          <SearchBar  updateSearch={ updateSearch} />
          <NavSelection />
          <Routes>
              <Route path="/" element={<h1>HELLO</h1>}/>
              <Route path="search/:item" element={<Gallery pics={pics} updateSearch={ updateSearch} updatePics={updatePics} searchInput={search} />}/>
              <Route path="cat" element={<Gallery/>}/>
              <Route path="dog" element={<Gallery/>}/>
              <Route path="computers" element={<Gallery photos={pics}/>}/>
          </Routes>

          />
      </div>
  );
}


export default App;

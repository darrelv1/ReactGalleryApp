import './App.css';
import SearchBar from './Components/SearchBar'
import Gallery from './Components/Gallery'
import NavSelection from './Components/NavSelection'
import axios from "axios";
import {useState ,useEffect, useRef} from 'react'
import { APIKEY } from './config'


function App() {

    const [pics, updatePics] = useState([])
    const [search, updateSearch] = useState("")

    const flickrURL =`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${search}&per_page=499&format=json&nojsoncallback=1`

    const buttonValue = useRef();

    useEffect(()=> {
        let activeFetch = true;
        axios.get(flickrURL,
        ).then((response) => {
            if (activeFetch) {
                const Picdata = response.data.photos.photo;
                updatePics(Picdata)

            }
        })
            .catch(error => "Error, failed to recieve JSON response from ${}")
        console.log(buttonValue.current.value)
        updateSearch(buttonValue.current.value)
        return ()=> {activeFetch =false}
    }, [ search])


  return (
    <div >
        <SearchBar />
            <input type="type" name="TestingInput"  placeholder="testing" ref={ buttonValue }></input>
        <NavSelection/>

        <Gallery
            photos={pics}
        />
    </div>
  );
}


export default App;

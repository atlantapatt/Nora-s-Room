import ClothesCard from './components/ClothesCard';
import ItemCard from './components/ItemCard';
import Navbar from './components/NavBar';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'

function App() {
  const [clothes, setClothes] = useState([])
  const [category, setCategory] = useState('all')
  const [location, setLocation] = useState('all')
  const [url, setUrl] = useState('')
  const [ratings, setRatings] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/clothes")
    .then((r) => r.json())
    .then((data) => setClothes(data))
  },[])

  
    
  useEffect(() => {
      fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((data) => setRatings(data))
    },[])

  console.log(clothes)


let clothesLocation = clothes.filter(clothes => {
  if (location == 'all') {
    return clothes
  } else
    return clothes.store_id == location
})

console.log(clothesLocation)

  let clothesCategory = clothesLocation.filter(clothes => {
    if (category == 'all') {
      return clothes
    } else
    return clothes.category == category
  })
  


  const listofClothes = clothesCategory.map((data) => {
    return <ClothesCard data={data} url={url} setUrl={setUrl} ratings={ratings} />
  })

console.log(listofClothes)
  
  return (
        <Router>
          <div className='App'>
          <Navbar setLocation={setLocation}  setCategory={setCategory} />
          
          <Switch>
            <Route exact path='/' element={listofClothes}></Route>
            <Route exact path={url} element={<ItemCard clothes={clothes} url={url} ratings={ratings}/>}></Route>
          </Switch>
          </div>
        </Router>
  );
}

export default App;

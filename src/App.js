import ClothesCard from './components/ClothesCard';
import ItemCard from './components/ItemCard';
import Navbar from './components/NavBar';
import Users from './components/Users';
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
  const [users, setUsers] = useState([
    {
        id: 1,
        username: "harshoutfit"
    }
])
  const [username, setUsername] = useState('')
  const [currentUser, setCurrentUser] = useState('')
console.log(currentUser)
  useEffect(() => {
    fetch("http://localhost:9292/clothes")
    .then((r) => r.json())
    .then((data) => setClothes(data))
  },[])

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then((r) => r.json())
    .then((data) => setUsers(data))
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
    return <ClothesCard users={users} setUsers={users} data={data} url={url} setUrl={setUrl} ratings={ratings} />
  })

console.log(listofClothes)
  
  return (
        <Router>
          <div className='App'>
          <Navbar setLocation={setLocation}  setCategory={setCategory} setUrl={setUrl}/>
          
          <Switch>
            <Route exact path='/' element={listofClothes}></Route>
            <Route exact path={url} element={<ItemCard currentUser={currentUser} users={users} setUsers={setUsers} clothes={clothes} url={url} ratings={ratings}/>}></Route>
            <Route exact path='/users' element={<Users username={username} setUsername={setUsername} users={users} setCurrentUser={setCurrentUser} />}></Route>
          </Switch>
          </div>
        </Router>
  );
}

export default App;

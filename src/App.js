import ClothesCard from './components/ClothesCard';
import Navbar from './components/NavBar';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [clothes, setClothes] = useState([])
  const [category, setCategory] = useState('all')
  

  useEffect(() => {
    fetch("http://localhost:9292/clothes")
    .then((r) => r.json())
    .then((data) => setClothes(data))
  },[])

  console.log(clothes)



  let clothesCategory = clothes.filter(clothes => {
    if (category == 'all') {
      return clothes
    } else
    return clothes.category == category
  })
  


  const listofClothes = clothesCategory.map((data) => {
    return <ClothesCard data={data} />
  })


  
  return (
    <div className="App">
      <Navbar  setCategory={setCategory}/>
      <div className='list_clothes'>
        {listofClothes}
      </div>
    </div>
  );
}

export default App;

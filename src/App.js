import ClothesCard from './components/ClothesCard';
import Navbar from './components/NavBar';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [clothes, setClothes] = useState([])
  const [category, setCategory] = useState('all')
  const [filter, setFilter] = useState('')

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
  console.log(clothesCategory)
  console.log(category)
  // console.log(clothesCategory)
  const listofClothes = clothesCategory.map((data) => {
    return <ClothesCard data={data} />
  })

  console.log(listofClothes)

  
  return (
    <div className="App">
      <Navbar setFilter={setFilter} setCategory={setCategory}/>
      <div className='list_clothes'>
        {listofClothes}
      </div>
    </div>
  );
}

export default App;

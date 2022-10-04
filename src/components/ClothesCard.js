import { useState } from 'react'
import './ClothesCard.css'
import Reviews from './Double Click/Reviews'
import {useNavigate} from "react-router-dom"
function ClothesCard({data, url, setUrl, ratings, users, setUsers}) {
    const [isShown, setIsShown] = useState(false)

    let navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault()
        setIsShown(!isShown)
    }

    function routeChangeClick() {
        setUrl(`/${data.id}`)
        console.log(url)
        let path = url
        navigate(url)
    }
    return(
        <div className="clothes">
            <div className='clothes_card'>
                <img className="clothes_image" src={data.image} onClick={routeChangeClick} ></img>
                <h4 className='item_name'>{data.name}</h4>
                <h5>{data.brand}</h5>
                <p>${data.price}</p>
                <button className='add_cart_button'>Add To Cart</button>
                <button onClick={handleClick} className='review_button'>Read Reviews</button>
                
            </div>
            <div className='reviews'>
                    {isShown ? <Reviews users={users} setUsers={setUsers} data={data} ratings={ratings}/> : null}
            </div>
        </div>
    )
}
export default ClothesCard
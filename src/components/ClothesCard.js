import { useState } from 'react'
import './ClothesCard.css'
import Reviews from './Reviews'
function ClothesCard({data}) {
    const [isShown, setIsShown] = useState(false)

    function handleClick(e) {
        e.preventDefault()
        setIsShown(!isShown)
    }
    return(
        <div className="clothes">
            <div className='clothes_card'>
                <img className="clothes_image" src={data.image} ></img>
                <h4 className='item_name'>{data.name}</h4>
                <h5>{data.brand}</h5>
                <p>${data.price}</p>
                <button className='add_cart_button'>Add To Cart</button>
                <button onClick={handleClick} className='review_button'>Read Reviews</button>
                
            </div>
            <div className='reviews'>
                    {isShown ? <Reviews data={data}/> : null}
            </div>
        </div>
    )
}
export default ClothesCard
import './ClothesCard.css'
function ClothesCard({data}) {
    return(
        <div className="clothes_card">
            <img className="clothes_image" src={data.image} ></img>
            <h4 className='item_name'>{data.name}</h4>
            <p>{data.price}</p>
            <button className='add_cart_button'>Add To Cart</button>
        </div>
    )
}
export default ClothesCard
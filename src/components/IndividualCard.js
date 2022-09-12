function IndividualCard({item}) {
    return(
        <div className="item-div">
                
        <h3 className="item-name">{item.name}</h3>
        <div className="item-info">
            <img className="item-image" src={item.image}></img>
            <div className="item-text">
                <p className="item-brand">{item.brand}</p>
                <p className="item-price">{item.price}</p>
                <select>
                    <option>Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                </select>
                <br></br>
                <button className="add-to-cart">Add To Cart</button>
                <h5>Description</h5>
                <p>{item.description}</p>
            </div>
            <div className="item-other">
                <h5>Care</h5>
                <p>{item.care}</p>
                <h5>Size Info</h5>
                <p>True to size.
XXS=00, XS=0-2, S=4-6, M=8-10, L=12-14, XL=16 (14W)</p>
            </div>
        </div>
    </div>
    )
}

export default IndividualCard
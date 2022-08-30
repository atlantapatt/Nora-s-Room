import {image} from 'src/highwaistjeans.jpg'
function ClothesCard({data}) {
    return(
        <div>
            <img className="image" src='/highwaistjeans.jpg' alt="" ></img>
            <h4>{data.name}</h4>
            <p>{data.price}</p>
        </div>
    )
}
export default ClothesCard
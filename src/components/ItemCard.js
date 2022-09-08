import Reviews from "./Reviews"
import Username from "./Username"
function ItemCard({clothes, url, ratings}) {

    let urlNumber = url.split('').pop()
    console.log(urlNumber)

    let review = ratings.filter((rating) => {
        return rating.clothes_id == urlNumber
    })

    console.log(review)

    let item = clothes.filter((clothes) => {
        return clothes.id == urlNumber
    })
    // console.log(url)
    // console.log(item)
    let mappedItem = item.map((item) => {
        return (
            <div>
                <h3>{item.name}</h3>
                <img src={item.image}></img>
                <p>{item.brand}</p>
                <p>{item.price}</p>
            </div>
        )
    })
    let mappedReview = review.map((review) => {
        return (
            <div>
                <Username reviewID={review.user_id} />
                <p>{review.rating}/5</p>
                <p>{review.comment}</p>
            </div>
        )
    })


    return(
        <div>
            {mappedItem}
            {mappedReview}
        </div>
    )
}

export default ItemCard
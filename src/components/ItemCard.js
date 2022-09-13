import IndividualCard from './IndividualCard'
import './ItemCard.css'
import Username from "./Username"
function ItemCard({clothes, url, ratings, users, setUsers, currentUser}) {

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
           <IndividualCard item={item}/>
        )
    })
    let mappedReview = review.map((review) => {
        return (
            <div className="review-div">
                <h5>REVIEWS</h5>
                <Username users={users} setUsers={setUsers} reviewID={review.user_id} />
                <p className="review-rating">{review.rating}/5</p>
                <p className="review-comment">{review.comment}</p>
            </div>
        )
    })


    return(
        <div>
            {mappedItem}
            {mappedReview}
            <form className='user-review'>
                <lable>{currentUser}</lable> <br></br>
                {/* <input type='text'></input> <br></br> */}
                <textarea>Write Review Here...</textarea> <br></br>
                <input type='submit' value='submit'></input>
            </form>
        </div>
    )
}

export default ItemCard
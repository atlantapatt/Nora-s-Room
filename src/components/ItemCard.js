import { useState } from 'react'
import IndividualCard from './IndividualCard'
import Edit from './Edit'
import './ItemCard.css'
import Username from "./Username"
function ItemCard({clothes, url, ratings, users, setUsers, currentUser, setRatings}) {

    const [ratingValue, setRatingValue] = useState('')
    const [currentReview, setCurrentReview] = useState('')
    // const [newReview, setNewReview] = useState('')

    let urlNumber = url.split('').pop()
    console.log(urlNumber)
    console.log(currentReview)

    function submit(e) {
        e.preventDefault() 
        fetch('http://localhost:9292/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating: ratingValue,
                comment: currentReview,
                clothes_id: urlNumber,
                user_id: users.length,
                id: ratings.length+1
            })
        })
        .then((r) => r.json())
        .then((newReview) => setRatings([...ratings, newReview]))
    }
    console.log(ratings)
    // function handleSubmit(e) {
    //     e.preventDefault()        
    //     fetch('http://localhost:9292/users', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             rating: ratingValue,
    //             comment: currentReview,
    //             clothes_id: urlNumber,
    //             user_id: users[users.length-1]
    //         })
    //     })
    //     .then((r) => r.json())
    //     .then((newReview) => setRatings([...ratings, newReview]))
    // }

    

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
    console.log(users.length)
    let mappedReview = review.map((review) => {
        return (
            <div className="review-div">
                <Username users={users} setUsers={setUsers} reviewID={review.user_id} />
                <p className="review-rating">{review.rating}/5</p>
                <p className="review-comment">{review.comment}</p>
                {review.id == ratings.length ? <Edit /> : <p>no hello</p>}
            </div>
        )
    })
console.log(currentUser)

    return(
        <div>
            {mappedItem}
            <h5>REVIEWS</h5>
            {mappedReview}
            <form className='user-review'>
                <lable>{currentUser.username}</lable> <br></br>
                <div className='radio'>
                <lable>1</lable>
                <input onClick={((e) => setRatingValue(e.target.value))} value='1' name='rating' type='radio'></input> 
                <lable>2</lable>
                <input onClick={((e) => setRatingValue(e.target.value))} value='2' name='rating' type='radio'></input>
                <lable>3</lable>
                <input onClick={((e) => setRatingValue(e.target.value))} value='3' name='rating' type='radio'></input>
                <lable>4</lable>
                <input onClick={((e) => setRatingValue(e.target.value))} value='4' name='rating' type='radio'></input>
                <lable>5</lable>
                <input onClick={((e) => setRatingValue(e.target.value))} value='5' name='rating' type='radio'></input><br></br>
                </div>
                <textarea onChange={((e) => setCurrentReview(e.target.value))} placeholder='Write Review Here...'></textarea> <br></br>
                <input onClick={submit} type='submit' value='submit'></input>
            </form>
        </div>
    )
}

export default ItemCard
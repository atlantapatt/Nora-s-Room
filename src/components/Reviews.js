import { useEffect, useState } from "react"
import Username from "./Username"

function Reviews({data, ratings, users, setUsers})  {

    let filteredReviews = ratings.filter((review) => {
        return review.clothes_id == data.id 
    })
      
    let reviews = filteredReviews.map((review) => {
        return (
            <div className="review">
            <Username users={users} setUsers={setUsers} reviewID={review.user_id} />
            <p>{review.rating}/5</p>
            <p>{review.comment}</p>
            </div>
        )
      })

    return(
        <div className="review-div">
        {reviews[0]}
        </div>
    )
}

export default Reviews
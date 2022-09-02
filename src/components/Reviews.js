import { useEffect, useState } from "react"

function Reviews({data})  {
    const [ratings, setRatings] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/reviews")
        .then((r) => r.json())
        .then((data) => setRatings(data))
      },[])

    let filteredReviews = ratings.filter((review) => {
        return review.clothes_id == data.id 
    })
      
    let reviews = filteredReviews.map((review) => {
        return (
            <div>
            <p>{review.rating}/5</p>
            <p>{review.comment}</p>
            </div>
        )
      })

    return(
        <did>
        {reviews}
        </did>
    )
}

export default Reviews
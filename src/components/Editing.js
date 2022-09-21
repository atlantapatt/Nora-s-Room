import { useState } from "react";

function Editing({reviewId, handleUpdateReview, setEditing}) {
    const [value, setValue] = useState('')
    const [comment, setComment] = useState('')
    console.log(reviewId)

    function handleSubmit(e) {
        e.preventDefault()
    fetch(`http://localhost:9292/reviews/${reviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: value,
        comment: comment,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => handleUpdateReview(newReview));
      setEditing(false)
      
  }
    

    return(
        <div>
            <form className='user-review'>
                
                <div className='radio'>
                <lable>1</lable>
                <input onClick={((e) => setValue(e.target.value))} value='1' name='rating' type='radio'></input> 
                <lable>2</lable>
                <input onClick={((e) => setValue(e.target.value))} value='2' name='rating' type='radio'></input>
                <lable>3</lable>
                <input onClick={((e) => setValue(e.target.value))} value='3' name='rating' type='radio'></input>
                <lable>4</lable>
                <input onClick={((e) => setValue(e.target.value))} value='4' name='rating' type='radio'></input>
                <lable>5</lable>
                <input onClick={((e) => setValue(e.target.value))} value='5' name='rating' type='radio'></input><br></br>
                </div>
                <textarea onChange={((e) => setComment(e.target.value))} placeholder='Edit Review Here...'></textarea> <br></br>
                <input onClick={handleSubmit} type='submit' value='submit'></input>
            </form>
        </div>
    )
}

export default Editing
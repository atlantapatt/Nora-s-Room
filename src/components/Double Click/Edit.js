import { useState } from 'react'
import Editing from './Editing'
import './Edit.css'

function Edit({reviewId, handleDeleteReview, handleUpdateReview, reviewComment}) {
    const [editing, setEditing] = useState(false)
    console.log(reviewId)
    function clickEdit() {
        console.log('edit')
        setEditing(true)
    }

    function clickDelete() {
        console.log('delete')
        fetch(`http://localhost:9292/reviews/${reviewId}`, {
            method: "DELETE",
          })
          
            handleDeleteReview(reviewId)
        }

    return(
        <div className="icon-div">
            <i class="fa-solid fa-pen-to-square" onClick={((e) => clickEdit(e))}></i>
            
            <i class="fa-solid fa-trash" onClick={((e) => clickDelete(e))}></i>
            {editing == true ? <Editing setEditing={setEditing} reviewId={reviewId} reviewComment={reviewComment} handleUpdateReview={handleUpdateReview} /> : null}
        </div>
    )
}
export default Edit
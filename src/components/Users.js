import { useEffect } from 'react'
import './User.css'
function Users({users, username, setUsername, setCurrentUser}) {

    function handleSubmit(e) {
        e.preventDefault()        
        fetch('http://localhost:9292/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username
            })
        })
        setCurrentUser(username)
    }

    console.log(username)

    function handleChange(e) {
        e.preventDefault()
        setUsername(e.target.value)
    }

    let mappedUsers = users.map((user) => {
        return (
            <div>
                <p>{user.username}</p>
            </div>
        )
    })

    return(
        <div className="users">
            <div className="list-users">
                <p>Our Contributors</p>
                {mappedUsers}
            </div>
            <div className="join-form">
                <p className='join'>Join Now!</p>
                <div className='form'>
                <form>
                    <div className='left'>
                    <label>First Name:</label> <br></br>
                    <input type='text'></input>
                    <label>Last Name:</label> <br></br>
                    <input type='text'></input>
                    <label>Favorite Categories:</label> <br></br>
                    <input type='checkbox'></input>
                    <label>Dresses</label> <br></br>
                    <input type='checkbox'></input>
                    <label>Bottoms</label> <br></br>
                    <input type='checkbox'></input>
                    <label>Tops</label> <br></br>
                    <input type='checkbox'></input>
                    <label>Jackets</label> <br></br>
                    
                    </div>

                    <div className='right'>
                     <lable>Email:</lable>
                     <input type='text'></input> <br></br>
                     <label>Username:</label>
                     <input type='text' onChange={handleChange}></input>
                     <label>Size:</label> <br></br>
                    <input type='checkbox'></input>
                    <label>Small</label> <br></br>
                    <input type='checkbox'></input>
                    <label>Medium</label> <br></br>
                    <input type='checkbox'></input>
                    <label>Large</label> <br></br>
                    <input type='checkbox'></input>
                    <label>Extra Large</label> <br></br>
                    </div>
                    <div className='button'>
                        <button className='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Users
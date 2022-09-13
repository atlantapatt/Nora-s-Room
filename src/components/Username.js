import { useEffect, useState } from "react"

function Username({reviewID, users, setUsers}) {
    
    


    useEffect(() => {
        fetch('http://localhost:9292/users')
        .then((r) => r.json())
        .then((data) => setUsers(data))
    },[])

   

    let filteredUsername = users.filter((user) => {
        return user.id == reviewID
        // if (user.id == reviewID) {
        //     console.log(user.username)
        //     return user.username
        // }
    })

 console.log(filteredUsername)
    // let username = filteredUsername.username
    let mappedUsername = filteredUsername.map((user) => {
        return (
            <p>{user.username}</p>
        )
    })

    console.log(mappedUsername)


    return(
        <div>
            <p>{mappedUsername}</p>
        </div>
    )
}
export default Username
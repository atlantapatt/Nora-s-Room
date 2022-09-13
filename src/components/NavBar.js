import { useNavigate } from 'react-router-dom'
import './NavBar.css'
function Navbar({setCategory, setLocation, setUrl}) {

    let navigate = useNavigate()

    function routeHome() {
        navigate('/')
        setUrl('')
    }

    function routeUsers() {
        navigate('/users')
    }
    
    return(
        <div className="Navbar">
            <div className='top_nav'>
                <div className='title' onClick={routeHome} >
                    <p>NORA'S ROOM</p>
                </div>
            </div>
            <div className='bottom_nav'>
                <i id="icon" className="fa-solid fa-cart-shopping" ></i>
                <i id='icon-2' class="fa-solid fa-users" onClick={routeUsers}></i>
                <div className='filters'>
        
                    <select defaultValue='all' id='filters' className='category' onChange={(e) => setCategory(e.target.value)}>
                        <option value='all'>Category....</option>
                        <option>Bottoms</option>
                        <option>Jackets</option>
                        <option>Tops</option>
                        <option>Dresses</option>
                    </select>
                    <select id='filters' onChange={(e) => setLocation(e.target.value)}>
                        <option value="all">Store Location...</option>
                        <option value='1'>Los Angeles</option>
                        <option value='2'>New York</option>
                        <option value='3'>Seattle</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import './NavBar.css'
function Navbar({setCategory, setFilter}) {

    return(
        <div className="Navbar">
            <div className='top_nav'>
                <div className='title' >
                    NORA'SROOM
                </div>
            </div>
            <div className='bottom_nav'>
                <i id="icon" className="fa-solid fa-cart-shopping"></i>
                <div className='filters'>
        
                    <select defaultValue='all' id='filters' className='category' onChange={(e) => setCategory(e.target.value)}>
                        <option value='all'>Category....</option>
                        <option>Bottoms</option>
                        <option>Jackets</option>
                        <option>Tops</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Navbar
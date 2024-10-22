import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import '../../style/navbar.scss'

function Navbar() {

    const [nab, setNab] = useState(false)

    const activebar = {
        color: "#D3B5A3",
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 20 ? setNab(true) : setNab(false)
        })
    }, [])
    return (
        <nav className={`container ${nab ? 'navb' : ''}`} style={{}} >

            <div className='icon'>
              <img src=" "></img>
            </div>
            <ul className='menu'>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/'>HOME  </NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/about'> SEVRICE </NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/gt'> INTRODUCE</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/room'>ROOM SPACE</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activebar : {}} to='/contact'>CONTACT</NavLink></li>
            </ul>
            <div className="search">
                <input className="ip" type="text" />
                <SearchIcon className="btn-search"></SearchIcon>
            </div>

        </nav >
    )
}



export default Navbar;
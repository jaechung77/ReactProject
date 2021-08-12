import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class Navbar extends React.Component {

    state = {clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">NETPLIX</h1>
                <div className="menu-icon" onClick = {this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li><Link className="nav-links" to="/">Home</Link></li>
                        <li><Link className="nav-links" to="/tvshows">TV Shows</Link></li>
                        <li><Link className="nav-links" to="/movies">Movies</Link></li>
                        <li><Link className="nav-links" to="/mylist">My List</Link></li>  
                    </ul>
                </div>    
            </nav>
        )
    }        
}

export default Navbar
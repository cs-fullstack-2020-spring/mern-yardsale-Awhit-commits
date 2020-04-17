import { Link } from 'react-router-dom'

import React, { Component } from 'react'

export default class Navbar extends Component {
    
    render() {
        return (
            <div>
                 <nav className ="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className=" navbar-brand">WeBuy</Link>
                <div className ="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className ="nav-link">Items</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Add A New Item</Link>
                        </li>

                        
                    </ul>
                </div>

            </nav>
                
            </div>
        )
    }
}

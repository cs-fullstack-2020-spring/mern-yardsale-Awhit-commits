import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import ItemList from './ItemList'
import ItemForm from './ItemForm'
import DisplayItem from './DisplayItem'
export default class AppContainer extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <br/>
                    <Route path="/" exact component={ItemList}/>
                    <Route path="/create" component={ItemForm}/>
                    <Route path="/info/:id" component={DisplayItem}/>

                    
                </Router>
            </div>
        )
    }
}

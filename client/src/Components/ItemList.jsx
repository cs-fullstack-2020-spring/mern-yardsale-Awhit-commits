import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ItemList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            itemArray:[]
             
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData = async() => {
        const response = await fetch('/api');
        console.log(response);
        const json = await response.json();
        console.log(this.state);
        console.table(json);
        this.setState({itemArray : json});
    }
        
    
    render() {
        return (
            <div>
                <h1>Items for sale</h1>
                {this.state.itemArray.map((items,index)=>{
                    return <div key ={items._id}>
                        <Link to ={`/info/${items._id}`} id = {items._id}>{items.itemName}</Link>
                        <br/>${items.itemPrice}
                        <hr/>
                    </div>
                })}
            </div>
        )
    }
}

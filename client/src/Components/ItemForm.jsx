import React, { Component } from 'react'


export default class ItemForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            itemName:"",
            itemDesc:"",
            itemPrice:0,
            itemArray:[],
             
        }
    }
    
    handleChange = (event)=>{
        if (event.target.name ==="Name"){
            this.setState({itemName:event.target.value})
        }
        if(event.target.name ==="Description"){
            this.setState({itemDesc:event.target.value})
        }
        if(event.target.name ==="Price"){
            this.setState({itemPrice:event.target.value})
        }
    }

    handleSubmission = async (event) => {
        event.preventDefault();
        
        let response = await fetch('/api', {
            method : "POST",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({itemName:this.state.itemName,
            itemDesc:this.state.itemDesc,
        itemPrice:this.state.itemPrice})
        });
        let json = await response.json();
        console.table(json);
        window.location='/'
    }
    render() {
        return (
            <div>
                <h1>Create a new Item</h1>
                <div>

                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <div>
                            <input type="text" placeholder ="Name" value = {this.state.itemName} name="Name" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Description </label>
                            <div>
                            <input type="text" name="Description" value = {this.state.itemDesc} placeholder="Description" onChange={this.handleChange} id=""/>
                            </div>
                        </div>

                        <div className = "form-group">
                            <label htmlFor="">Price</label>
                            <div>
                            <input type="number" name="Price" id="" value={this.state.itemPrice} onChange={this.handleChange} placeholder="Price"/>
                            </div>

                        </div>
                        <div>
                            <input type="button" value="Add a New Item" className = "btn btn-secondary" onClick = {this.handleSubmission}/>
                        </div>


                        

                    </form>
                    

                    </div>
            </div>
        )
    }
}


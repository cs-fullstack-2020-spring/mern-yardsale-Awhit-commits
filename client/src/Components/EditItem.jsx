import React, { Component } from 'react'

export default class EditItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            itemName:"",
            itemDesc:"",
            itemPrice:0,
            itemArray:[],
             
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData = async()=>{
        // alert('Hey!')
        console.log(this.props.match.params.id);
        let response = await fetch(`/api/${this.props.match.params.id}`);
        // console.log(response);

        // this.setState({})
        const json = await response.json()
        // console.table(json);
        // console.log(response.data.itemName);
        this.setState({itemArray:json})
        this.setState({itemName:this.state.itemArray.itemName,itemDesc:this.state.itemArray.itemDesc,itemPrice:this.state.itemArray.itemPrice})
        console.log(this.state);
        // console.log(this.state.itemArray.itemName);
        // this.state.itemArray.push(json)
        // this.setState({itemName:response.data.itemName})
        // console.log(this.state);
        // this.setState({itemArray:this.state.itemArray})
        // console.log(this.state.itemArray);
        // console.log(this.state.itemArray[0].itemName);

        
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

    handleSubmission =  (event) => {
        event.preventDefault();
        
        fetch(`/api/${this.props.match.params.id}`, {
            method : "PUT",
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({itemName:this.state.itemName,
            itemDesc:this.state.itemDesc,
        itemPrice:this.state.itemPrice})
        });
        // let json = response.json();
        // console.table(json);
        window.location='/'
    }
    render() {
        return (
            <div>
                <h1>Edit Item</h1>
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
                            <input type="button" value="Update!" className = "btn btn-secondary" onClick = {this.handleSubmission}/>
                        </div>


                        

                    </form>
                    

                    </div>
            </div>
        )
    }
}

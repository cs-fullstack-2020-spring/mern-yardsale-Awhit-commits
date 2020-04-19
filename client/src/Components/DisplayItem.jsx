import React, { Component } from 'react'
// import EditItem from './EditItem'
import { Link } from 'react-router-dom'


export default class DisplayItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            itemArray:[]
             
        }
    }
    
    componentDidMount(){
        this.loadData()
    //     console.log(this.props.match.params.id);
    //     let response = fetch(`/api/${this.props.match.params.id}`);
    //     console.log(response);

    //     this.setState({})
    //     const json = response.json()
    //     console.table(json);
    //     console.log(this.state);
    //     this.state.itemArray.push(json)
    //     this.setState({itemArray:json})
    //     console.log(this.state);
    //     console.log(this.state.itemArray);
    }
    loadData = async()=>{
        console.log(this.props.match.params.id);
        let response = await fetch(`/api/${this.props.match.params.id}`);
        console.log(response);

        // this.setState({})
        const json = await response.json()
        // console.table(json);
        // console.log(response.data.itemName);
        this.setState({itemArray:json})
        console.log(this.state);
        console.log(this.state.itemArray.itemName);
        // this.state.itemArray.push(json)
        // this.setState({itemName:response.data.itemName})
        // console.log(this.state);
        // this.setState({itemArray:this.state.itemArray})
        // console.log(this.state.itemArray);
        // console.log(this.state.itemArray[0].itemName);

        
    }
    deleteItem = (id,event)=>{
        // event.preventDefault();
        // window.confirm(`Do you want to delete this item?`)
        // console.log(window.confirm);
        // if(window.confirm ==true){
        //     id = this.props.match.params.id
        //     fetch(`/api/${id}`,{
        //         method:'delete'
        //     })
        //     // const json = response.json();
        //     // console.log(json);
        //     // console.log(`json deleted`);
        //     window.location='/'
        //     alert(`Item Deleted`)

        // }
        // else{
        //     // window.location =`/info/${this.props.match.params.id}`
        // }

        id = this.props.match.params.id
        fetch(`/api/${id}`,{
            method:'delete'
        })
        // const json = response.json();
        // console.log(json);
        // console.log(`json deleted`);
        window.location='/'
        alert(`Item Deleted`)


    }
    editItem =()=>{
        // window.location =`/edit/${this.props.match.params.id}`
    }
    render() {
        return (
            <div>
                <h1>Item Information</h1>
                <div>
                    <div>
                   <p> Item Name: {this.state.itemArray.itemName}</p>
                   <p>Item Description: {this.state.itemArray.itemDesc}</p>
                   <p>Item Price: {this.state.itemArray.itemPrice}</p>
                   </div>
                   <div>
                   <Link to={`/edit/${this.props.match.params.id}`}><input type="button" value="Edit Item" className="btn btn-info" onClick = {this.editItem}/></Link>
                     <input type="button" value="Delete Item" className="btn btn-danger" onClick = {this.deleteItem}/>
                   </div>
                </div>

                
              
                   
            
                
            
            </div>
        )
    

}}
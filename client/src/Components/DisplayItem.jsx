import React, { Component } from 'react'

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
        console.table(json);
        console.log(this.state);
        this.state.itemArray.push(json)
        this.setState({itemArray:json})
        console.log(this.state);
        console.log(this.state.itemArray);

        
    }
    render() {
        return (
            <div>
                <h1>Display An Item Info</h1>
                {/* {this.state.itemArray.map((item,index)=>{
                    return <div key = {index}>
                        {item.itemName}
                    </div>
                })} */}
            
            </div>
        )
    

}}
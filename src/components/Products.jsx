import axios from 'axios';
import React, { Component } from 'react'
import Card from './Card';


export default class Products extends Component {
    state={
        products:[]
    }

    
    componentDidMount(){
  
        console.log('component did mount');
        
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            console.log(response.data);
            this.setState({
                products:response.data
            })
        })
    }

    render() {
        console.log('render method');
        return (
            <div className='container'>
                <div className="row">
                {
                   this.state.products.map((product)=>(

                    <Card key={product.id} productData={product} message='hello' />

                   )) 
                }
                </div>
            </div>
        )
    }
}

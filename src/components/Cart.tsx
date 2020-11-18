import React, { Component } from 'react';
import { connect } from "react-redux";

import * as MyTypes from "MyTypes";



interface CartState {
  totalcost:number,
  itemcost:number,
  itemtax:number,
  itemship:number
  }
  
  interface CartProps {   
    data: [{
        id: number,
        sku: number,
        title: string,
        description: string,        
        price: number,
        pages:number,
        isFreeShipping: boolean,
        author:string,
        tax:number,
        shipping:number,
        count:number
    }];
    cartItems:any,
    cartItemList:any,
    history:any,


  }
  
class Cart extends Component<CartProps,CartState> {
  state={
    totalcost:0,
    itemcost:0,
    itemtax:0,
    itemship:0
  }

  async componentDidMount(){
    if(this.props.cartItemList && this.props.cartItemList.length > 0){
      let cost = 0;
      let itemcost = 0;
      let itemtax = 0;
      let itemship= 0;
      {this.props.cartItemList.map((cartItem:any) => 

        (itemcost = itemcost + cartItem.price * cartItem.count,
        itemtax = itemtax + cartItem.tax * cartItem.count,
        itemship = itemship + cartItem.shipping * cartItem.count,

     
      cost = cost + cartItem.price * cartItem.count + 
      cartItem.tax * cartItem.count
            + cartItem.shipping * cartItem.count)
     
      )}
     await this.setState({totalcost:cost, itemcost,itemtax,itemship})
    }
  }

  handleChange = () => {

  }
  render() {
    
    return (
     
   <React.Fragment>
      <div>
          <div style={{width:"50%", float:"left", margin:"20px"}}>
          <h1> Shipping Address</h1>
          <label> Name</label>
          <input type="text" name="name" onChange={this.handleChange} className="textField" />
          <br/>
          <label> Address</label>
          <input type="text" name="name" onChange={this.handleChange} className="textField" />
          <br/>
          <label> Phone Number</label>
          <input type="text" name="name" onChange={this.handleChange} className="textField" />
          <br/>
          <label> Pincode</label>
          <input type="text" name="name" onChange={this.handleChange} className="textField" />
          <br/>
          <div className="buttonContainer">
          <button style={{padding:"10px", marginRight:"20px"}}>Save Address </button>
          <button style={{padding:"10px", marginRight:"20px"}}>Edit Address </button>
          </div>
          
          </div>

      {this.props.cartItemList && this.props.cartItemList.length > 0 ?
        
           <div style={{width:"40%", float:"left"}}>
           <h1> Shopping Bag</h1>
          {/* <p> {cartItem.title}</p> */}
          {this.props.cartItemList.map((cartItem:any) => 
          <p> {cartItem.description}</p>
          )}
          <br/>

          </div>
          : <div style={{width:"40%", float:"left"}}>
          <h1> Shopping Bag</h1> 
          <p> No Items Added to Cart </p>
          </div>
          }

      </div>
        <br/>
        
        
      <div style={{width:"40%",marginTop:"350px", marginLeft:"700px"}}>
      <h1> Payment Info: CREDIT CARD </h1>
     
      <p> Item Price: {this.state.itemcost} </p>
      <p> Tax Saving: {this.state.itemtax} </p>
      <p> Shipping charge: {this.state.itemship}  </p>
      
      
      
    
     <p> Total : {this.state.totalcost}  </p> 
      <button style={{padding:"10px", marginRight:"20px"}}> Checkout </button>
      <button style={{padding:"10px", marginRight:"20px"}}> Cancel</button>
      </div> 
      
   </React.Fragment>
  
 
    );
  }
}
const mapStateToProps = (state: MyTypes.ReducerState)  => ({ cartItems : state.data.cartItems,
  cartItemList:state.data.cartItemList
});




 

export default connect(mapStateToProps, null )(Cart);



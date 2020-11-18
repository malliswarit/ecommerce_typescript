import React, { Component } from 'react';
import { connect } from "react-redux";

import * as MyTypes from "MyTypes";



interface MyOrdersState {
    data: any;
  
  }
  
  interface MyOrdersProps {   
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

class MyOrders extends Component<MyOrdersProps,MyOrdersState> {
  render() {
    
    return (

        <React.Fragment>
       {this.props.cartItemList && this.props.cartItemList.length > 0 ?
     this.props.cartItemList.map((cartItem:any) => 
     <div className="ordersummary">
  
     <React.Fragment>
         <div className="orderdetails" >
         <h5 style={{display:"inline-block"}}> Order Placed : 14th Nov 2019</h5>
         <span>
         <h5 style={{float:"right"}}> Status: Delivered</h5>
         </span>
         
         </div>
         <div className="selectedimage">
        <img src={`images/${cartItem.sku}.jpg`} 
className= "imageClass"  alt="book" /> 
        </div>

         <div className="selectedbook">
         <p> Book Price : {cartItem.price}</p>
   <p> Author Name : {cartItem.author}</p>
   <p> Page Count:{cartItem.pages} </p>
        </div>
        </React.Fragment>
        </div>
     ) : 
     
     
     <React.Fragment>
               <div className="ordersummary">
         <div className="orderdetails" >
         <h5 style={{display:"inline-block"}}> Order Placed : 14th Nov 2019</h5>
         <span>
         <h5 style={{float:"right"}}> Status: Delivered</h5>
         </span>
         
         </div>
         <div className="selectedimage">
        <img src={`images/static.jpg`}
className="imageClass"  alt="book" /> 
        </div>

         <div className="selectedbook">
         <p> Book Price : 200</p>
   <p> Author Name : "Stephen"</p>
   <p> Page Count: 100 </p>
        </div>
        </div>
        </React.Fragment>
}
     

      
     </React.Fragment>
  
 
    );
  }
}

const mapStateToProps = (state: MyTypes.ReducerState) => {
  return {
    cartItems : state.data.cartItems,
    cartItemList:state.data.cartItemList
  };
};

      
 export default connect(mapStateToProps, null )(MyOrders);


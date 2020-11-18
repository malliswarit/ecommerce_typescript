import React, { Component } from 'react';
import { connect } from "react-redux";


import { bindActionCreators } from "redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "./actions";


interface BookDetailsState {
  data: any;

}

interface BookDetailsProps {   
  cartItemList: [{
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
  history:any, 
  bookInfo:any,
  getcartItemsList: (book:any) => any;

}



class BookDetails extends Component<BookDetailsProps, BookDetailsState> {

  constructor(props:BookDetailsProps){
    super(props)
   
 
}

  cartitemsList =async(e:any,book:any) => {
    await this.props.getcartItemsList(book)   

  }

  buyNow = async(e:any,book:any) => {
    console.log(book)
    await this.props.getcartItemsList( book)
    await this.props.history.push("/mycarts")
}
  render() {

   
    return (
        <React.Fragment>         
 
      
        <div style={{width:"30%", float:"left"}}>
     
        <img src={`images/${this.props.bookInfo.sku}.jpg`} 
className= "imageClassfull"  alt="book" /> 
        </div>

          <div style={{width:"60%", marginTop:"50px"}}>
   <p> Book Price : {this.props.bookInfo.price}</p>
   <p> Author Name : {this.props.bookInfo.author}</p>
   <p> Page Count : {this.props.bookInfo.pages}</p>
   <div style={{display:"inline"}}>
   <button style={{margin:"5px"}} 
   onClick={(e) => this.cartitemsList(e,this.props.bookInfo)}> Add to Cart</button>
   <button style={{margin:"5px"}}   onClick={(e) => this.buyNow(e,this.props.bookInfo)}> Buy Now </button>
   </div>
        </div>
        

<br/>


<div style={{width:"60%", marginTop:"250px", marginLeft:"500px"}} >
<p>
The book description goes most prominently on the back cover, and the top of your Amazon page (below the price and above the book reviews). It’s crucial it be compelling, because readers make buying decisions from the book description.

In this guide, I’ll walk you through how to write a book description, provide you a template, and include good and bad book description examples.
</p>
</div>
        </React.Fragment>

    );
  }
}

const mapStateToProps = (state: MyTypes.ReducerState) => {
  return {
    bookInfo : state.data.bookSelected,
    cartItemList:state.data.cartItemList
  };
};

const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => bindActionCreators({
 
  getcartItemsList: (book) => dispatch({ type: actionTypes.CART_ITEMS_LIST, payload: book })
},dispatch);


 

export default connect(mapStateToProps, mapDispatchToProps )(BookDetails);



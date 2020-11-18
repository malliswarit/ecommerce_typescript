import * as React from "react";
import { requestApiData, selectedBook, getcartItemsList } from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "./actions";


interface HomePageState {
    data: any;
  
  }
  
  interface HomePageProps {   
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
    history:any,
    requestApiData: () => any;
    selectedBook:(book:any) => any;
    getcartItemsList: (book:any) => any;

  }


class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props:HomePageProps) {
        super(props);
        this.state = {
            data: []
          };
    }

  
     
    

    bookDetails = async (e:any,book:any) => {
        console.log(book)

    await this.props.selectedBook(book)

     this.props.history.push("/bookdetails")
    }

    myOrders = () => {
        this.props.history.push("/myorders")  
    }

    buyNow = async(e:any,book:any) => {
        console.log(book)
        await this.props.getcartItemsList( book)
        await this.props.history.push("/mycarts")
    }

    async componentWillMount(){
    await this.props.requestApiData();
    console.log(this.props.data)
    }

    async componentWillReceiveProps(nextProps:HomePageProps){
        console.log(nextProps.data)
        if(nextProps.data){
           await  this.setState({data:nextProps.data})
        }
    }

  render() {
   const {data} = this.state;
    
    return  data.length ? (
        <React.Fragment>
       
            <div className="dashlet-container">
            {this.state.data.map((book:any) => 
<div className="dashlet-value" key={book.id}  >

 <img src= {`images/${book.sku}.jpg`}  
className= "imageClass"  alt={book.title} onClick={(e) => this.bookDetails(e,book)}   /> 

<h5 style={{paddingLeft:"30px"}}> {book.title} </h5>
<span style={{paddingLeft:"30px"}}>
<button className="buyButton"  onClick={(e) => this.buyNow(e,book)} > Buy </button>
</span>

</div>)}
            </div>
</React.Fragment>)
: 
<h1>loading...</h1>;
    
  }
}

const mapStateToProps = (state: MyTypes.ReducerState) => {
    return {
        data: state.data.data,
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => bindActionCreators({
    requestApiData: () => dispatch({ type: actionTypes.REQUEST_API_DATA }),
    selectedBook: (book) => dispatch({ type: actionTypes.SELECTED_BOOK, payload: book }),
    getcartItemsList: (book) => dispatch({ type: actionTypes.CART_ITEMS_LIST, payload: book })
  },dispatch);
  



  

export default connect(mapStateToProps, mapDispatchToProps )(HomePage);

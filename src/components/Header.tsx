import React, { Component } from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';

interface HeaderState {
    value: string;
  
  }
  
  interface HeaderProps extends RouteComponentProps {   
 
    history:any,
   

  }

class Header extends Component <HeaderProps,HeaderState> {
    constructor(props:HeaderProps){
        super(props)
        this.state={
            value:""
        }
    }

    homePage = () => {
        this.setState({value:""})
        this.props.history.push("/home") 
    }

    myOrdersPage = () => {      
       this.setState({value:"My Orders"})
        this.props.history.push("/myorders")
    }

    myCartPage = () => {
        this.setState({value:"Cart"})
        this.props.history.push("/mycarts")
    }
  render() {

   
    return (
        <React.Fragment>
               
        <div className="topnav">

        <a>E Commerce Site |   {this.state.value} </a>
        <a  style={{float:"right"}} onClick={this.homePage}>Home</a>
        <a style={{float:"right"}}onClick={this.myOrdersPage}>My Orders</a>
        <a  style={{float:"right"}} onClick={this.myCartPage}>Cart</a>
      </div>
   

      </React.Fragment>  
  
 
    );
  }
}

export default withRouter(Header);

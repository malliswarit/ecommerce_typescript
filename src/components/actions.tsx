import { action } from "typesafe-actions";


export enum actionTypes {
    REQUEST_API_DATA = "REQUEST_API_DATA",
    RECEIVE_API_DATA = "RECEIVE_API_DATA",
    SELECTED_BOOK="SELECTED_BOOK",
    CART_ITEMS="CART_ITEMS",
    CART_ITEMS_LIST="CART_ITEMS_LIST"
  }
  


// export const REQUEST_API_DATA = "REQUEST_API_DATA";
// export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
// export const SELECTED_BOOK ="SELECTED_BOOK";
// export const CART_ITEMS = 'CART_ITEMS';
// export const CART_ITEMS_LIST ="CART_ITEMS_LIST";

export const requestApiData = () => action(actionTypes.REQUEST_API_DATA);
export const receiveApiData = (data:any) => action(actionTypes.RECEIVE_API_DATA, data);
export const selectedBook = (data:any)  => action(actionTypes.SELECTED_BOOK, data);
export const setCartItems = (data:any)  =>  action(actionTypes.CART_ITEMS, data);
export const getcartItemsList = (data:any)  => action(actionTypes.CART_ITEMS_LIST, data)
 
       


import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions";


interface ITodoModel {
  data:any,
  bookSelected:any,
  cartItems:any,
  cartItemList:any
}

export const initialState: ITodoModel = {
  data:[],
  bookSelected:[],
  cartItems:[],
  cartItemList:[]
};




export default (state: ITodoModel = initialState, action: MyTypes.RootAction) => {
  switch (action.type) {
    case actionTypes.RECEIVE_API_DATA:
      return {
        ...state,
        data:action.payload
      };
      case actionTypes.SELECTED_BOOK:
      return {
        ...state,
        bookSelected:action.payload
      };
     
      case actionTypes.CART_ITEMS_LIST:
     
    if(state.cartItemList.length > 0 ){
      const cartItems = state.cartItemList.slice();
        let productAlreadyInCart = false;
      
        cartItems.forEach((cp:any) => {
          if (cp.id === action.payload.id) {
            cp.count += 1;
            console.log(cp.count)
            productAlreadyInCart = true;
          }
        });
      
        if (!productAlreadyInCart) {
          cartItems.push({ ...action.payload, count: 1 });
        }      
      
      
        console.log(cartItems);
        return {
          ...state,
          cartItemList: cartItems
        };
    }

    else{
      return {
        ...state,
        cartItemList:[...state.cartItemList,action.payload]
      };

    }
    
      
      
    
    default:
      return state;
  }
};

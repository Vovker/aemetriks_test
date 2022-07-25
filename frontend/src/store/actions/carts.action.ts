import {
  CARTS_FAILURE,
  CARTS_REQUEST,
  CARTS_SUCCESS
} from "../types/cart.types";
import axios from "axios";
import {Dispatch} from "react";

export function getCarts (): Dispatch<any> {
  return(dispatch: (arg0: { type?: string; payload?: any; }) => void) => {

    dispatch({type: CARTS_REQUEST});

    axios.get('http://localhost:8080/cart').then(response => {

      const {data} = response.data
      if(response.data){
        dispatch({type: CARTS_SUCCESS, payload: data})
      }
    }, (error: any) => {
      dispatch({type: CARTS_FAILURE, payload: error})
    })
  }
}

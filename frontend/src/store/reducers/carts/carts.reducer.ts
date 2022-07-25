import {
  CARTS_REQUEST,
  CARTS_SUCCESS,
} from '../../types/cart.types';
import {CartsAction, CartsState, CartsTyped} from "./carts.typed";

const initialState = {
  carts: [],
  isLoading: false,
}

export const cartsReducer = (
  state: CartsState = initialState,
  action: CartsAction
): CartsState => {
  switch (action.type) {
    case CARTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case CARTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        carts: action.payload.map((cart: CartsTyped) => {
          return {
            ...cart,
            isSelected: false,
          }
        }),
      }
    default:
      return state;
  }
}

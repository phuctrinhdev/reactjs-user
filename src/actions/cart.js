import { ADD_TO_CART } from "constants/action";

export const addToCart = (carts) => {
  return {
    type: ADD_TO_CART,
    payload: carts,
  }
}
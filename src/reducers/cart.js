import { ADD_TO_CART } from "constants/action";

const initialState = {
  list: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const new_list = [...state.list];
      new_list.push(action.payload);

      return {
        ...state,
        list: new_list,
      }
  
    default:
      return state;
  }
}

export default cartReducer;
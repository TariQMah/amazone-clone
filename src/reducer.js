export const initialState = {
  basket: [],
  user: null,
  userLogin: false,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log("Show Me Action: ", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userLogin: action.userLogin,
      };
    case "CHECK_LOGIN":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // Login for adding itemt to basket
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
      break;
    case "REMOVE_FROM_BASKET":
      // Login for Removing item from basket

      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}) as its not in basket`
        );
      }

      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
};

export default reducer;

import ACTIONS from "../actions";

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART:

            const item = action.payload;

            const isItemExist = state.cartItems.find(
                (i) => i.product === item.product
            );

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.product === isItemExist.product ? item : i
                    )
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case ACTIONS.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload)
            }
        case ACTIONS.SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload,
            }
        default:
            return state;
    }
}


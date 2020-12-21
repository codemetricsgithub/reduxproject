import { ADD_TO_CART } from '../constant';

const initialState = {
    cardData: [],
};

export default function cartItems(state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data,
            };
            break;
        default:
            return state;
    }
}      
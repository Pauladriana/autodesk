import { TYPES } from "../actions";

export const initialState = {
  data: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_ITEMS_LIST: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case TYPES.ADD_TO_ITEMS_LIST: {
      return {
        ...state,
        data: [...state.data, { ...action.payload, id: state.data.length + 1 }],
      };
    }
    case TYPES.REMOVE_FROM_ITEM_LIST: {
      let newState = state.data.filter((item) => item.id !== action.payload);
      return {
        ...state,
        data: newState,
      };
    }
    default:
      return state;
  }
}

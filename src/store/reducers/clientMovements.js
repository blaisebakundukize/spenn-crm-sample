import { RECEIVE_CLIENT_MOVEMENTS } from "../actions/clients";

const clientMovements = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CLIENT_MOVEMENTS:
      return {
        ...state,
        ...action.clientMovements,
      };
    default:
      return state;
  }
};

export default clientMovements;

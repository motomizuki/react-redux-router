import * as actionType from '../constants/actionTypes'

export function contract(state = {}, action) {
  switch (action.type) {
    case actionType.SET_CONTRACT:
      return {
        contract: [{"aa": "aa"}]
      };
    default:
      return state;
  }
}

import { BUY_PHARMACY_ITEM } from './pharmacyActions';

const initialState = {
    noOfPharmacy: 10,
  };
  
export function pharmacyReducer(state = initialState, action) {
    switch (action.type) {
      case BUY_PHARMACY_ITEM:
        return {
          ...state,
          noOfPharmacy: state.noOfPharmacy - 1
        };
      default:
        return state;
    }
  }
import {createStore, combineReducers} from 'redux';
import { buyFruit } from './redux/fruit/fruitActions';
import { fruitReducer } from './redux/fruit/fruitReducer';
import { buyPharmacy } from './redux/pharmacy/pharmacyActions';
import { pharmacyReducer } from './redux/pharmacy/pharmacyReducer';

const rootReducer = combineReducers({
  fruit: fruitReducer,
  pharmacy: pharmacyReducer,
});

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(buyFruit("Apple"));
store.dispatch(buyFruit("Banana"));
store.dispatch(buyPharmacy());

unsubscribe();
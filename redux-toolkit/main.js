import { addFruit, buyFruit } from './redux/features/fruit/fruitSlice';
import store from './redux/store';
store.dispatch(buyFruit());
store.dispatch(buyFruit());
store.dispatch(addFruit());
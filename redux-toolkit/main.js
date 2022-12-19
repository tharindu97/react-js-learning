import { addFruit, buyFruit } from './redux/features/fruit/fruitSlice';
import { fetchTodos } from './redux/features/todo/fruitSlice';
import store from './redux/store';
store.dispatch(buyFruit());
store.dispatch(buyFruit());
store.dispatch(addFruit());

store.dispatch(fetchTodos());
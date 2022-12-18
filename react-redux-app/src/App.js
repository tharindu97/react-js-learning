import { Provider } from 'react-redux';
import './App.css';
import FruitSection from './components/FruitSection';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux Application</h1>
        <FruitSection />
      </div>
    </Provider>
  );
}

export default App;

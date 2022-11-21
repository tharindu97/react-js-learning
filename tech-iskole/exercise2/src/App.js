import './App.css';
import Product from './components/Product';

function App() {
  return (
    <>
      <Product name="Banana" price={150} />
      <Product name="Apple" price={550} />
      <Product name="Mango" price={250} />
    </>
  )
}

export default App;

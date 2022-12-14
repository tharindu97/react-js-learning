import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effecting :- " + count);
  }, [count]);
  const handelOnClick = () => {
    setCount(count + 1);
  }

  return (
    <div >
      <div>{count}</div>
      <button onClick={handelOnClick}>+INCREMENT</button>
    </div>
  );
}

export default App;

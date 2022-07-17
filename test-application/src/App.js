import React from 'react';
import './App.css';
import Clock from './components/Clock';
import UserProfile from './components/UserProfile';

function App() {
  // const [title, setTitle] = React.useState();

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setTitle("This is my second value");
  //   }, 5000);
  // }, []);

   const handelOnUpdatedClicked = (message, age) => {

   }

  return (
    <div className="App">
      {/* <UserProfile 
        title= "Panama"
        name="Tharindu Kavishna"
        onUpdatedClicked= {handelOnUpdatedClicked}
      /> */}

      <Clock />
    </div>
  );
}
 
export default App;

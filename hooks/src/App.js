import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
   // Initialize visitorCount state based on localStorage or default to 1
   const initialVisitorCount = Number(localStorage.getItem('visitorCount')) || 1;
   const [visitorCount, setVisitorCount] = useState(initialVisitorCount);

  //life cycle methods are not available in Functional Component, so we use useEffect.
  //all the methods in Class component are added in as useEffect function.(arrow function will execute in all the 3 phases)
  // (similar to componentDidMount in class components).                                                                                                                                                                                                                    
  useEffect(()=>{
    //on component mount
    console.log('Visitor count in useEffect is updated...')
    // Save the updated visitorCount to localStorage whenever it changes
    localStorage.setItem('visitorCount', visitorCount);
    //setVisitorCount(visitorCount+1);
  },[visitorCount])
  //ReactJS implements an observer which observes the changes for vistior count
  //and if visitorCount changes, it automatically calls that function

  const updateVisitorCount=()=>{
    console.log('Visitor count incremented.',{visitorCount});
    setVisitorCount(visitorCount+1);
  }

  return (
    <div className="App">
      <form>
        <input type="button" onClick={updateVisitorCount} value="Update Visitor" /><br />
        <b>You are visitor # </b>{visitorCount}
      </form>
    </div>
  );
}

export default App;

 
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

 
function App(props) {
  const[]=useState();

  var username=prompt("Enter your name");
  if(props.name !=username){
  var today=new Date();
   if(today.getHours()>=props.visitingTime)  //current hour is later than visitingtime then true, print welcome
  {
  return (
    <div className="App">
      <b>Welcome Mr/Ms</b>{props.firstName} &nbsp;&nbsp;
      {props.lastName}
      <input type="text" minLength="10" maxLength="20"/>
      {/* type is attribute;text is value; these properties are called as props in reactjs
      Main use of props is we can mention some defaults in your applicatio n like visitingtime is 100am
      */}
    </div>
  );
  }else{
    return(<div><b>Visit after {props.visitingTime} in your local time</b></div>)
  }
}else return (<div className='App'><b>Hi{props.name}Your account is blocked
Please contact the administartor</b></div>)
}

export default App;
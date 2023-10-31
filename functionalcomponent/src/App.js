import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const[firstName,setFirstName]=useState('Unknown');
  const[lastName,setLastName]=useState('Unknown');
  const[agree,setAgree]=useState(false);
  const [error, setError] = useState('');

const updateFirstName = (event) =>{
  setFirstName(event.target.value);
  validateNames(event.target.value, lastName);
  if (!isValid()) {
    setAgree(false);
}

}

 const updateLastName = (event) =>{
  setLastName(event.target.value);
  validateNames(firstName, event.target.value);
  if (!isValid()) {
    setAgree(false);
}
}

const enableDisable=(event)=>{
  //checked is the property of checkbox.It contains true/false
  setAgree(event.target.checked);
}

const isValid = () => {
  return firstName.length > 5 && lastName.length > 5;
};

const validateNames = (first, last) => {
  if (first.length <= 5 || last.length <= 5) {
    setError('First name and last name should be greater than 5 characters.');
    setAgree(false);
  } else {
    setError('');
  }
};

  return (
    <div>
     <form>
     Enter Your First Name<input type="text" value={firstName} onChange={updateFirstName}/><br/>
     Enter Your Last Name<input type="text" value={lastName} onChange={updateLastName}/><br/>
     {<div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
     <b>Your Name</b> &nbsp; &nbsp;{firstName} &nbsp;&nbsp; {lastName}<br/>
      <input type='checkbox' value={agree} onChange={enableDisable} disabled={!isValid()}/>Agree To Terms and Condtions<br/>  
       <input type="button" value="Save" disabled={!agree || !isValid()} />


     {/* { 
      //Conditonal rendering. A new feature in ReactJS.
      agree?<input type="button" value="Save"/>:<input type="button" value="Save" disabled/>
     } */}
     
     </form>
    </div>
  );
}

export default App;

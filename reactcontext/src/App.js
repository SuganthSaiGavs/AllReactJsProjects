import logo from './logo.svg';
import './App.css';
import UserInfo from './UserInfo';
import { createContext,useState } from 'react';

//Common memory area that is accessed by multiple pages.
export const sharedData = createContext();
function App() {
  const[firstName,setFirstName]=useState('Unknown');
  const[lastName,setLastName] = useState('Unknown');
  const[agree,setAgree]=useState(false);

const updateFirstName=(event)=>{
  setFirstName(event.target.value);
}

const updateLastName=(event)=>{
  setLastName(event.target.value);
}

const updateAgree=(event)=>{
  setAgree(event.target.checked);
}

  return (
    //Mention what data has to be sharedData.
    <div className="App">
          First Name<input type='text' value={firstName} onChange={updateFirstName}/><br/>
          Last Name<input type='text' value={lastName} onChange={updateLastName}/><br/>
          <input type='checkbox' onChange={updateAgree}/>Agree to Terms 
        <sharedData.Provider value={firstName+" "+lastName}>
            {agree?<UserInfo/>:" "}
        </sharedData.Provider>
    </div>
  );
}

export default App;


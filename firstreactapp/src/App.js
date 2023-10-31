import logo from './logo.svg';
//import Name from './MyComponents/Name';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Intenal Style */}
      {/* <style>
        {`
          .internal-style {
            color: green;
          }
          
          .index{
            background-color: blue;
          }
        `}
      </style> */}
      <b className='index'>Index.html</b>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="internal-style">
          <b>Welcome to React JS.</b>
          In ReactJS Single page application
          
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
   
  );
 
}


export default App;

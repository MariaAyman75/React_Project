// import logo from './logo.svg';
import './App.css';
import AppRoute from './routes/routes'
import { useState } from 'react';
import languageContext from './context/languagecontext';


function App() {

   const [language, setLanguage] = useState("en")

  return (
    <div className="App">
    <languageContext.Provider value={{language, setLanguage}}>
   
      <AppRoute/> 
      
     </languageContext.Provider>
      {/* </Header> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

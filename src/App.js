import logo from './logo.svg';

import { BrowserRouter, Routes, Route, Switch} from "react-router-dom";

import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
     <Home />
    </div>
    
  );
}

export default App;
 
//import logo from './logo.svg';
import './App.css';
import './index.css'
import Nav from './components/Nav';
import Login from './components/Login';
import LoginFail from './components/LoginFail';
import Register from './components/Register';
import RegisterFail from './components/RegisterFail';
import Reserve from './components/Reserve';
import Fee from './components/Fee';
import Home from './components/Home';
import Reserve2 from './components/Reserve2';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//npm install react-router-dom@5.2.0
//testBranch

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <div className='App-contents'>
            <Switch>
              <Route path ="/" exact component = {Home} />
              <Route path ="/home" exact component = {Home} />
              <Route path ="/reserve" exact component = {Reserve} />
              <Route path ="/login" exact component = {Login} />
              <Route path ="/login-fail" exact component = {LoginFail} />
              <Route path ="/register" exact component = {Register} />
              <Route path ="/register-fail" exact component = {RegisterFail} />
              <Route path ="/fee" exact component = {Fee} />
              <Route path ="/reserve2" exact component = {Reserve2}/>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;

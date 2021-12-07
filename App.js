
import './App.css';
import{BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Login from'./Pages/Login'
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import './home.css';
import './Login.css';
import './Signup.css';







function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/Signup" exact component={Signup}/>
      <Route path="/Home"exact component={Home}/>

      
    </Switch>
  </Router>
  );
}

export default App;

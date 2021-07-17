import logo from './logo.svg';
import './App.css';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import AuthProvider from './Context/AuthProvider'
// import Main from './MaterialUI/Main';
// import Ioa from './Component/Ioa'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './Component/PrivateRoute';
import Feed from './Component/Feed';

function App() {
  return (
    // <AuthProvider>
    //   {/* <SignUp /> */}
    //   <Login />
    // </AuthProvider>
    // <Main />
    // <Ioa />
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Feed} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

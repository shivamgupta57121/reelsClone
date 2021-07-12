import logo from './logo.svg';
import './App.css';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import AuthProvider from './Context/AuthProvider'
import Main from './MaterialUI/Main';

function App() {
  return (
    <AuthProvider>
      {/* <SignUp /> */}
      <Login />
    </AuthProvider>
    // <Main />
  );
}

export default App;

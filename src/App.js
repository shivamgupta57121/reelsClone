import logo from './logo.svg';
import './App.css';
import SignUp from './Component/SignUp';
import AuthProvider from './Context/AuthProvider'
import Main from './MaterialUI/Main';

function App() {
  return (
    // <AuthProvider>
    //   <SignUp />
    // </AuthProvider>
    <Main />
  );
}

export default App;

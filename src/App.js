import logo from './logo.svg';
import './App.css';
import SignUp from './Component/SignUp';
import AuthProvider from './Context/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <SignUp />
    </AuthProvider>
  );
}

export default App;

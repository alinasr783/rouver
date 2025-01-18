import { Routes, Route } from 'react-router-dom';
import Signup from './page/jsx/signup.jsx';
import Login from './page/jsx/login.jsx';
import Home from './page/jsx/home.jsx';

function App() {
  return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  );
}

export default App;
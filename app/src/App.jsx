import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup'; // استدعاء صفحة تسجيل الدخول

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
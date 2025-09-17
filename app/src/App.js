
import './App.css';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Routes>
       <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/booking" element={<BookingPage />} />
     
    </Routes>
  );
}

export default App;

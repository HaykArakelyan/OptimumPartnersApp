import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Register } from './components/Register.js'; 
import { Login } from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/register' element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default App;

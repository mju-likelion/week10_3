import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';

function App() {
  return ( 
  <Routes>
  <Route path='/' element={<Main />}/>
  </Routes>
  );
}

export default App;

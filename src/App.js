import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import DisplayList from './components/DisplayList';

function App() {
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const getData = (name, slogan) => {
    setName(name);
    setSlogan(slogan);
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Form getData={getData}/>} />
        <Route path='/display' element={<DisplayList name={name} slogan={slogan} />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;

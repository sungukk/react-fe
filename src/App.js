import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './commponents/Header';
import ReducerTest2 from './commponents/ReducerTest2';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <ReducerTest2/>
      </BrowserRouter>
    </div>
  );
}

export default App;

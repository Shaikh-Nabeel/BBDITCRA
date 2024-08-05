import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import { useState } from 'react';

function App() {
  const [like,setLikes] = useState(0);
  
  function increaseLike(){
    setLikes(like + 1);
  }
  return (
    <>
    <Navbar> nabeel </Navbar>
    <button className='px-4 py-4 bg-slate-800 text-white' onClick={increaseLike} >Likes</button>
    <h2>{like}</h2>
    </>
  );
}



export default App;

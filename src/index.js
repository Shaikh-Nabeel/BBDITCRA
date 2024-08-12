import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Top10 from './pages/Top10';
import Trending from './pages/Trending';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"; 
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Watchlist from './pages/Watchlist';
import { Provider } from 'react-redux';
import store from './stores/Store';

const AppLayout = () =>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

const routerDom = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {path: '/', element: <Home />},
      {path: '/top10', element: <Top10 />},
      {path: '/trending', element: <Trending />},
      {path: '/watchlist', element: <Watchlist />},
    ]
  }]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
<Provider store={store}>
<RouterProvider router={routerDom} />
</Provider>);
reportWebVitals();

import React from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div>
      <Header /><br />
      <Body /><br />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react'
import Sidebar from './components/Sidebar';
import './App.css';
import ContentArea from './components/contentArea/ContentArea';

function App() {
  return (
    <div className="App ">
      <Sidebar />
     
      <ContentArea/>
    </div>

  )
}

export default App;


import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';



// AppLayout component
const AppLayout = () => {

  const [searchText, setSeachText] = useState('');

  const handleSearchText = (text) => {
    setSeachText(text)
  }

  return (<>
    <Header search={handleSearchText} />
    <Body searchText={searchText}/>
    <Footer />
  </>)
}

// Render the AppLayout component to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

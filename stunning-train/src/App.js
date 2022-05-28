import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Project from './components/Project';

import './index.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
   <div className='container'>
<Header>
  <Nav>
    </Nav>
</Header>
<AboutMe></AboutMe>
<Project></Project>


<Footer></Footer>
    </div>
  );
}

export default App;

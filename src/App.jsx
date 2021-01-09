import React from 'react';
import ReactDOM from 'react-dom';
import MyCard from "./MainCard.jsx";
import Navbar from "./Navbar.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutCard from './about-card.jsx';
import EducationCard from './education-card.jsx';

function App(){

    return<div class="container">
  <Navbar />
  <div class="row">
    <div class="col-lg">
      <MyCard />
    </div>
    <div class="col-lg about-card">
      <AboutCard />
    </div>
  </div>
</div>
}

export default App;
//import {Form, Button } from 'react-bootstrap';
import '../style/App.css';
import Topnav from './nav';
import Index from './index';
import News from './news/news'
import Aboutme from './aboutme/aboutme'
import JAVAinPortfolio from './Portfolio/JAVA/JAVA'
import WebinPortfolio from './Portfolio/Web/Web'
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Topnav />
      <Route exact path="/" component={Index} />
      <Route exact path="/news" component={News} />
      <Route exact path="/aboutme" component={Aboutme} />
      <Route exact path="/javainportfolio" component={JAVAinPortfolio} />
      <Route exact path="/webinportfolio" component={WebinPortfolio} />
    </div>
  );
}

export default App;

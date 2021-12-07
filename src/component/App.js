//import {Form, Button } from 'react-bootstrap';
import '../style/App.css';
import Topnav from './nav';
import Index from './index';
import Blogs from './blogs/blogs'
import Aboutme from './aboutme/aboutme'
import JAVAinPortfolio from './Portfolio/JAVA/JAVA'
import WebinPortfolio from './Portfolio/Web/Web'
import JAVAinStudynote from './Studynote/JAVA/JAVA'
import WebinStudynote from './Studynote/Web/Web'

import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Topnav />
      <Route exact path="/" component={Index} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/aboutme" component={Aboutme} />
      <Route exact path="/javainportfolio" component={JAVAinPortfolio} />
      <Route exact path="/webinportfolio" component={WebinPortfolio} />
      <Route exact path="/webinstudynote" component={WebinStudynote} />
      <Route exact path="/javainstudynote" component={JAVAinStudynote} />
    </div>
  );
}

export default App;

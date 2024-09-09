
import './App.css';
import Header from "./components/common/header/header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/home/home"
import About from "./components/about/about"
import Blog from './components/blog/blog';
import Coursehome from './components/allcourses/coursehome';
import Contact from "./components/contact/contact"
import Footer from "./components/common/footer/footer"
function App() {
  return (
    <div>
    <Router>
     <Header/>
     <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/courses" exact component={Coursehome}/>
      <Route path="/journal" exact component={Blog}/>
      <Route path="/contact" exact component={Contact}/>
     </Switch>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;

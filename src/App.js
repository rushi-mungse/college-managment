import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import Gallary from './pages/Gallary';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/gallery" exact>
          <Gallary />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

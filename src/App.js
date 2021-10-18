import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import ServicesDetails from './Components/ServicesDetails/ServicesDetails';
import Services from './Components/Home/Services/Services';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/servicesDetails/:name">
            <ServicesDetails></ServicesDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;

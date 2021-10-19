import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import ServicesDetails from './Components/ServicesDetails/ServicesDetails';
// import Services from './Components/Home/Services/Services';
import Login from './Components/Login/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import { useEffect } from 'react';

function App() {
	// aos animation
	useEffect(() => {
		AOS.init({
			duration:1600
		});
	},[]);
	return (
		<>
			<AuthProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<Route path="/about">
							<AboutUs></AboutUs>
						</Route>
						<Route path="/contact">
							<ContactUs></ContactUs>
						</Route>
						<PrivateRoute path="/servicesDetails/:name">
							<ServicesDetails></ServicesDetails>
						</PrivateRoute>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/register">
							<SignUp></SignUp>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;

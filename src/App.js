import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <header className="App-header">
        <Navigation />
      </header>
      <Router>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            {/*<Route path='/sheeps' component={Sheeps} />*/}
            <Route path='/pages/contact' element={<Contact />} />
          </Route>
        </Routes>
      </Router>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>

  );
}

export default App;

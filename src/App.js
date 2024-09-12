import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Profile from "./pages/profiles/Profile";
import Business from "./pages/Business";
import Navigation from "./components/Navigation";

const isChinese = true;

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/business" element={<Business />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace={true}/>} />
        </Routes>
      </Router>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>

  );
}

export default App;

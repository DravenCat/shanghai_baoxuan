import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useSize} from "ahooks";
import {useMemo, useRef} from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Profile from "./pages/profiles/Profile";
import Business from "./pages/businesses/Business";
import Navigation from "./components/Navigation";


function App() {

  // 获取需要自适应缩放的 DOM 元素引用
  const ref = useRef(null);

  // 获取 document.body 的尺寸
  const size = useSize(document.body);

  // 计算合适的缩放比例
  const zoom = useMemo(() => {
    if (!size) return 1;
    return size.width / 1680;
  }, [size]);

  return (
    <div ref={ref} style={{width: "100%", height: "100%", zoom}}>
      <div className="App">
        <Router>
          <header>
            <Navigation/>
          </header>
          <div className={'App-screen'}>
            <div>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/profile/*' element={<Profile/>}/>
                <Route path="/business/*" element={<Business/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path="*" element={<Navigate to="/" replace={true}/>}/>
              </Routes>
            </div>
          </div>
        </Router>
        <footer className="App-footer">
          <Footer/>
        </footer>
      </div>
    </div>


  );
}

export default App;

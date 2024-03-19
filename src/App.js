import './App.css';
import Home from './Pages/Home'
import Contact from './Pages/Contactus'
import Blog from './Pages/Blog'
import Salads from './Pages/Salads';
import Chickenmeals from './Pages/Chickenmeals';
import Simplemeals from './Pages/Simplemeals';
import Coffee from './Pages/Coffee';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/chickenmeals" element={<Chickenmeals />} />
          <Route path="/Simplemeals" element={<Simplemeals />} />
          <Route path="/coffee" element={<Coffee/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          {/*<Route path="/section2" component={<Section2/>} />
          <Route path="/section3" component={<Section3/>} />
  <Route path="/section4" component={<Section4/>} />*/}
          <Route path="/Navar" component={<Navbar/>} />

        </Routes>
      </BrowserRouter>
    </div>




  );
}

export default App;

import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import Details from "./components/Details";

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";

// /about -> about 
// /blogs -> blogs 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About /> }></Route>
        <Route path="/blogs" element={<Blogs /> }></Route>
        <Route path="*" element = {<Notfound/>}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="/info" element={<Navigate to="/about"></Navigate>}> </Route>
        <Route path="/blog/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

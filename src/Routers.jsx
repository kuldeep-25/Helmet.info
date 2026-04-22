import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OpenFace from './pages/OpenFace'
import FullFace from './pages/FullFace'
import Modular from './pages/Modular'
import OffRoad from './pages/OffRoad'
import Login from './pages/Login'
function Routers() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/open-face" element={<OpenFace />} />
          <Route path="/full-face" element={<FullFace />} />
          <Route path="/flip-up-full-face" element={<Modular />} />
          <Route path="/off-road-full-face" element={<OffRoad />} />
        </Routes>
    )
}

export default Routers
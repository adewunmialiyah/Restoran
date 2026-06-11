import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Booking from "./Pages/Booking"
import Team from "./Pages/Team"
import Test from "./Pages/Test"
export default function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/services" element={<Services/>}></Route>
            <Route exact path="/menu" element={<Menu/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/booking" element={<Booking/>}></Route>
            <Route exact path="/team" element={<Team/>}></Route>
            <Route exact path="/test" element={<Test/>}></Route>
          </Routes>
          <Footer />
        </Router>
    </div>
  )
}

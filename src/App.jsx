import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import About from "./Pages/About.jsx";
import KitchenProcess from "./Pages/KitchenProcess.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import OrderBoard from "./Pages/OrderBoard.jsx";
import NavBar from "./Component/NavBar.jsx";



const App = () => {
    return (
        <BrowserRouter>
            <NavBar
                logo={<span style={{ fontWeight: 900 , fontSize:"23px" }}><Link to="/">OrderMate</Link></span>}
                menuAriaLabel="Toggle navigation"
                menuBg="#ffffff"
                menuContentColor="#111111"
                useFixedPosition={false}
                animationEase="back.out(1.5)"
                animationDuration={0.5}
                staggerDelay={0.12}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp/>} />
                <Route path="/About" element={<About />} />
                <Route path="/KitchenProcess" element={<KitchenProcess />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/OrderBoard" element={<OrderBoard />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App

import "./App.css";
import SignUp from "./pages/signup/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import Home from "pages/Home/Home";
import Contact from "pages/Cantact/Contact";
import About from "pages/About/About";
import CSbatch from "pages/CSbatch/CSbatch";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CS from "pages/CS/CS";
import Category from "pages/Category/Category";


function App() {
  return (
    <>
   
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <NavBar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <NavBar />
              <SignUp />
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/gallery"
          element={
            <>
              <NavBar />
              <Gallery />
              <Footer />
            </>
          }
        /> */}
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Contact />
              <Footer />
            </>
          }
        />
        
        <Route
          path="/batch"
          element={
            <>
              <NavBar />
              <CSbatch />
              <Footer />
            </>
          }
        />
        <Route
          path="/userDetails"
          element={
            <>
              <NavBar />
              {/* <UserDetails /> */}
              <Footer />
            </>
          }
        />
        <Route
          path="/editprofile"
          element={
            <>
              <NavBar />
              {/* <EditProfile /> */}
              <Footer />
            </>
          }
        />
        
        <Route
          path="/alumnies"
          element={
            <>
              <NavBar />
              <CS />
              <Footer />
            </>
          }
        />
        <Route
          path="/Category"
          element={
            <>
              <NavBar />
              <Category />
              <Footer />
            </>
          }
        />
        
      </Routes>
     
      <ToastContainer
        position="top-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <ToastContainer />
    </>
  );
}

export default App;

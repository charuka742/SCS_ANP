import "./App.css";
import SignUp from "./pages/signup/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import Home from "pages/Home/Home";
import Gallery from "pages/Gallery/Gallery";
import Contact from "pages/Cantact/Contact";
import About from "pages/About/About";
import TeamCard from "pages/About/Components/TeamCard";
import PlayGround from "pages/PlayGround/PlayGround";
import CSbatch from "pages/CSbatch/CSbatch";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import UserDetails from "pages/UserDetails/UserDetails";
// import EditProfile from "pages/EditProfile/EditProfile";
import CS from "pages/CS/CS";
import DS from "pages/DS/DS";
import Stat from "pages/Stat/Stat";
// import SeeAllResources from "pages/SeeAllResources/SeeAllResources";
// import Administrative from "pages/Administrative/Administrative";
// import EditAdministrative from "pages/EditAdministrative/EditAdministrative";
// import SeeAllAdministrative from "pages/SeeAllAdministrative/SeeAllAdministrative";
 import Category from "pages/Category/Category";
// import AdminDashBoardHome from "pages/AdminDashBoard/AdminDashBoardHome";

function App() {
  return (
    <div>
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
        <Route
          path="/gallery"
          element={
            <>
              <NavBar />
              <Gallery />
              <Footer />
            </>
          }
        />
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
          path="/playground"
          element={
            <>
              <NavBar />
              <PlayGround />
              <Footer />
            </>
          }
        />
        <Route
          path="/CSbatch"
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
        {/* admin Dashborad */}
        {/* <Route
          path="/comfirmedReservation"
          element={
            <>
              <NavBar />
              <ComfirmedReservation />
              <Footer />
            </>
          }
        />
        <Route
          path="/seeAllUsers"
          element={
            <>
              <NavBar />
              <SeeAllUsers />
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
        <Route
          path="/seeAllResources"
          element={
            <>
              <NavBar />
              <SeeAllResources />
              <Footer />
            </>
          }
        />
        <Route
          path="/addAdministrative"
          element={
            <>
              <NavBar />
              <Administrative />
              <Footer />
            </>
          }
        />
        <Route
          path="/updateAdministrative"
          element={
            <>
              <NavBar />
              <EditAdministrative />
              <Footer />
            </>
          }
        />
        <Route
          path="/seeAllAdministrative"
          element={
            <>
              <NavBar />
              <SeeAllAdministrative />
              <Footer />
            </>
          }
        />
        <Route
          path="/addCategory"
          element={
            <>
              <NavBar />
              <AddCategory />
              <Footer />
            </>
          }
        /> */}
        <Route
          path="/Stat"
          element={
            <>
              <NavBar />
              <Stat />
              <Footer />
            </>
          }
        />

        <Route
          path="/DS"
          element={
            <>
              <NavBar />
              <DS />
              <Footer />
            </>
          }
        />
        <Route
          path="/CS"
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
        {/* <Route path="/" element={<TeamCard />} /> */}
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
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;

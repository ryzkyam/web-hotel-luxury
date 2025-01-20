import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Caraousel from "./pages/Caraousel";
import Hero from "./pages/Hero";
import MainSecond from "./pages/MainSecond";
import FormBooking from "./pages/FormBooking";
import Villa from "./pages/Villa";
import PromoPage from "./pages/PromoPage";
import Hotel from "./pages/Hotel";
import Train from "./pages/Train";
import Travel from "./pages/Travel";
import Flights from "./pages/Flights";
import loginUser from "./pages/loginUser";
import contact from "./pages/contact";
import HotelReviewForm from "./pages/HotelReviewForm";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Booking from "./pages/Booking";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/Hero" Component={Hero} />
        <Route path="/Carousel" Component={Caraousel} />
        <Route path="/Main" Component={PromoPage} />
        <Route path="/Mainsec" Component={MainSecond} />
        <Route path="/FormBook" Component={FormBooking} />
        <Route path="/LoginPage" Component={loginUser} />
        <Route
          path="/detailvila"
          element={
            <>
              <Header />
              <Villa />
            </>
          }
        />
        <Route
          path="/detailHotel"
          element={
            <>
              <Header />
              <Hotel />
            </>
          }
        />
        <Route path="/detailTrain" Component={Train} />
        <Route path="/detailTravel" Component={Travel} />
        <Route path="/detailFlights" Component={Flights} />
        <Route path="contact" Component={contact} />
        <Route path="formreview" Component={HotelReviewForm} />
        <Route path="Login" Component={Login} />
        <Route path="Dashboard" Component={Dashboard} />
        <Route path="Profil" Component={Profil} />
        <Route path="Booking" Component={Booking} />
      </Routes>
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;

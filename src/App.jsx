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
import Login from "./pages/loginUser";
import contact from "./pages/contact";
import HotelReviewForm from "./pages/HotelReviewForm";
import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Booking from "./pages/Booking";
import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetching data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/"); // Replace with your actual endpoint
        const data = await response.json();
        setApiData(data); // Storing the fetched data
        setLoading(false); // Setting loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home apiData={apiData} loading={loading} />
            </>
          }
        />
        <Route path="/Hero" Component={Hero} />
        <Route path="/Carousel" Component={Caraousel} />
        <Route path="/Main" Component={PromoPage} />
        <Route path="/Mainsec" Component={MainSecond} />
        <Route path="/FormBook" Component={FormBooking} />
        <Route path="/LoginPage" Component={Login} />
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

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="Profil" Component={Profil} />
        <Route path="Booking" Component={Booking} />
      </Routes>
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;

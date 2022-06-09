import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CarDetails } from "./pages/CarDetails";
import { Booking } from "./pages/Booking";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route key='home' index element={<Home />} />
          <Route key='car-details' path="car-details/:id" element={<CarDetails />} />
          <Route key='car-booking' path="car-booking/:id" element={<Booking/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

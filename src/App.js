import "./App.css";
import Landing from "./pages/landing/Main";
import Packages from "./pages/packages/Packages.jsx";
import CardPackages from "./pages/packages/components/CardPackages";
import ComponentFormPackages from "./pages/packages/components/Form";
import ComponentFormArtist from "./pages/artist/components/Form";
import CardReservation from "./pages/reservations/components/CardReservation";
import Artist from "./pages/artist/Artist.jsx";
import Reservations from "./pages/reservations/Reservations";
import CardArtist from "./pages/artist/components/CardArtist";
import Confirmation from "./pages/confirmation/Confirmation";
import Dashboard from "./pages/dashboard/Dashboard";
import ReservationSuccessful from "./pages/confirmation/components/reservationSuccessful";
import Login from "./pages/login/login";
import RegisterLogin from "./pages/login/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/package/" element={<Packages />}>
            <Route path="create" element={<ComponentFormPackages />} />
            <Route path="view" element={<CardPackages />} />
          </Route>
          <Route path="/artist/" element={<Artist />}>
            <Route path="create" element={<ComponentFormArtist />} />
            <Route path="view" element={<CardArtist />} />
          </Route>
          <Route path="/reservation/" element={<Reservations />}>
            <Route path="create" element={<CardReservation />} />
            {/*<Route path="view" element={<CardArtist />} />*/}
          </Route>
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterLogin />} />
          <Route path="/succes" element={<ReservationSuccessful />} />
          <Route path="/dashboard/" element={<Dashboard />}>
            <Route path="artist/">
              <Route path="create" element={<ComponentFormArtist />} />
              <Route path="view" element={<CardArtist />} />
            </Route>
            <Route path="package/">
              <Route path="create" element={<ComponentFormPackages />} />
              <Route path="view" element={<CardPackages />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

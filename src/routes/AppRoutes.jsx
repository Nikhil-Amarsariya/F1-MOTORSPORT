import { Route, Routes } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import Drivers from "../pages/Drivers";
import Teams from "../pages/Teams";
import Calendar from "../pages/Calendar";
import News from "../pages/News";
import DriverDetails from "../pages/DriverDetails";
import TeamDetails from "../pages/TeamDetails";
import NotFound from "../pages/NotFound";
import { AnimatePresence } from "framer-motion";
import Tracks from "../pages/Tracks";
import TrackDetails from "../pages/TrackDetails";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoutes";

function AppRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/favorites" element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
        />


        <Route path="/login" element={<Login />} />

        <Route path="/drivers/:id" element={<DriverDetails />} />

        <Route path="/drivers" element={<Drivers />} />

        <Route path="/teams" element={<Teams />} />

        <Route path="/teams/:id" element={<TeamDetails />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/news" element={<News />} />

        <Route path="/tracks" element={<Tracks />} />

        <Route path="/tracks/:id" element={<TrackDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;

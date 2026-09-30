import { Route, Routes } from "react-router-dom";
import LandingPhase1 from "./components/landing_phase1";
import LandingPhase2 from "./components/landing_phase2";
import LandingPhase3 from "./components/landing_phase3";
import LandingPhase4 from "./components/landing_phase4";
import LandingPhase5 from "./components/landing_phase5";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <LandingPhase1 />
      <LandingPhase2 />
      <LandingPhase3 />
      <LandingPhase4 />
      <LandingPhase5 />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

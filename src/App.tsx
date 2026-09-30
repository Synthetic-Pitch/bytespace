import LandingPhase1 from "./components/landing_phase1";
import LandingPhase2 from "./components/landing_phase2";
import LandingPhase3 from "./components/landing_phase3";
import LandingPhase4 from "./components/landing_phase4";
import LandingPhase5 from "./components/landing_phase5";

const App = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <LandingPhase1 />
      <LandingPhase2/>
      <LandingPhase3/>
      <LandingPhase4/>
      <LandingPhase5/>
    </div>
  );
};

export default App;

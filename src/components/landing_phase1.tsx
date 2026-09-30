import cart_icon from "../assets/icons/cart_icon.png";
import b_icon from "../assets/icons/b_icon.png";
import eclipsRound from "../assets/images/EllipseRound.png";
import searchbar from "../assets/icons/searchbar.png";
import GridBackground from "./gridbackground";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import LearningProgress from "./learning-progress";
import Hero1 from "./hero1";
import Icon1 from "./icon1";
import HappyStudents from "./happy_students";

const LandingPhase1 = () => {


  return (
    <section className="min-h-180 sm:min-h-205 lg:h-dvh lg:min-h-256 lg:max-h-256 bg-[#003BE2] w-full relative flex flex-col overflow-hidden">
        <GridBackground/>
      <header className="min-h-20 px-4 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-evenly sm:px-6 lg:h-30">
        <div className="relative flex items-center justify-center gap-3 w-full sm:w-auto">
          <img src={b_icon} alt="" className="h-[31.5px] w-[28.88px]" />
          <h1 className="text-white font-clashdisplay font-bold text-[24px]">ByteSpace</h1>
        </div>
        <ul className="flex justify-center text-white gap-6 sm:gap-8 text-sm sm:text-base font-satoshi w-full sm:w-auto">
          <li>Home</li>
          <li>Course</li>
          <li>Creator</li>
        </ul>
        <ul className="flex justify-center items-center gap-6 sm:gap-8 text-white text-sm sm:text-base font-satoshi w-full sm:w-auto">
          <li>Sign In</li>
          <li>Join Us</li>
          <li className="relative">
            <img src={cart_icon} alt="" />
          </li>
        </ul>
      </header>
      <main className="flex-1 w-full flex flex-col justify-center items-center text-center text-white relative py-10 sm:py-12 lg:py-0">
        <p className="text-4xl leading-tight sm:text-5xl lg:text-6xl 2xl:text-[72px] font-poppins font-bold px-4">
          Get Access to hundreds <br className="hidden sm:block" />
          Courses Available
        </p>
        <p className="max-w-2xl px-6 mt-4 text-sm sm:text-base lg:text-lg font-satoshi">
          Unlock your creativity, gain valuable knowledge, and grow your bussiness with our wide range of course.
        </p>
        <div className="relative flex flex-col w-full max-w-xl items-stretch justify-center gap-3 px-5 mt-8 sm:flex-row sm:items-center sm:gap-4 sm:mt-10 lg:mt-14 z-30">
          <div className="relative bg-white w-full min-w-0 h-[52px] rounded-2xl">
            <input
              id="searchbar"
              type="text"
              placeholder="Course, topic, creator"
              className="peer relative z-0 h-full w-full rounded-2xl bg-transparent pl-14 pr-4 text-black placeholder:text-gray-400 outline-none"
            />
            <img
              src={searchbar}
              alt=""
              className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 transition-opacity peer-focus:opacity-0"
            />
          </div>
          <label htmlFor="searchbar" className="w-full h-[52px] sm:w-[104px] shrink-0 bg-[#D4FB20] text-black flex items-center justify-center font-satoshi text-[18px] rounded-full">Search</label>
        </div>

        <div className="hidden 2xl:flex absolute top-[40%] w-full min-w-[1700px] max-w-[1700px] justify-between items-center overflow-hidden">
            <div className="w-60 h-60 overflow-visible">
              <Icon1/>
            </div>
            <img src={icon2} alt="" className="w-70 h-60 object-contain -rotate-20"/>
        </div>
        <div className="hidden 2xl:flex absolute top-[90%] justify-between w-full min-w-300 max-w-300 overflow-hidden">
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
        </div>
        <div className="hidden 2xl:flex absolute top-[130%] justify-between w-full min-w-[1400px] max-w-[1400px] mr-[5%] z-20">
            <img src={icon5} alt="" className="h-[20%] w-[20%] content-contain"/>
            <img src={icon6} alt="" className="h-[18%] w-[18%] content-contain"/>
            <HappyStudents/>
            <div className="bg-white w-[258px] h-[70px] absolute left-80 rounded-xl text-black flex flex-col justify-center items-start px-5 font-satoshi">
                <p className="">UI/UX Design</p>
                <p className="text-gray-500">200 Course &bull; 1000+ Students</p>
            </div>
            <LearningProgress/>
        </div>
         
      </main>
      <footer className="relative flex-1 min-h-[240px] sm:min-h-[300px] w-full flex justify-center items-end overflow-hidden">
        <Hero1/>
        <div className=" w-full h-full flex justify-center -mb-23">
          <img src={eclipsRound} alt="" className="w-full max-w-[1000px] h-100 object-contain" />
        </div>
      </footer>
    </section>
  );
};

export default LandingPhase1;

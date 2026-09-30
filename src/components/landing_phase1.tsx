import cart_icon from "../assets/icons/cart_icon.png";
import b_icon from "../assets/icons/b_icon.png";
import hero_img from "../assets/images/Image.png";
import eclipsRound from "../assets/images/EllipseRound.png";
import searchbar from "../assets/icons/searchbar.png";
import GridBackground from "./gridbackground";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import student1 from "../assets/images/student1.png"
import student2 from "../assets/images/student2.png"
import student3 from "../assets/images/student3.png"
import student4 from "../assets/images/student4.png"
import student5 from "../assets/images/student5.png"
import student6 from "../assets/images/student6.png"
import student7 from "../assets/images/student7.png"
import star from "../assets/images/star.png"
import LearningProgress from "./learning-progress";

const LandingPhase1 = () => {

    const pictures = [
        {src:student1,index:1},
        {src:student2,index:2},
        {src:student3,index:3},
        {src:student4,index:4},
        {src:student5,index:5},
        {src:student6,index:6},
        {src:student7,index:7}
    ]

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
            <img src={icon1} alt="" className="w-60 h-60 object-cover"/>
            <img src={icon2} alt="" className="w-70 h-60 object-contain -rotate-20"/>
        </div>
        <div className="hidden 2xl:flex absolute top-[90%] justify-between w-full min-w-300 max-w-300 overflow-hidden">
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
        </div>
        <div className="hidden 2xl:flex absolute top-[130%] justify-between w-full min-w-[1400px] max-w-[1400px] mr-[5%] z-20">
            <img src={icon5} alt="" className="h-[20%] w-[20%] content-contain"/>
            <img src={icon6} alt="" className="h-[18%] w-[18%] content-contain"/>
            <div className="bg-white w-[258px] h-[121px] absolute top-[60%] left-[18%] rounded-xl text-black flex flex-col items-start justify-center px-3">
                <p className="font-satoshi text-6">Happy Students</p>
                <div className="font-satoshi flex items-center gap-2 text-2">
                    4.5 <span className="text-gray-500">240</span>
                    <img src={star} alt="" className="h-4 w-4"/>
                </div>
               <div className="flex items-cente w-full">
                {pictures.map((pic, i) => (
                    <div
                    key={pic.index}
                    className="h-[43px] w-[43px] rounded-full border-2 border-white overflow-hidden"
                    style={{ marginLeft: i === 0 ? 0 : "-14px" }}
                    >
                    <img src={pic.src} alt="" className="h-full w-full object-cover" />
                    </div>
                ))}

                <div
                    className="h-[43px] w-[43px] rounded-full bg-[#D4FB20] border-2 border-white flex items-center justify-center text-[11px] font-bold text-black"
                    style={{ marginLeft: "-14px" }}
                >
                    2K+
                </div>
                </div>
            </div>
            <div className="bg-white w-[258px] h-[70px] absolute left-80 rounded-xl text-black flex flex-col justify-center items-start px-5 font-satoshi">
                <p className="">UI/UX Design</p>
                <p className="text-gray-500">200 Course &bull; 1000+ Students</p>
            </div>
            <LearningProgress/>
        </div>
         
      </main>
      <footer className="relative flex-1 min-h-[240px] sm:min-h-[300px] w-full flex justify-center items-end overflow-hidden">
        <img src={hero_img} alt="" className="absolute bottom-0 h-full max-h-[460px] max-w-full object-contain object-bottom z-10" />
        <div className=" w-full h-full flex justify-center -mb-23">
          <img src={eclipsRound} alt="" className="w-full max-w-[1000px] h-100 object-contain" />
        </div>
      </footer>
    </section>
  );
};

export default LandingPhase1;

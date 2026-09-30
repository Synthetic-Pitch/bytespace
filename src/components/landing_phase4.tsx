import Hero1 from "./hero1"
import Icon1 from "./icon1"
import LearningProgress from "./learning-progress"
import course1 from "../assets/images/course1.png"
import Hero2 from "../assets/images/hero2.png" 
import revenue1 from "../assets/images/revenue1.png"
import revenue2 from "../assets/images/revenue2.png"
import HappyStudents from "./happy_students"
import check from "../assets/icons/check.png"
const LandingPhase4 = () => {

    const list = [
        {src:check,label:"Share Your Expertise"},
        {src:check,label:"Monetize Your Passion"},
        {src:check,label:"Flexibility and Autonomy"},
        {src:check,label:"Build a Community"},
    ]
    return (
        <div className="w-full flex flex-col bg-[#FAFAFA] items-center relative overflow-y-hidden pb-13 overflow-x-hidden">
           
            <section className="w-full max-w-300 px-5 sm:px-8 lg:px-0 pt-10 sm:pt-14 lg:pt-22 relative flex flex-col lg:flex-row items-center">
                <div className="absolute -top-40 w-150 h-150 max-w-300">
                    <div className="h-full w-full rounded-full
                    [background-image:radial-gradient(circle_closest-side,#CBFC01_0%,#CBFC01_1%,white_100%)] opacity-[.5]"
                    />
                </div>
                <aside className="w-full lg:w-1/2 lg:h-180 flex flex-col justify-center relative z-10 py-6 lg:py-0">
                    <div className="font-poppins text-3xl sm:text-4xl lg:text-[44px] leading-tight font-semibold py-4 lg:py-6">
                        <p>Your Path to Professional</p>
                        <p>Growth Starts Here!</p>
                    </div>
                    <p className="font-satoshi text-[#4F4F4F]">Explore our curated selection of courses tailored to enhance <br className="hidden lg:block" /> your capabilities and accelerate your career journey. <br className="hidden lg:block" /> Whether you are looking to sharpen specific skills, gain <br className="hidden lg:block" /> industry expertise, or embark on a new career path entirely, <br className="hidden lg:block" /> we have the resources you need.</p>
                    <ul className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-x-12 py-8 lg:gap-12 lg:py-12">
                        <li>
                            <h1 className="text-3xl sm:text-[36px] font-semibold font-poppins text-[#003BE2]">
                                12K
                            </h1>
                            <h3 className="font-satoshi text-[#4B4C53]">Students</h3>
                        </li>
                        <li>
                            <h1 className="text-3xl sm:text-[36px] font-semibold font-poppins text-[#003BE2]">
                                70+
                            </h1>
                            <h3 className="font-satoshi text-[#4B4C53]">Courses</h3>
                        </li>
                        <li>
                            <h1 className="text-3xl sm:text-[36px] font-semibold font-poppins text-[#003BE2]">
                                16
                            </h1>
                            <h3 className="font-satoshi text-[#4B4C53]">Creators</h3>
                        </li>
                    </ul>
                </aside>
                <main className="w-full lg:w-1/2 h-[340px] sm:h-[420px] lg:h-180 relative flex justify-center overflow-hidden lg:overflow-visible">
                    <div className="absolute -top-40 -right-60 w-150 h-150 max-w-300">
                        <div className="h-full w-full rounded-full
                        [background-image:radial-gradient(circle_closest-side,#003BE2_0%,#003BE2_1%,white_100%)] opacity-[.2]"
                        />
                    </div>
                    <div className="absolute top-0 z-20 h-full w-full lg:-mt-20 lg:scale-[1.3]">
                        <Hero1/>
                    </div>
                    <div className="absolute inset-0 z-21 lg:inset-auto lg:top-60 lg:right-50">
                        <LearningProgress className="!left-[38%] !top-[44%] scale-[0.62] origin-top-left sm:scale-[0.78] lg:!left-[62%] lg:!top-auto lg:scale-100"/>
                    </div>
                    <div className="absolute top-[10%] right-[5%] z-22 h-28 w-20 sm:h-36 sm:w-24 lg:top-30 lg:left-130 lg:right-auto lg:h-40 lg:w-40">
                        <Icon1 />
                    </div>
                    <img draggable={false} src={course1} alt="" className="absolute top-0 left-0 z-10 w-[min(56vw,300px)] sm:w-64 lg:h-90 lg:w-90 select-none"/>
                </main>
            </section>
            <aside className="relative flex flex-col lg:flex-row w-full max-w-300 px-5 sm:px-8 lg:px-0 py-10 lg:py-18 lg:h-200">
                <main className="w-full lg:w-1/2 h-[320px] sm:h-[420px] lg:h-full relative flex justify-center lg:justify-start overflow-hidden lg:overflow-visible">
                    <img draggable={false} src={Hero2} alt="" className="z-10 max-h-full w-full object-contain scale-100 lg:max-h-none lg:w-auto lg:scale-[1.2] select-none" />
                    <div className="hidden sm:block h-32 w-32 lg:h-50 lg:w-50 absolute top-8 lg:top-30 right-4 lg:right-20 z-11">
                        <Icon1/>
                    </div>
                    <img draggable={false} src={revenue1} alt="" className="hidden sm:block h-[119px] w-[232px] absolute left-0 lg:-left-12 z-8 select-none" />
                    <img draggable={false} src={revenue2} alt="" className="hidden sm:block h-[133px] w-[134px] absolute top-40 left-0 lg:-left-10 z-8 select-none" />
                    <div className="hidden lg:block absolute bottom-0 -right-80 h-200 w-200 z-12">
                        <HappyStudents/>
                    </div>
                    <div className="hidden lg:block absolute -bottom-72 -left-120 w-150 h-150 max-w-300">
                        <div className="h-full w-full rounded-full
                        [background-image:radial-gradient(circle_closest-side,#CBFC01_0%,#CBFC01_1%,white_100%)] opacity-[.5]"
                        />
                    </div>
                </main>
                <section className="w-full lg:w-1/2 lg:h-full flex flex-col justify-center relative py-8 lg:py-0">
                    <div className="font-poppins text-3xl sm:text-4xl lg:text-5xl leading-tight font-semibold">
                        <p>Create & Manage</p>
                        <p>Courses Easily.</p>
                    </div>
                    <p className="font-satoshi py-8 lg:py-16 text-base sm:text-[18px]"><span className="font-bold">ByteSpace</span> supports individuals or entities in creation,publication, <br className="hidden lg:block" />and administration of educational courses.</p>
                    <ul>
                        {list.map((item,index)=>(
                            <li key={index} className="flex gap-4 py-2">
                                <img draggable={false} src={item.src} alt="" className="h-6 w-6 object-contain select-none"/>
                                <p>{item.label}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:block absolute -bottom-72 -right-80 w-190 h-190 max-w-300">
                        <div className="h-full w-full rounded-full
                        [background-image:radial-gradient(circle_closest-side,#003BE2_0%,#003BE2_1%,white_100%)] opacity-[.3]"
                        />
                    </div>
                </section>
            </aside>
        </div>
    )
}

export default LandingPhase4

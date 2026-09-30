import logo1 from "../assets/images/logo_partner1.png"
import logo2 from "../assets/images/logo_partner2.png"
import logo3 from "../assets/images/logo_partner3.png"
import logo4 from "../assets/images/logo_partner4.png"
import logo5 from "../assets/images/logo_partner5.png"


const LandingPhase2 = () => {
    const logos = [
        {src:logo1,index:1},
        {src:logo2,index:2},
        {src:logo3,index:3},
        {src:logo4,index:4},
        {src:logo5,index:5},
    ]
    const data = {
        row1:[
            { label:"Featured",},
            { label:"Music"},
            { label:"Drawing & Painting"},
            { label:"Marketing"},
            { label:"Animation"},
            { label:"Social Media"},
            { label:"UI/UX Design"},
            { label:"Creative Marketing"}
        ],
        row2:[
            { label:"Digital Illustration"},
            { label:"Film & Video"},
            { label:"Crafts"},
            { label:"Freelance & Entrepreneurship"},
            { label:"Graphic Design"},
            { label:"Photograhy"},
        ],
        row3:[
            { label:"Productivity"},
            { label:"Web Development"},
            { label:"Data Sceience"},
            { label:"Cooking"},
        ]
    }

    return (
        <div className=" w-full bg-white">
            <header className="min-h-36 sm:min-h-50.5 bg-[#F5F5F6] w-full flex flex-wrap items-center justify-center gap-x-8 gap-y-6 px-4 py-8 sm:gap-x-16 lg:gap-x-30">
                {logos.map((logo)=>(
                    <div key={logo.index} className="flex items-center justify-center">
                        <img src={logo.src} alt="" className="max-h-12 max-w-24 sm:max-h-14 sm:max-w-32 object-contain" />
                    </div>
                ))}
            </header>
            <main>
                <div className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[44px] flex flex-col items-center justify-center mt-12 sm:mt-16 lg:mt-20 text-center px-4" >
                    <p>Discover Your Passions</p>
                    <p>Build Your Skills</p>
                </div>
                <p className="text-center font-satoshi text-gray-500 text-sm sm:text-base px-5 py-6 sm:py-8">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different <br className="hidden sm:block" />fields, from technology to the arts, and make a difference in your career and life.</p>
            </main>
            <footer className="w-full flex flex-col items-center font-satoshi">
                <section className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 w-full max-w-300 px-4 py-2 sm:py-3">
                    {
                        data.row1.map((row1,index)=>(
                            <div key={index} className="bg-[#F5F5F6] px-3 sm:px-4 py-2 rounded-2xl cursor-pointer hover:bg-[#D4FB20] hover:scale-[1.05] transform duration-75 flex justify-center items-center text-center text-sm sm:text-base">
                                <h1>{row1.label}</h1>
                            </div>
                        ))
                    }
                </section>
                <section className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 w-full max-w-300 px-4 py-2 sm:py-3">
                    {
                        data.row2.map((row2,index)=>(
                            <div key={index} className="bg-[#F5F5F6] px-3 sm:px-4 py-2 rounded-2xl cursor-pointer hover:bg-[#D4FB20] hover:scale-[1.05] transform duration-75 flex justify-center items-center text-center text-sm sm:text-base">
                                <h1>{row2.label}</h1>
                            </div>
                        ))
                    }
                </section>
                <section className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 w-full max-w-300 px-4 py-2 sm:py-3">
                    {
                        data.row3.map((row3,index)=>(
                            <div key={index} className="bg-[#F5F5F6] px-3 sm:px-4 py-2 rounded-2xl cursor-pointer hover:bg-[#D4FB20] hover:scale-[1.05] transform duration-75 flex justify-center items-center text-center text-sm sm:text-base">
                                <h1>{row3.label}</h1>
                            </div>
                        ))
                    }
                </section>
            </footer>
        </div>
    )
}

export default LandingPhase2

import course1 from "../assets/images/course1.png";
import course2 from "../assets/images/course2.png";
import course3 from "../assets/images/course3.png";
import course4 from "../assets/images/course4.png";
import course5 from "../assets/images/course5.png";
import course6 from "../assets/images/course6.png";
import category1 from "../assets/images/category1.png";
import category2 from "../assets/images/category2.png";
import category3 from "../assets/images/category3.png";
import category4 from "../assets/images/category4.png";
import category5 from "../assets/images/category5.png";
import category6 from "../assets/images/category6.png";

const LandingPhase3 = () => {
    
    const courses = [
        {src:course1,index:1},
        {src:course2,index:2},
        {src:course3,index:3},
        {src:course4,index:4},
        {src:course5,index:5},
        {src:course6,index:6}
    ]
    const categories = [
        { src:category1,index:1 },
        { src:category2,index:2 },
        { src:category3,index:3 },
        { src:category4,index:4 },
        { src:category5,index:5 },
        { src:category6,index:6 },
    ]
    return (
        <div className="relative mt-8 sm:mt-12 w-full max-w-7xl mx-auto px-4">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 select-none">
                {
                    courses.map((course)=>(
                        <div key={course.index} className="cursor-pointer hover:scale-[1.01] transform duration-100" >
                            <img src={course.src} alt="" draggable={false} className="w-full h-auto" />
                        </div>
                    ))
                }
            </section>
            <section className="mt-10 sm:mt-14">
                <p className="font-poppins text-2xl sm:text-3xl lg:text-[36px] leading-tight text-center font-semibold px-2">Explore Diverse Learning Paths at Bytespace</p>
                <p className="font-satoshi text-sm sm:text-base lg:text-[18px] text-center text-gray-500 px-3 py-5 sm:py-6">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of course spans varios <br className="hidden sm:block" />
                fields, ensuring there's something for everyone.Unleash your potential and explore our carefully curated categories.
                </p>
            </section>
            <footer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 pb-16 sm:pb-24">
                {
                    categories.map((category)=>(
                        <div key={category.index} className="cursor-default">
                            <img src={category.src} alt="" draggable={false} className="w-full h-auto" />
                        </div>
                    ))
                }
            </footer>
        </div>
    )
}

export default LandingPhase3

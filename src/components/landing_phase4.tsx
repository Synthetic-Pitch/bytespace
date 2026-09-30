import LearningProgress from "./learning-progress"


const LandingPhase4 = () => {
    return (
        <div className="w-full min-h-dvh flex flex-col bg-[#FAFAFA] items-center relative overflow-hidden">
           
            <section className=" w-full max-w-300 pt-22 relative flex">
                <div className="absolute -top-40 w-150 h-150 max-w-300">
                    <div className="h-full w-full rounded-full
                    [background-image:radial-gradient(circle_closest-side,#CBFC01_0%,#CBFC01_1%,white_100%)] opacity-[.5]"
                    />
                </div>
                <aside className="w-1/2 flex flex-col relative z-10">
                    <div className="font-poppins text-[44px] font-semibold py-6">
                        <p>Your Path to Professional</p>
                        <p>Growth Starts Here!</p>
                    </div>
                    <p className="font-satoshi text-[#4F4F4F]">Explore our curated selection of courses tailored to enhance <br /> your capabilities and accelerate your career journey. <br /> Whether you are looking to sharpen specific skills, gain <br /> industry expertise, or embark on a new career path entirely, <br /> we have the resources you need.</p>
                    <ul className="flex gap-12 py-12">
                        <li>
                            <h1 className="text-[36px] font-semibold font-poppins text-[#003BE2]">
                                12K
                            </h1>
                            <h3 className="font-satoshi text-[#4B4C53]">Students</h3>
                        </li>
                        <li>
                            <h1 className="text-[36px] font-semibold font-poppins text-[#003BE2]">
                                70+
                            </h1>
                            <h3 className="font-satoshi text-[#4B4C53]">Courses</h3>
                        </li>
                        <li>
                            <h1 className="text-[36px] font-semibold font-poppins text-[#003BE2]">
                                16
                            </h1>
                            <h3 className="font-satoshi text-[#4B4C53]">Creators</h3>
                        </li>
                    </ul>
                </aside>
                <main className="w-1/2">
                    <LearningProgress/>
                </main>
            </section>
            <aside>

            </aside>
        </div>
    )
}

export default LandingPhase4

import GridBackground from './gridbackground';
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon3.png";
import icon3 from "../assets/icons/icon7.png";
import icon4 from "../assets/icons/icon10.png";
import icon5 from "../assets/icons/icon8.png";
import icon6 from "../assets/icons/icon9.png";
import profile1 from "../assets/icons/profile1.png"
import profile2 from "../assets/icons/profile2.png"
import profile3 from "../assets/icons/profile3.png"
import bytespace from "../assets/icons/bytespace_logo.png"

const LandingPhase5 = () => {
    const card = [
        {src:profile1,name:"Sarah M.",label:"Enthiusiastic Learner",text:"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."},
        {src:profile2,name:"James L.",label:"Lifelong Learner",text:"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."},
        {src:profile3,name:"Alex B.",label:"Inspired Creator",text:"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."}
    ]
    return (
    <div className='w-full relative flex flex-col items-center'> 
    
        <header className='w-full h-auto min-h-[420px] lg:h-[488px] bg-[#033BE2] flex flex-col items-center justify-center relative overflow-hidden z-20'>
            
            <div className='font-poppins text-3xl sm:text-4xl lg:text-[44px] text-white font-semibold text-center px-4 py-6 lg:py-8'>
                <p>Unlock Your Potential as a</p>
                <p>Creator with ByteSpace</p>
            </div>
            <p className='w-full max-w-300 px-5 sm:px-8 text-center text-white text-sm sm:text-base lg:text-[18px]'>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a <br className='hidden lg:block' /> part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your <br className='hidden lg:block' /> expertise by publishing your finest course on the ByteSpace Course Library.</p>
            <button className='bg-[#D4FB20] mt-8 lg:mt-12 mb-10 lg:mb-0 py-2 px-9 rounded-full font-satoshi text-[18px]'>Join as Creator</button>
            <div className='hidden lg:block absolute top-0 h-full w-full max-w-300'>
                <img src={icon1} alt="" className='h-90 w-90 object-contain absolute -top-40 -left-40'/>
                <img src={icon2} alt="" className='h-30 w-30 absolute top-20 left-30' />
                <img src={icon3} alt="" className='h-30 w-30 absolute top-20 right-30' />
                <img src={icon4} alt="" className='h-65 w-65 absolute top-10 -right-40 -rotate-30' />
                <img src={icon5} alt="" className='h-70 w-70 absolute -bottom-30 left-0' />
                <img src={icon6} alt="" className='h-30 w-30 absolute bottom-30 -left-20' />
                <img src={icon1} alt="" className='h-60 w-60 absolute -bottom-30 -right-20 -rotate-40 object-cover' />
            </div>
            <GridBackground/>
        </header>
        <main className='h-auto lg:h-[754px] w-full flex flex-col items-center relative z-10 overflow-hidden'>
            
            <section className='hidden lg:block absolute top-0 w-full max-w-300'>
                <div className="absolute left-95 w-100 h-100 max-w-300">
                    <div className="h-full w-full rounded-full
                    [background-image:radial-gradient(circle_closest-side,#CBFC01_0%,#CBFC01_1%,white_100%)] opacity-[.6]"
                    />
                </div>
                <div className="absolute -right-70 top-10 w-150 h-150 max-w-300">
                    <div className="h-full w-full rounded-full
                    [background-image:radial-gradient(circle_closest-side,#CBFC01_0%,#CBFC01_1%,white_100%)] opacity-[.4]"
                    />
                </div>
                <div className="absolute top-90 -left-140 w-290 h-290 max-w-300">
                    <div className="h-full w-full rounded-full
                    [background-image:radial-gradient(circle_closest-side,#003BE2_0%,#003BE2_1%,white_100%)] opacity-[.4]"
                    />
                </div>
            </section>
            <header className='w-full max-w-300 px-5 sm:px-8 lg:px-0 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-0 py-20 lg:py-20 z-11 '>
                <div className='flex flex-col w-full lg:w-1/2 text-3xl sm:text-4xl lg:text-[44px] leading-tight font-poppins font-semibold'>
                    <p>Discover What Our</p>
                    <p>Community Is saying</p>
                </div>
                <div className='w-full lg:w-1/2 font-satoshi text-sm sm:text-base lg:text-base text-[#4F4F4F]'>
                    <p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
                </div>
            </header>
            <section className='w-full flex justify-center relative '>
                <ul className='flex flex-col justify-center lg:flex-row gap-4 z-10 w-full items-center px-5 sm:px-8 lg:px-0 pb-10 lg:pb-0'>
                    {
                        card.map((card,index)=>(
                            <li key={index} className='min-h-[300px] lg:h-[432px] w-full max-w-[374px] lg:w-[374px] px-6 bg-[#FFFFFF] rounded-2xl'>
                                <div className='py-6'>
                                    <img src={card.src} alt={card.name} />
                                </div>
                                <div className='mb-6'>
                                    <h1 className='text-[20px] font-poppins font-semibold'>{card.name}</h1>
                                    <p className='font-satoshi text-[#003BE2]'>{card.label}</p>
                                </div>
                                <p className='font-satoshi text-base lg:text-[18px]'>&quot;{card.text}&quot;</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </main>
        <footer className='h-auto lg:h-[525px] w-full flex items-center justify-center py-12 lg:py-0'>
            <main className='w-full max-w-300 px-5 sm:px-8 lg:px-0'>
                <div className='flex items-center gap-3'>
                    <img src={bytespace} alt="" className='object-contain -mt-2' />
                    <h1 className='text-[24px] font-clashdisplay font-bold'>
                        ByteSpace
                    </h1>
                </div>
                <section className='flex flex-col lg:flex-row gap-8 lg:gap-0 pt-8'>
                    <aside className='w-full lg:w-1/2 font-satoshi text-[14px] text-gray-700'>
                        <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
                        <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 py-6 font-satoshi mt-5'>
                            <input type="text" id='enter_email' placeholder='Enter your email' className='outline-1 outline-gray-300 rounded-full px-4 h-12 w-full sm:w-[376px] placeholder:text-black'/>
                            <label htmlFor="enter_email" className='bg-[#D4FB20] py-3 px-6 rounded-full text-black text-center shrink-0'>Search</label>
                        </div>
                        <p>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
                    </aside>
                    <div className='w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6 text-[14px] font-satoshi'>
                        <ul className='flex flex-col gap-2'>
                            <li>Featured Courses</li>
                            <li>Featured Categories</li>
                            <li>Business</li>
                            <li>IT</li>      
                            <li>Design</li>                  
                        </ul>
                        <ul className='flex flex-col gap-2'>
                            <li>Development</li>
                            <li>Marketing</li>
                            <li>Photography</li>
                            <li>Finance</li>
                            <li>Sport</li>
                        </ul>
                        <ul className='flex flex-col gap-2'>
                            <li>Become a Creator</li>
                            <li>Affiliate Program</li>
                            <li>Contact</li>
                            <li>Help</li>
                            <li>About</li>
                        </ul>
                    </div>
                </section>
                <aside>
                    <hr className='bg-[gray] w-full h-[1px] outline-0 border-0 mt-10 lg:mt-22'/>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-gray-600 text-[12px] py-4'>
                        <p className=''>
                            @ 2023 ByteSpace. All rights reserve.
                        </p>
                        <ul className='flex flex-wrap gap-x-5 gap-y-2 lg:gap-12'>
                            <li>Privacy Policy</li>
                            <li>terms of Service</li>
                            <li>Cookies Setting </li>
                        </ul>
                    </div>
                </aside>
            </main>
        </footer>
    </div>
  )
}

export default LandingPhase5

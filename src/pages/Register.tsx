import { Link } from "react-router-dom";
import GridBackground from "../components/gridbackground";
import logo from "../assets/icons/bytespace_logo.png";
import group from "../assets/images/signin_group.png";

const Register = () => {
    return (
        <div className="h-dvh w-full relative bg-[#003BE2] flex justify-center">
            <GridBackground/>
            <main className="w-full max-w-300 h-full max-h-256">
                <header className="py-6"><img src={logo} alt="" /></header>
                <section className="flex">
                    <aside className="w-1/2 text-white">
                        <p className="font-poppins font-semibold text-[20px]">Sign up and come in</p>
                        <p className="font-satoshi text-18px py-6">The registration process is straightforward, uncomplicated, <br /> and efficient, allowing users to sign up quickly, easily, and at <br /> no cost</p>
                        <div>
                            <img src={group} alt="" draggable={false} />
                        </div>
                    </aside>
                    <div className="w-1/2 bg-white rounded-4xl flex justify-center items-center">
                        <main className="h-[85%] w-[80%] flex flex-col">
                            <p className="font-satoshi text-[#003BE2] text-[18px]">Create an Account</p>
                            <div className="font-poppins font-semibold text-[44px] pb-8">
                                <p>Welcome to <br /> ByteSpace</p>
                            </div>
                            <form action="" className="flex flex-col gap-3 font-satoshi">
                                <label htmlFor="name">Full Name</label>
                                <input id="name" type="text" placeholder="Jamie Davis" className="outline outline-gray-300 rounded-xl px-8 py-2"/>
                                <label htmlFor="email">Email</label>
                                <input id="email" type="text" placeholder="designer@example.com" className="outline outline-gray-300 rounded-xl px-8 py-2"/>
                                <label htmlFor="password">Password</label>
                                <input id="password" type="text" placeholder="********" className="outline outline-gray-300 rounded-xl px-8 py-2"/>
                                <button className="bg-[#D4FB20] self-end px-8 py-2 rounded-full cursor-pointer">Continue</button>
                            </form>
                            <div className="grow flex items-end justify-center gap-2 select-none">
                                <p>Already have an account?</p>
                                <Link to="/login" className="text-[#003BE2] font-satoshi cursor-pointer">Login</Link>
                            </div>
                        </main>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Register

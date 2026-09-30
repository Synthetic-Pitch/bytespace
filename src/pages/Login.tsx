import { Link, useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import GridBackground from "../components/gridbackground";
import logo from "../assets/icons/bytespace_logo.png";
import group from "../assets/images/signin_group.png";
import icon from "../assets/icons/icon11.png"

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate("/");
    };

    return (
        <div className="min-h-dvh w-full relative bg-[#003BE2] flex justify-center">
            <GridBackground/>
            <main className="w-full max-w-300 h-full max-h-256">
                <header className="py-6"><img src={logo} alt="" /></header>
                <section className="flex">
                    <aside className="w-1/2 text-white">
                        <p className="font-poppins font-semibold text-[20px]">Sign In</p>
                        <p className="font-satoshi text-18px py-6">The registration process is straightforward, uncomplicated, <br /> and efficient, allowing users to sign up quickly, easily, and at <br /> no cost</p>
                        <div>
                            <img src={group} alt="" draggable={false} />
                        </div>
                    </aside>
                    <div className="w-1/2 bg-white rounded-4xl flex justify-center items-center h-[784px]">
                        <main className="h-[85%] w-[80%] flex flex-col">
                            <p className="font-satoshi text-[#003BE2] text-[18px]">Create an Account</p>
                            <div className="font-poppins font-semibold text-[44px] pb-8">
                                <p>Welcome to <br /> ByteSpace</p>
                            </div>
                            <form onSubmit={handleLogin} className="flex flex-col gap-3 font-satoshi">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" required placeholder="Jamie Davis" className="outline outline-gray-300 rounded-xl px-8 py-2"/>
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" required placeholder="designer@example.com" className="outline outline-gray-300 rounded-xl px-8 py-2"/>
                                <button type="submit" className="bg-[#D4FB20] self-end px-8 py-2 rounded-full cursor-pointer">Sign In</button>
                            </form>
                            <div className="grow flex items-end justify-center gap-2 select-none mt-12 relative">
                                <div className="absolute top-0 w-full flex items-center">
                                    <hr className="grow"/><span className="px-3">or</span><hr className="grow"/>
                                </div>
                                <div className=" absolute top-10 flex justify-center">
                                    <img src={icon} alt="" />
                                </div>
                                <p>
                                    New User?
                                </p>
                                <Link to="/register" className="text-[#003BE2] font-satoshi cursor-pointer">Create an account</Link>
                            </div>
                        </main>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Login

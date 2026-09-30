import student1 from "../assets/images/student1.png"
import student2 from "../assets/images/student2.png"
import student3 from "../assets/images/student3.png"
import student4 from "../assets/images/student4.png"
import student5 from "../assets/images/student5.png"
import student6 from "../assets/images/student6.png"
import student7 from "../assets/images/student7.png"
import star from "../assets/images/star.png"
const HappyStudents = () => {
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
    <div className="bg-white w-[258px] h-[121px] absolute top-[60%] left-[18%] rounded-xl text-black flex flex-col items-start justify-center px-3">
                <p className="font-satoshi text-6">Happy Students</p>
                <div className="font-satoshi flex items-center gap-2 text-2">
                    4.5 <span className="text-gray-500">240</span>
                    <img draggable={false} src={star} alt="" className="h-4 w-4 select-none"/>
                </div>
               <div className="flex items-cente w-full">
                {pictures.map((pic, i) => (
                    <div
                    key={pic.index}
                    className="h-[43px] w-[43px] rounded-full border-2 border-white overflow-hidden"
                    style={{ marginLeft: i === 0 ? 0 : "-14px" }}
                    >
                    <img draggable={false} src={pic.src} alt="" className="h-full w-full object-cover select-none" />
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
  )
}

export default HappyStudents

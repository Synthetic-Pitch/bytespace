

const LearningProgress = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-white w-[258px] h-[121px] absolute left-[62%] rounded-xl text-black flex flex-col items-start justify-center px-6 ${className}`}>
        <p className="font-satoshi text-black">Learning Progress</p>
        <h1 className="font-poppins text-[32px] font-bold">55%</h1>
        <progress value={70} max={100} 
        className="
            w-full h-2 rounded-full overflow-hidden appearance-none
            [&::-webkit-progress-bar]:bg-white/2
            [&::-webkit-progress-bar]:rounded-full
            [&::-webkit-progress-value]:bg-[#D4FB20]
            [&::-webkit-progress-value]:rounded-full
            [&::-moz-progress-bar]:bg-[#D4FB20]
            bg-white/2
        "
        ></progress>
    </div>
  )
}

export default LearningProgress
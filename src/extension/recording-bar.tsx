
const RecorderBar = () => {
    return ( <div className="absolute flex items-center justify-center bottom-10 w-full h-[50px]">
        <div className="flex gap-4 p-3 items-center justify-center rounded-full bg-[#141414] max-w-[400px] w-full">
            <div className="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white">
                <img src="/pause.svg" alt="" className="w-[16px] h-[16px]" />
            </div>
            <div className="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white">
                <img src="/stop.svg" alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white">
                <img src="/video.svg" alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white">
                <img src="/audio.svg" alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white/30">
                <img src="/delete.svg" alt="" className="w-[18px] h-[18px]" />
            </div>
        </div>
    </div> );
}
 
export default RecorderBar;
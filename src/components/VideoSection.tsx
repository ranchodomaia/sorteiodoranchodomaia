const VideoSection = () => {

    return (
        <div>
            <div>
                <div className="flex items-center mt-10 max-w-[75%] md:max-w-[40%] mx-auto gap-2 bg-black rounded-md">
                    <video className="border-0 w-full h-auto m-0 object-fill " src="/criativo.mp4" controls loop onClick={(e) => e.currentTarget.play()} />
                    
                </div>
                <div className="flex items-center justify-center gap-2 mt-5">
                <img src="group.png" className="w-4 h-4" />
                <p className="font-bold">SORTEIO LIMITADO</p>
                <img src="group.png" className="w-4 h-4" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 max-w-[90%] md:max-w-[35%] mx-auto">
                    <div className="bg-red-600 h-4 max-w-[21%] rounded-full"></div>
                </div>
                <div className="flex justify-between max-w-[90%] md:max-w-[35%] mx-auto mt-2 text-[12px]">
                    <p>
                        109.371
                    </p>
                    <p>
                        1.000.000
                    </p>
                </div>
            </div>
        </div>

    )
}

export default VideoSection;
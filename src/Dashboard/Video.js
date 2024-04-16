import videoSrc from "../img/TCLpres.mp4"; // Assuming the video file is named "TCLpres.mp4"

const Video = () => {
    return (
        <div className="video mt-2 flex justify-center items-center ">
            <video className=" ml-1 xl:w-[80%]" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video;

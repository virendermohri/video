export default function VideoPlayer({ src }) {
    return (

      <div className="md:w-[70%] aspect-video  ">
        <video
          className=" h-70 md:h-full w-full  object-contain rounded bg-black"
          controls
          preload="metadata"
        disablePictureInPicture
        controlsList="nodownload"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
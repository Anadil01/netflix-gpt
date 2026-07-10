function VideoTitle({ title, overview }) {
    return (
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black via-black/40 to-transparent text-white">
        <div className="pt-60 px-16 w-2/5">
          <h1 className="text-6xl font-bold">
            {title}
          </h1>
  
          <p className="py-6 text-lg leading-7">
            {overview}
          </p>
  
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md text-xl font-semibold hover:bg-gray-300 transition duration-200">
              ▶ Play
            </button>
  
            <button className="flex items-center gap-2 bg-gray-500/70 text-white px-8 py-3 rounded-md text-xl font-semibold hover:bg-gray-500 transition duration-200">
              ℹ More Info
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default VideoTitle;
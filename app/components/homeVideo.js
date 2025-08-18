import Link from "next/link";

function HomeVideo() {
  return (
    <div className="relative h-[700px] video-box p-16">
      <div>
        <h2 className="heading1-hero ">Crystal clarity</h2>
        <h3 className="heading2-hero pb-8">
          A display that reveals every detail
        </h3>
        <Link href="#" className="cta cta2 w-fit">
          Shop
        </Link>
        <p className="pt-10">
          True-to-life colors and seamless motion make every moment feel more
          real than ever before.
        </p>
      </div>
      <video
        src="/video1.mp4"
        playsInline
        autoPlay
        muted
        loop
        // className="w-full h-[700px]"
        className="video-bg"
      />
    </div>
  );
}

export default HomeVideo;

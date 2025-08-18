import Image from "next/image";
import KV2 from "@/public/kv2.jpg";
import Link from "next/link";

function HomeKv2() {
  return (
    <div className="relative text-center min-h-[700px] flex flex-col justify-between py-16">
      <div>
        <h1 className="heading1-hero">MacBook Air</h1>
        <h2 className="heading2-hero">Sky blue color.</h2>
        <h2 className="heading2-hero">Sky high performance with M4.</h2>
        <div className="cta-box">
          <Link href="#" className="cta cta1">
            Learn More
          </Link>
          <Link href="#" className="cta cta2">
            Shop iPhone
          </Link>
        </div>
      </div>
      <div>
        <h3 className="heading3-hero">Built for Apple Intelligence.</h3>
      </div>

      <Image
        src={KV2}
        alt="kv"
        quality={100}
        fill
        objectPosition="center"
        objectFit="cover"
        className="z-[-1]"
      />
    </div>
  );
}

export default HomeKv2;

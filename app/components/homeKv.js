import Image from "next/image";
import KV1 from "@/public/kv1.jpg";
import KV1md from "@/public/kv1md.jpg";
import KV1sm from "@/public/kv1sm.jpg";
import Link from "next/link";

function HomeKv() {
  return (
    <div className="pt-[44px]">
      <div className="relative text-center min-h-[700px] max-xl:min-h-[540px] max-sm:min-h-[85vh] py-16">
        <h1 className="heading1-hero">iPhone</h1>
        <h2 className="heading2-hero">Meet the iPhone 16 family.</h2>
        <div className="cta-box">
          <Link href="#" className="cta cta1">
            Learn More
          </Link>
          <Link href="#" className="cta cta2">
            Shop iPhone
          </Link>
        </div>
        <div>
          <h3 className="heading3-hero">Built for Apple Intelligence.</h3>
        </div>

        <Image
          src={KV1}
          alt="kv"
          quality={100}
          fill
          objectPosition="center"
          objectFit="cover"
          className="z-[-1] max-xl:hidden"
        />
        <Image
          src={KV1md}
          alt="kv"
          quality={100}
          fill
          objectPosition="center"
          objectFit="cover"
          className="z-[-1] max-sm:hidden min-xl:hidden"
        />
        <Image
          src={KV1sm}
          alt="kv"
          quality={100}
          fill
          objectPosition="center"
          objectFit="cover"
          className="z-[-1] min-sm:hidden"
        />
      </div>
    </div>
  );
}

export default HomeKv;

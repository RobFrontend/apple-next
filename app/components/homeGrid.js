import Grid1 from "@/public/grid1.jpg";
import Grid2 from "@/public/grid2.jpg";
import Grid3 from "@/public/grid3.jpg";
import Grid4 from "@/public/grid4.jpg";
import Grid5 from "@/public/grid5.jpg";
import Grid6 from "@/public/grid6.jpg";
import Image from "next/image";
import Link from "next/link";

function HomeGrid() {
  return (
    <div className="px-6 grid grid-cols-2 gap-6">
      <div className="grid-textbox justify-between">
        <div className="text-white">
          <h3>iPad Pro</h3>
          <p>Unbelievably thin. Incredibly powerful.</p>
          <div className="cta-box grid-cta-box">
            <Link href="#" className="cta cta1 grid-cta">
              Learn More
            </Link>
            <Link href="#" className="cta cta2 grid-cta">
              Buy
            </Link>
          </div>
        </div>
        <div>
          <h3 className="heading3-hero">Built for Apple Intelligence.</h3>
        </div>
        <Image
          src={Grid1}
          fill
          alt="xd"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1]"
        />
      </div>
      <div className="grid-textbox justify-between">
        <div className="text-white">
          <h3>MacBook Pro</h3>
          <p>A work of smart.</p>
          <div className="cta-box grid-cta-box">
            <Link href="#" className="cta cta1 grid-cta">
              Learn More
            </Link>
            <Link href="#" className="cta cta2 grid-cta">
              Buy
            </Link>
          </div>
        </div>
        <div>
          <h3 className="heading3-hero">Built for Apple Intelligence.</h3>
        </div>
        <Image
          src={Grid2}
          fill
          alt="xd"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1]"
        />
      </div>
      <div className="grid-textbox justify-end">
        <div className="text-white">
          <h3>AirPods Pro 2</h3>
          <p>Now with a Hearing Aid feature.</p>
          <div className="cta-box grid-cta-box">
            <Link href="#" className="cta cta1 grid-cta">
              Learn More
            </Link>
            <Link href="#" className="cta cta2 grid-cta">
              Buy
            </Link>
          </div>
        </div>

        <Image
          src={Grid3}
          fill
          alt="xd"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1]"
        />
      </div>
      <div className="grid-textbox">
        <div>
          <h3>Apple Watch Series 10</h3>
          <p>Thinstant classic.</p>
          <div className="cta-box grid-cta-box">
            <Link href="#" className="cta cta1 grid-cta">
              Learn More
            </Link>
            <Link href="#" className="cta cta2 grid-cta">
              Buy
            </Link>
          </div>
        </div>

        <Image
          src={Grid4}
          fill
          alt="xd"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1]"
        />
      </div>
      <div className="grid-textbox">
        <div>
          <h3>Apple Trade In</h3>
          <p>
            Get $160-$600 in credit when you <br></br>trade in iPhone 12 or
            higher.
          </p>
          <div className="cta-box grid-cta-box">
            <Link href="#" className="cta cta1 grid-cta">
              Get your estimate
            </Link>
          </div>
        </div>

        <Image
          src={Grid5}
          fill
          alt="xd"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1]"
        />
      </div>
      <div className="grid-textbox">
        <div>
          <h3>Apple Card</h3>
          <p>Get up to 3% Daily Cash back with every purchase.</p>
          <div className="cta-box grid-cta-box">
            <Link href="#" className="cta cta1 grid-cta">
              Learn More
            </Link>
            <Link href="#" className="cta cta2 grid-cta">
              Apply Now
            </Link>
          </div>
        </div>

        <Image
          src={Grid6}
          fill
          alt="xd"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1]"
        />
      </div>
    </div>
  );
}

export default HomeGrid;

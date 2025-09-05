import Link from "next/link";

function Footer() {
  return (
    <div className="footer-section flex content-center justify-center">
      <div className="footer-box flex flex-col">
        <div className="footer-border pb-8">
          <p className="footer-copy">
            This project is created for learning purposes only. All product
            names, images, and content belong to Apple Inc (except video). I do
            not claim any ownership or rights to the materials shown here.
            Original content can be found on apple.com.
          </p>
        </div>
        <div className="footer-border py-8 flex w-full gap-8 justify-between max-md:hidden">
          <div className="flex flex-col gap-3">
            <p className="footer-title">Shop and Learn</p>
            <Link href="#">Store</Link>
            <Link href="#">Mac</Link>
            <Link href="#">iPad</Link>
            <Link href="#">iPhone</Link>
            <Link href="#">Watch</Link>
            <Link href="#">Vision</Link>
            <Link href="#">AirPods</Link>
            <Link href="#">Accessories</Link>
            <Link href="#">Gift Cards</Link>
            <p className="footer-title pt-5">Apple Wallet</p>
            <Link href="#">Wallet</Link>
            <Link href="#">Apple Card</Link>
            <Link href="#">Apple Pay</Link>
            <Link href="#">Apple Cash</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="footer-title">Account</p>
            <Link href="#">Manage Your Apple Account</Link>
            <Link href="#">Apple Store Account</Link>
            <Link href="#">iCloud.com</Link>
            <p className="footer-title pt-5">Entertainment</p>
            <Link href="#">Apple One</Link>
            <Link href="#">Apple TV+</Link>
            <Link href="#">Apple Music</Link>
            <Link href="#">Apple Arcade</Link>
            <Link href="#">Apple Fitness+</Link>
            <Link href="#">App Store</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="footer-title">Apple Store</p>
            <Link href="#">Find a Store</Link>
            <Link href="#">Genius Bar</Link>
            <Link href="#">Today at Apple</Link>
            <Link href="#">Group Reservations</Link>
            <Link href="#">Apple Camp</Link>
            <Link href="#">Apple Store App</Link>
            <Link href="#">Shopping Help</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="footer-title">For Business</p>
            <Link href="#">Apple and Business</Link>
            <Link href="#">Shop for Business</Link>
            <p className="footer-title pt-5">For Education</p>
            <Link href="#">Apple and Education</Link>
            <Link href="#">Shop for College</Link>
            <p className="footer-title pt-5">For Healthcare</p>
            <Link href="#">Apple and Healthcare</Link>

            <p className="footer-title pt-5">For Government</p>
            <Link href="#">Apple and Government</Link>
            <Link href="#">Shop for Veterans and Military</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="footer-title">Apple Values</p>
            <Link href="#">Accessibility</Link>
            <Link href="#">Education</Link>
            <Link href="#">Environment</Link>
            <Link href="#">Privacy</Link>
            <p className="footer-title pt-5">About Apple</p>
            <Link href="#">Newsroom</Link>
            <Link href="#">Apple Leadership</Link>
            <Link href="#">Career Opportunities</Link>
            <Link href="#">Events</Link>
          </div>
        </div>
        <div className="footer-border py-8 grid grid-cols-3 w-full gap-8 justify-between min-md:hidden">
          <div className="flex flex-col gap-3">
            <p className="footer-title">Shop and Learn</p>
            <Link href="#">Store</Link>
            <Link href="#">Mac</Link>
            <Link href="#">iPad</Link>
            <Link href="#">iPhone</Link>
            <Link href="#">Watch</Link>
            <p className="footer-title pt-5">Apple Wallet</p>
            <Link href="#">Wallet</Link>
            <Link href="#">Apple Card</Link>
            <Link href="#">Apple Pay</Link>
            <Link href="#">Apple Cash</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="footer-title">Account</p>
            <Link href="#">Manage Your Apple Account</Link>
            <Link href="#">Apple Store Account</Link>
            <Link href="#">iCloud.com</Link>
            <p className="footer-title pt-5">Entertainment</p>
            <Link href="#">Apple One</Link>
            <Link href="#">Apple TV+</Link>
            <Link href="#">Apple Music</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="footer-title">For Business</p>
            <Link href="#">Apple and Business</Link>
            <Link href="#">Shop for Business</Link>
            <p className="footer-title pt-5">For Education</p>
            <Link href="#">Apple and Education</Link>
            <Link href="#">Shop for College</Link>
            <p className="footer-title pt-5">For Healthcare</p>
            <Link href="#">Apple and Healthcare</Link>

            <p className="footer-title pt-5">For Government</p>
            <Link href="#">Apple and Government</Link>
            <Link href="#">Shop for Veterans and Military</Link>
          </div>
        </div>
        <div className="pt-8">
          <p className="footer-copy">
            &copy; 2025 Educational Project. This website is a non-commercial
            clone of Apple&apos;s site, created for learning purposes only. All
            rights and content belong to Apple Inc. Original materials are
            available at apple.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

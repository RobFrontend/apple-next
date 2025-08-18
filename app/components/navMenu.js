import Link from "next/link";

function NavMenu() {
  return (
    <div className="flex items-center gap-12">
      <Link href="#">Store</Link>
      <Link href="#">Mac</Link>
      <Link href="#">iPad</Link>
      <Link href="#">iPhone</Link>
      <Link href="#">Watch</Link>
      <Link href="#">AirPods</Link>
      <Link href="#">TV & Home</Link>
      <Link href="#">Entertainment</Link>
      <Link href="#">Accessories</Link>
      <Link href="#">Support</Link>
    </div>
  );
}

export default NavMenu;

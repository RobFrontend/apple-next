import Image from "next/image";
import KV1 from "@/public/kv1.jpg";
import Link from "next/link";
import HomeKv from "./components/homeKv";
import HomeKv2 from "./components/homeKv2";
import HomeGrid from "./components/homeGrid";
import HomeVideo from "./components/homeVideo";
import SeriesCarousel from "./components/seriesCarousel";
import Cards from "./components/cards";

export default function Home() {
  return (
    <>
      <section>
        <HomeKv />
      </section>
      <section className="p-3"></section>
      <section>
        <HomeVideo />
      </section>
      <section className="p-3"></section>
      <section>
        <HomeKv2 />
      </section>
      <section className="p-3"></section>
      <HomeGrid />
      <section className="p-3"></section>
      <SeriesCarousel />
      <section className="p-3"></section>
      <Cards />
      <section className="p-3"></section>
      <section className="p-3"></section>
      <section className="p-3"></section>
      <section className="p-3"></section>
      <footer></footer>
    </>
  );
}

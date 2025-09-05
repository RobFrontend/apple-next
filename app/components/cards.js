import Image from "next/image";
import doNow from "../doNow/doNow";

function Cards() {
  const cardsArr = doNow;

  return (
    <div className="carousel">
      <div className="group">
        {cardsArr.map((card) => (
          <div
            key={card.id}
            className="px-3 w-[400px] max-xl:w-[300px] max-md:w-[250px] relative"
          >
            <Image
              src={card.asset}
              width={400}
              height={300}
              alt={card.title}
              className="card"
            />
            <p className="card-text text-white z-[2]">{card.title}</p>
          </div>
        ))}
      </div>
      <div aria-hidden className="group">
        {cardsArr.map((card) => (
          <div
            key={card.id}
            className="px-3 w-[400px] max-xl:w-[300px] max-md:w-[250px] relative"
          >
            <Image
              src={card.asset}
              width={400}
              height={300}
              alt={card.title}
              className="card"
            />
            <p className="card-text text-white z-[2]">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

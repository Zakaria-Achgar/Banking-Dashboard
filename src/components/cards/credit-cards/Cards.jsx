import CardItem from "./CardItem";
import { creditCards } from "../../../data/cards";

const Cards = () => {
  return (
    <div className="mt-4">
      <h1 className="font-semibold text-2xl mb-3">My Cards</h1>
      <section className="flex gap-2 w-full">
        {creditCards.map((card) => (
          <CardItem card={card} key={card.id} />
        ))}
      </section>
    </div>
  );
};

export default Cards;

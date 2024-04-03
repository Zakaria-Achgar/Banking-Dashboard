import CardsItem from "./StatisticsItem";
import { statistics } from "../../../data/statistics";

const StatisticsCards = () => {
  return (
    <section>
      <h1 className="font-semibold text-2xl p-4" style={{ marginLeft:-18  }}>Statistics</h1>
      <section className="grid grid-cols-2 gap-2" >
        {statistics.map((statistic) => (
          <CardsItem statistic={statistic} key={statistic.id} />
        ))}
      </section>
    </section>
  );
};

export default StatisticsCards;

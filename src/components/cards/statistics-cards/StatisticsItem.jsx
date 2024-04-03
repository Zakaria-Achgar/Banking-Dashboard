const StatisticsItem = ({ statistic }) => {
  return (
    <section
      className="flex border rounded-lg gap-8 p-4 "
      style={{
        height: "110px",
      }}
    >
      <div className="font-semibold text-xl ">
        <h2>{statistic.name}</h2>
        <h3 style={{ marginTop: "12px" }}>{statistic.balance}</h3>
      </div>
      <div className="" style={{ flex: "auto" }}>
        <h4
          className={`flex justify-end text-green-400 font-semibold ${
            statistic.type === "percentage" ? "text-red-500" : "text-green-500"
          }`}
        >
          {statistic.percentage}
        </h4>
        <p className="flex justify-end font-medium" 
          style={{ color: "#909AA5" }}
        >{statistic.status}</p>
      </div>
    </section>
  );
};

export default StatisticsItem;

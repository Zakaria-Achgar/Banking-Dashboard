const CardItem = ({ card }) => {
  return (
    <div
      className={`${
        card.isPrimary ? "bg-dark-blue" : "bg-gray-500"
      } flex-initial text-white p-6 rounded-xl`}
      style={{
        width: card.isPrimary ? "400px" : "200px",
        height: card.isPrimary ? "230px" : "auto",
      }}
    >
      <h2 className="font-semibold text-lg	">{card.name}</h2>
      <div>
        <h4 className="text-gray-300 text-lg">Balance</h4>
        <p className="font-bold text-2xl">{card.balance}</p>
      </div>
      <h3 className="font-bold text-2xl mt-2	">{card.last_four}</h3>
      <div className="flex justify-between  items-center	">
        <div>
          <h4 className="font-semibold text-base	">Expiry Date</h4>
          <p className="font-medium">{card.expiry_date}</p>
        </div>
        <div>
          <img
            className=""
            style={{ width: "50px", height: "50px" }}
            src={card.icon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;

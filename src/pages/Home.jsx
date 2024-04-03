import Layout from "../components/Layout";
import CreditCards from "../components/cards/credit-cards/Cards";
import TransactionTable from "../components/tables/transactions-table";
import Statistics from "../components/cards/statistics-cards/StatisticsCards";
import LineChart from "../components/LineChart";
// import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";


const HomePage = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="">
          <h1 className="text-2xl font-semibold">Banking Dashboard</h1>
        </div>
        <div className="flex gap-2 " style={{ marginLeft:'auto'}}>
          <input
            type="text"
            placeholder="Search"
            className="rounded-xl items-center bg-gray-100 w-56"
          />
          {/* <CiSearch /> */}
          <IoIosNotificationsOutline className="text-4xl items-center" />
          <img
                src="https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?t=st=1712074465~exp=1712078065~hmac=d69bdf4e340e6b44d05fa5f3d80d76032a3b0d37770d5fb97ab286e3bc53235c&w=740"
                className="w-12 rounded-full	"
              />
        </div>
      </div>
      <section className="grid grid-rows-2 grid-cols-2 gap-2 rounded-2xl	">
        <CreditCards />
        <Statistics />
        <LineChart />
        <TransactionTable />
      </section>
    </Layout>
  );
};

export default HomePage;

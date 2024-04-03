import { sidebarMenu } from "../data/sidebarMenu";
import { GoSignOut } from "react-icons/go";

const Sidebar = () => {
  return (
    <aside className="flex">
      <div className="bg-gray-50 p-5 pt-8 relative duration-300 h-auto w-60">
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/Effyis-group.png"
            className="cursor-pointer duration-500"
          />
        </div>
        <ul className="pt-6 ">
          {sidebarMenu.map(({ id, title, icon: Icon }) => (
            <li
              key={id}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black-300 text-xl	font-medium	 items-center gap-x-4 
              ${id === 0 ? "bg-primary text-white" : ""} `}
            >
              <Icon size={22} />
              <span className="origin-left duration-200">{title}</span>
            </li>
          ))}
        </ul>
        <ul className="absolute bottom-0">
          <li className="flex text-xl font-medium items-center gap-x-4 mt-72">
            <GoSignOut />
            <h1>Sign Out</h1>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

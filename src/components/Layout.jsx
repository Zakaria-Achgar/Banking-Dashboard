import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex">
      <Sidebar />
      <section className="flex-1 p-5">
        {children}
      </section>
    </main>
  );
};

export default Layout;

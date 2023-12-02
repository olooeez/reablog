import Banner from "../Banner";
import { Outlet } from "react-router-dom";

const DefaultPage = () => {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
};

export default DefaultPage;

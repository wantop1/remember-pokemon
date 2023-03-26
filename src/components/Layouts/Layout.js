import MainHeader from "./Header/MainHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default Layout;

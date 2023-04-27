import MainHeader from "./Header/MainHeader";
import HeaderNavigator from "./Header/HeaderNavigator";
import { Outlet } from "react-router-dom";
import MenuButton from "../UI/Button/MenuButton";
import LogoButton from "../UI/Button/LogoButton";
import { useState } from "react";

const Layout = () => {
  const [openMenu,setOpenMenu] = useState(false);

  const MenuOpenHandler = ()=> {
    console.log('menu Click');
  }

  return (
    <>
      <MainHeader isOpen={openMenu}>
        <MenuButton onClick={MenuOpenHandler}/>
        <LogoButton />
        <HeaderNavigator />
      </MainHeader>
      <Outlet />
    </>
  );
};

export default Layout;

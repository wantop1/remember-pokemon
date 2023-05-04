import { useState } from "react";
import { Outlet } from "react-router-dom";

import Flex from "../UI/Flex";
import DesktopNavigator from "./Header/DesktopNavigator";
import MobileNavigator from "./Header/MobileNavigator";
import MainHeader from "./Header/MainHeader";
import MenuButton from "../UI/Button/MenuButton";
import LogoButton from "../UI/Button/LogoButton";
import PokemonSearchInput from "../UI/Input/PokemonSearchInput";

import { HEADER_BG_COLOR } from "../../constants/color";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const MenuOpenToggle = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const MenuCloseHandler = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <MainHeader>
        <Flex>
          <MenuButton onClick={MenuOpenToggle} />
          <MobileNavigator isOpened={openMenu} close={MenuCloseHandler} />
        </Flex>

        <LogoButton />

        <PokemonSearchInput/>

        <Flex
          justifyContent="flex-end"
          width="100vw"
          backgroundColor={HEADER_BG_COLOR}
        >
          <DesktopNavigator />
        </Flex>
      </MainHeader>
      <Outlet />
    </>
  );
};

export default Layout;

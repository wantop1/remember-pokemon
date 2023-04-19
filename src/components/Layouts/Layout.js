import MainHeader from "./Header/MainHeader";
import HeaderNavigator from "./Header/HeaderNavigator";
import { Outlet } from "react-router-dom";
import { POKEMON_LOGO_URL } from "../../constants/image";
import ImageButton from "../UI/ImageButton";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MainHeader>
        <Link to="/">
          <ImageButton src={POKEMON_LOGO_URL} alt="logo"/>
        </Link>
        <HeaderNavigator/>
      </MainHeader>
      <Outlet />
    </>
  );
};

export default Layout;

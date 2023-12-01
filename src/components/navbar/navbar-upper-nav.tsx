import NavBarLogo from "./navbar-logo";
import NavLeftIcons from "./navbar-left-icons";
import NavRightIcons from "./navbar-right-icons";
import useScreenSize from "../utils/use-screen-size";
import { LogoDark, LogoDarkSmall } from "../neo-design/icons/icons";

const NavBarUpperNav = () => {
  const screenSize = useScreenSize();

  return <>

    <NavLeftIcons />

    {screenSize.width <= 768 ? 
      <div style={{paddingLeft: 16}}><LogoDarkSmall /></div> : 
      <NavBarLogo width={180} height={48}/>
    }

    <NavRightIcons />

  </>
}

export default NavBarUpperNav;
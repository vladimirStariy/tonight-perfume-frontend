import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/navbar.module.css';
import Nav from "react-bootstrap/Nav";
import DropDownLink from "../neo-design/testdropdown/dropdown";
import DropDownCollapsedLink from "../neo-design/testdropdown/dropdown.collapsed";

interface LinkProps {
    link_type: string;
    handleExpand?: () => void;
    isCollapsed?: boolean;
}

const NavBarLinks: FC<LinkProps> = (props) => {
  
  return (
    <Nav className={styles.fullwidt}>
        <ul className={`nav font-manrope ${props.link_type === 'COL' ? styles.zvzcCOL : 'nav-underline ' + styles.zvzcROW }`}>
            <li className="nav-item">
                {props.isCollapsed ? 
                    <>
                        <DropDownCollapsedLink class={styles.navLink} />
                    </> 
                :
                <>
                    <DropDownLink class={styles.navLink} />
                </>
                    
                }
                
            </li>
            <li className="nav-item">
                <Nav.Link onClick={props.handleExpand} to="/delivery" as={NavLink} className={styles.navLink}>
                    Доставка
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link onClick={props.handleExpand} to="/client" as={NavLink} className={styles.navLink}>
                    Клиенту
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link onClick={props.handleExpand} to="/for-order" as={NavLink} className={styles.navLink}>
                    Под заказ
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link onClick={props.handleExpand} to="/novelties" as={NavLink} className={styles.navLink}>
                    Новинки
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link onClick={props.handleExpand} to="/stock" as={NavLink} className={styles.navLink}>
                    Скидки
                </Nav.Link>
            </li>
        </ul>
    </Nav>
  )
}

export default NavBarLinks;

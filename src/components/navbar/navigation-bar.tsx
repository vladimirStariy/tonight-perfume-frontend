import { FC, useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap";

import NavBarLinks from "./navbar-links";

import styles from './custom.module.css';

import useScreenSize from '../utils/use-screen-size';
import NavBarUpperNav from "./navbar-upper-nav";

const NavBar: FC = () => {
  const [expanded, setExpanded] = useState(false);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const screenSize = useScreenSize();

  return (
    <>
      <Navbar 
        expanded={expanded}
        sticky="top"
        expand='md'        
        className={`bg-body ${screenSize.width > 768 ? (isHovering && lastScrollY > 1 ? styles.xzxcMod : styles.xzxc) : styles.xzxc}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Container fluid className={styles.xcxb}>
          <Nav className={styles.xcxn}>
            <NavBarUpperNav />
            <Navbar.Toggle onClick={() => setExpanded(true)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_872_223)">
                  <path d="M1.73333 21.3334H22.2667C22.4612 21.3334 22.6477 21.2561 22.7852 21.1186C22.9227 20.9811 23 20.7945 23 20.6C23 20.4055 22.9227 20.219 22.7852 20.0815C22.6477 19.944 22.4612 19.8667 22.2667 19.8667H1.73333C1.53884 19.8667 1.35231 19.944 1.21479 20.0815C1.07726 20.219 1 20.4055 1 20.6C1 20.7945 1.07726 20.9811 1.21479 21.1186C1.35231 21.2561 1.53884 21.3334 1.73333 21.3334Z" fill="#1E1E1E" stroke="#1E1E1E" strokeWidth="0.44"/>
                  <path d="M10.24 12.8666H22.56C22.6767 12.8666 22.7886 12.7893 22.8711 12.6518C22.9536 12.5143 23 12.3277 23 12.1332C23 11.9387 22.9536 11.7522 22.8711 11.6147C22.7886 11.4772 22.6767 11.3999 22.56 11.3999H10.24C10.1233 11.3999 10.0114 11.4772 9.92887 11.6147C9.84636 11.7522 9.8 11.9387 9.8 12.1332C9.8 12.3277 9.84636 12.5143 9.92887 12.6518C10.0114 12.7893 10.1233 12.8666 10.24 12.8666Z" fill="#1E1E1E" stroke="#1E1E1E" strokeWidth="0.44"/>
                  <path d="M1.73333 4.39977H22.2667C22.4612 4.39977 22.6477 4.32251 22.7852 4.18498C22.9227 4.04746 23 3.86093 23 3.66644C23 3.47195 22.9227 3.28542 22.7852 3.14789C22.6477 3.01037 22.4612 2.93311 22.2667 2.93311H1.73333C1.53884 2.93311 1.35231 3.01037 1.21479 3.14789C1.07726 3.28542 1 3.47195 1 3.66644C1 3.86093 1.07726 4.04746 1.21479 4.18498C1.35231 4.32251 1.53884 4.39977 1.73333 4.39977Z" fill="#1E1E1E" stroke="#1E1E1E" strokeWidth="0.44"/>
                </g>
                <defs>
                  <clipPath id="clip0_872_223">
                    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"/>
                  </clipPath>
                </defs>
              </svg>
            </Navbar.Toggle>
          </Nav>
        </Container>

        {
          isHovering && lastScrollY > 1 && screenSize.width > 768 ? 
            <Navbar className={`bg-body ${styles.mnvb}`}>
              <Container fluid>
                <Nav className={styles.bottomNav}>
                  <NavBarLinks link_type="ROW"/>
                </Nav>
              </Container>
            </Navbar> : <></> 
        }

        {
          screenSize.width > 768 ? 
            <></> : 
              <Navbar.Collapse className={styles.topPadding} id="navbarSupportedContent">
                <Nav navbarScroll className={styles.subBottomNav}>
                  <NavBarLinks isCollapsed={true} handleExpand={() => setExpanded(false)} link_type="COL"/>
                </Nav>
              </Navbar.Collapse>
        }
      </Navbar>
      {screenSize.width > 768 ? 
        <Navbar className={`bg-body ${styles.mnvb}`}>
          <Container fluid >
            <Nav className={styles.bottomNav}>
              <NavBarLinks link_type="ROW"/>
            </Nav>
          </Container>
        </Navbar> : <></>
      }
    </>
  )
}

export default NavBar;

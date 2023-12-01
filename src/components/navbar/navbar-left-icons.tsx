import { FC } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import useScreenSize from "../utils/use-screen-size";

import styles from './uppernav.module.css';
import PhoneDropdown from './phone.dropdown';

const NavLeftIcons:FC = () => {
    const screenSize = useScreenSize();

    return <>
    {screenSize.width > 768 ? 
      <Nav>
        <Nav.Link className={styles.mlmrightitem}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0089 2.54516C22.6869 2.54516 23.1983 3.18956 22.9247 4.38815L19.6064 21.3359C19.3744 22.5409 18.7024 22.8309 17.7747 22.2703L9.8594 15.9358C9.8287 15.912 9.80369 15.8805 9.78644 15.8441C9.76919 15.8077 9.76019 15.7673 9.76019 15.7264C9.76019 15.6855 9.76919 15.6451 9.78644 15.6087C9.80369 15.5723 9.8287 15.5408 9.8594 15.517L17.1384 7.86147L6.89189 14.1831C6.8571 14.2076 6.8176 14.2233 6.77638 14.2289C6.73517 14.2345 6.69332 14.2298 6.65402 14.2153L1.7835 12.5463C0.701163 12.2047 0.701163 11.3992 2.02732 10.8257L21.5153 2.68048C21.6699 2.60014 21.8377 2.55413 22.0089 2.54516Z" stroke="black" stroke-width="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Nav.Link>
        <Nav.Link className={styles.mlmrightitem}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 6.83088H18.4286M7.71429 2.54517H16.2857C17.8012 2.54517 19.2547 3.14721 20.3263 4.21884C21.398 5.29048 22 6.74393 22 8.25945V16.8309C22 18.3464 21.398 19.7999 20.3263 20.8715C19.2547 21.9431 17.8012 22.5452 16.2857 22.5452H7.71429C6.19876 22.5452 4.74531 21.9431 3.67368 20.8715C2.60204 19.7999 2 18.3464 2 16.8309V8.25945C2 6.74393 2.60204 5.29048 3.67368 4.21884C4.74531 3.14721 6.19876 2.54517 7.71429 2.54517ZM12 16.8309C10.8634 16.8309 9.77327 16.3794 8.96954 15.5756C8.16582 14.7719 7.71429 13.6818 7.71429 12.5452C7.71429 11.4085 8.16582 10.3184 8.96954 9.51471C9.77327 8.71098 10.8634 8.25945 12 8.25945C13.1366 8.25945 14.2267 8.71098 15.0305 9.51471C15.8342 10.3184 16.2857 11.4085 16.2857 12.5452C16.2857 13.6818 15.8342 14.7719 15.0305 15.5756C14.2267 16.3794 13.1366 16.8309 12 16.8309Z" stroke="black" strokeWidth="1.6"/>
          </svg>
        </Nav.Link>
        <PhoneDropdown />
      </Nav> : <></>
    }
    </>
}

export default NavLeftIcons;
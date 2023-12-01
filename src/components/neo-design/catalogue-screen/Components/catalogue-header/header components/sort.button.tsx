import { FC } from "react"
import NavDropdown from "react-bootstrap/NavDropdown";

import './sortbtn.css';

const SortButton: FC = () => {
    return <>
        <NavDropdown
            id="nav-dropdown-dark-example"
            title={ <>
                <div className='dropdownGap'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 4H1M23 12H9.25M23 20H17.5" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className='rightFilterLabel'>По популярности</div>
                </div>
            </>
            }
            menuVariant="dark"
        >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Separated link
            </NavDropdown.Item>
        </NavDropdown> 
    </>
}

export default SortButton;
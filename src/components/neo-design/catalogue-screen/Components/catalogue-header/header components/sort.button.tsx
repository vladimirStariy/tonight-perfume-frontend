import { FC, useState } from "react"
import NavDropdown from "react-bootstrap/NavDropdown";

import './sortbtn.css';

interface SortButtonProps {
    handleSetSortType: (text: string) => void;
}

const SortButton: FC<SortButtonProps> = (props) => {
    const [label, setLabel] = useState<string>('От А до Я');

    const handleSetLabel = (text: string, label: string) => {
        setLabel(label);
        props.handleSetSortType(text);
    }

    return <>
        <NavDropdown
            id="nav-dropdown-dark-example"
            className="sortDropdown"
            title={ <>
                <div className='dropdownGap'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 4H1M23 12H9.25M23 20H17.5" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className='rightFilterLabel'>{label}</div>
                </div>
            </>
            }
            menuVariant="light"
            drop="down-centered"
        >
            <NavDropdown.Item onClick={() => handleSetLabel('alph', 'От А до Я')} className="sortLink">От А до Я</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleSetLabel('priceASC', 'Цена, по возрастанию')} className="sortLink">Цена, по возрастанию</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleSetLabel('priceDESC', 'Цена, по убыванию')} className="sortLink">Цена, по убыванию</NavDropdown.Item>
        </NavDropdown> 
    </>
}

export default SortButton;
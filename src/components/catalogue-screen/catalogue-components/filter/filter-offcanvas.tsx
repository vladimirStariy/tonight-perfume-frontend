import { FC } from 'react';
import Offcanvas from "react-bootstrap/Offcanvas";
import ProductFilter from './filter';

interface IProps {
    handleClose: () => void;
    show: boolean;
}

const FilterOffcanvas: FC<IProps> = (props) => {
    return <>
        <Offcanvas show={props.show} onHide={props.handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Фильтры
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ProductFilter />
            </Offcanvas.Body>
        </Offcanvas>
    </>
}

export default FilterOffcanvas;
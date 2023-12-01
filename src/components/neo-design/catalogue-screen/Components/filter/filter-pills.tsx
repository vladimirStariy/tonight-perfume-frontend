import Nav from "react-bootstrap/Nav";
import FilterPillItem from "./filter-pill-item";

import styles from '../../../../styles/filter/filter.module.css';

import volumeFakeData from '../../../../../fakedatas/volumeFakeData';

const FilterPills = () => {
    return <>
        <Nav variant="pills" defaultActiveKey="/home" className={styles.pillContainer}>
            {volumeFakeData.map((volume) => (
                <FilterPillItem {...volume}/>
            ))}
        </Nav>
    </>
}

export default FilterPills;
import { FC } from "react";

import styles from './filter.pills.module.css';
import FilterPillItem from "../filter-pill-item/filter.pill.item";

interface FilterPillsProps {
    initialValues: number[];
    handleSelectValues: (value: number) => void;
    selected: number[];
}

const FilterPills: FC<FilterPillsProps> = (props) => {

    return <>
        <div className={styles.pillsWrapper}>
            {props.initialValues.map((item, index) => (
                <FilterPillItem 
                    key={index}
                    isActive={props.selected.includes(item)}
                    value={item}
                    handleClick={props.handleSelectValues}
                />
            ))}
        </div>
    </>
}

export default FilterPills;
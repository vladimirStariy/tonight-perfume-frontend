import { FC, useEffect, useState } from "react";

import styles from './filter.pill.item.module.css';

interface IFilterPillItem {
    isActive: boolean;
    value: number;
    handleClick: (value: number) => void;
} 

const FilterPillItem: FC<IFilterPillItem> = (props) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive(!isActive);
        props.handleClick(props.value);
    }

    useEffect(() => {
        if(props.isActive) setIsActive(true)
        else setIsActive(false);
    }, [props.isActive])

    return <div onClick={handleClick} className={`${styles.filterPill} ${isActive ? styles.activePill : ''}`}>
            <div className={styles.filterLabel}>{props.value} мл</div>
        </div>
    }

export default FilterPillItem;
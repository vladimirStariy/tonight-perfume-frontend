import { FC } from "react";

import styles from './filter.pill.item.module.css';

interface IFilterPillItem {
    value: number;
} 

const FilterPillItem: FC<IFilterPillItem> = (props) => {

    return <div className={styles.filterPill}>
            <div className={styles.filterLabel}>{props.value} мл</div>
        </div>
    }

export default FilterPillItem;
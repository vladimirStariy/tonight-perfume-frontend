import { FC } from 'react'

import FilterPills from "./filter-pills";

import Row from 'react-bootstrap/Row'

import styles from '../../../styles/filter/filter.module.css'

import FilterAccordion from './filter-accordion';
import FilterRangedSlider from './filter-ranged-slider';

const ProductFilter: FC = () => {
    return <>
        <div className={styles.filterContent}>
            <div className={styles.rangeSliderContainer}>
                <FilterRangedSlider />
                <Row className={styles.checkBtnGroup}>
                    <FilterPills />
                </Row>
            </div>
            <FilterAccordion />
        </div>
    </>
}

export default ProductFilter;
import { FC, useState } from 'react'

import FilterPills from "./filter-pills";

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

import styles from '../../../../styles/filter/filter.module.css'

import FilterAccordion from './filter-accordion';
import FilterRangedSlider from './filter-ranged-slider';

import { IFilterRequest } from "../../../../../store/models/filter/IFIlterRequest";
import { filterAPI } from '../../../../../services/filter.service';
import FilterPillItem from './filter-pills/filter-pill-item/filter.pill.item';

interface IProductFilter {
    handleBrand: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCountry: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNotes: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleGroup: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheckData: () => void;
}

const ProductFilter: FC<IProductFilter> = (props) => {
    return <>
        <FilterPillItem value={2}/>
        <div className={styles.filterContent}>
            <div className={styles.rangeSliderContainer}>
                <FilterRangedSlider />
                <Row className={styles.checkBtnGroup}>
                    <FilterPills />
                </Row>
            </div>
            <FilterAccordion
                handleBrand={props.handleBrand}
                handleCategory={props.handleCategory}
                handleGroup={props.handleGroup}
                handleCountry={props.handleCountry}
                handleNotes={props.handleNotes}
                handleCheckData={props.handleCheckData}
            />
        </div>
    </>
}

export default ProductFilter;
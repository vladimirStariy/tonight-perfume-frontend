import { FC, useEffect, useMemo, useState } from "react";

import RangeSlider from 'react-slider';

import styles from '../../../../styles/filter/ranged.slider.module.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface RangedSliderProps {
    minPrice: number;
    maxPrice: number;
    values: number[];
    handleSetPrice: (value: number[]) => void;
}

const FilterRangedSlider: FC<RangedSliderProps> = (props) => {
    const handleChangePrice = (e: number[]) => {
        props.handleSetPrice(e)
    }

    const minPrice = useMemo(() => {
        return props.minPrice;
    }, [props.minPrice])

    const maxPrice = useMemo(() => {
        return props.maxPrice;
    }, [props.maxPrice])

    return <>
        <b className={styles.rangeFilterLabel}>Цена и объём</b>
        
        <div className={styles.rangeFilterSlider}>
            <Row className={styles.rngFltValues}>
                <Col className={styles.startPrice}>{props.values[0] / 100} BYN</Col>
                <Col className={styles.endPrice}>{props.values[1]  / 100} BYN</Col>
            </Row>
            
            <RangeSlider
                className={`rangeSlider ${styles.sliderOpt}`}
                onChange={handleChangePrice}
                value={props.values}
                min={minPrice}
                max={maxPrice}
            />
        </div>
    </>
}

export default FilterRangedSlider;
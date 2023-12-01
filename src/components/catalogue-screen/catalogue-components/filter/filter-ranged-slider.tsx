import { FC, useState } from "react";

import RangeSlider from 'react-slider';

import styles from '../../../styles/filter/ranged.slider.module.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MIN = 100;
const MAX = 1000;

const FilterRangedSlider: FC = () => {
    const [values, setValues] = useState([MIN, MAX])

    return <>
        <b className={styles.rangeFilterLabel}>Цена и объём</b>
        
        <div className={styles.rangeFilterSlider}>
            <Row className={styles.rngFltValues}>
                <Col className={styles.startPrice}>{values[0]} BYN</Col>
                <Col className={styles.endPrice}>{values[1]} BYN</Col>
            </Row>
            
            <RangeSlider
                className={`rangeSlider ${styles.sliderOpt}`}
                onChange={setValues}
                value={values}
                min={MIN}
                max={MAX}
            />
        </div>
    </>
}

export default FilterRangedSlider;
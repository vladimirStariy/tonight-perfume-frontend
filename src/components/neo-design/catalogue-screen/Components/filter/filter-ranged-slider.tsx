import { FC, useState } from "react";

import RangeSlider from 'react-slider';

import styles from '../../../../styles/filter/ranged.slider.module.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MIN = 0;
const MAX = 1000;

interface RangedSliderProps {
    handleSetPrice: (value: number[]) => void;
}

const FilterRangedSlider: FC<RangedSliderProps> = (props) => {
    const [values, setValues] = useState([MIN, MAX])

    const handleChangePrice = (e: number[]) => {
        props.handleSetPrice(e)
        setValues(e)
    }

    return <>
        <b className={styles.rangeFilterLabel}>Цена и объём</b>
        
        <div className={styles.rangeFilterSlider}>
            <Row className={styles.rngFltValues}>
                <Col className={styles.startPrice}>{values[0]} BYN</Col>
                <Col className={styles.endPrice}>{values[1]} BYN</Col>
            </Row>
            
            <RangeSlider
                className={`rangeSlider ${styles.sliderOpt}`}
                onChange={handleChangePrice}
                value={values}
                min={MIN}
                max={MAX}
            />
        </div>
    </>
}

export default FilterRangedSlider;
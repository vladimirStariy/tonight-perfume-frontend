import { FC } from "react";
import TonightArrow from "../../Icons/tonight-arrow";

import styles from './tonight.arrow.group.module.css'

interface IProps {
    prevHandle: () => {}
    nextHandle: () => {}
}

const TonightArrowGroup: FC<IProps> = (props) => {
    return <div className={styles.arrows}>
        <TonightArrow onClick={props.prevHandle} direction="left"/>
        <TonightArrow onClick={props.nextHandle} direction="right"/>
    </div>
}

export default TonightArrowGroup;
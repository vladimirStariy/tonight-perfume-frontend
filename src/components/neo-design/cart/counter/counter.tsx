import { FC, useState } from "react";

import styles from './counter.module.css'

interface ICounter {
    handleChangeCount: (value: number) => void;
    initialCount: number;
}

const Counter: FC<ICounter> = (props) => {
    const [count, setCount] = useState(props.initialCount);

    const handleCountAdd = () => {
        setCount(count + 1);
        props.handleChangeCount(count + 1);
    }

    const handleCountMinus = () => {
        if(count !== 1) {
            setCount(count-1)
            props.handleChangeCount(count-1);
        }
    }

    return <div className={styles.counter}>
        <div onClick={handleCountMinus} className={styles.counterItem}>
            -
        </div>
        <div className={styles.counterNumber}>
            {count}
        </div>
        <div onClick={handleCountAdd} className={styles.counterItem}>
            +
        </div>
    </div>
}

export default Counter;
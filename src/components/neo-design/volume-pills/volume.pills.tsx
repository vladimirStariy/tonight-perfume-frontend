import { FC, useState } from 'react'

import styles from './volume.pills.module.css';

interface IVolumePills {
    handleChangeVolume?: (value: number) => void;
    initialVolume: number;
}

const VolumePills: FC<IVolumePills> = (props) => {
    const [activePill, setActivePill] = useState(props.initialVolume - 1)

    const handleActive = (value: number) => {
        setActivePill(value);
        if(props.handleChangeVolume) {
            props.handleChangeVolume(value + 1);
        }
    }

    return <div className={styles.volumePills}>
        <div 
            className={`${activePill === 0 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(0)}
        >   
            2 мл
        </div>
        <div 
            className={`${activePill === 1 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(1)}
        > 
            5 мл
        </div>
        <div 
            className={`${activePill === 2 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(2)}
        > 
            8 мл
        </div>
        <div 
            className={`${activePill === 3 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(3)}
        > 
            10 мл
        </div>
        <div 
            className={`${activePill === 4 ? styles.active : styles.default} ${styles.volumePill}`}
            onClick={() => handleActive(4)}
        > 
            15 мл
        </div>
    </div>
}

export default VolumePills;
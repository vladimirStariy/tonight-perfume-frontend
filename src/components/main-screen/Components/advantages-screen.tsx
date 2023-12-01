import { FC } from "react";

import styles from '../../styles/main-screen-modules/adv.module.css';

const AdvantagesScreen: FC = () => {
    
    return <>
        <h1 className='block-title'><b>Преимущества покупки парфюма в роспив</b></h1>
        <div className={styles.fgrid}>
            <div className={styles.fbig}></div>
            <div className={styles.fsecbig}>
                <div className={styles.fmid}></div>
                <div className={styles.smWrapper}>
                    <div className={styles.fsm1}></div>
                    <div className={styles.fsm2}></div>
                </div>
            </div>
        </div>
    </>
}

export default AdvantagesScreen;
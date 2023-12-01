import { FC } from "react";

import styles from './advantages.module.css';
import layout from '../../../layout/layout.module.css'

const Advantages: FC = () => {
    
    return <>
        <h1 className={layout.cardLabel}>Преимущества покупки парфюма в роспив</h1>
        <div className={styles.fgrid}>
            <div className={styles.fbig}>Возможность собрать собственную <br /> <b className={styles.purple}>коллекцию</b> ароматов на все случаи жизни</div>
            <div className={styles.fsecbig}>
                <div className={styles.fmid}>Идеальный <b className={styles.purple}>подарок</b>, ведь из <br /> нескольких ароматов можно собрать Aroma Box</div>
                <div className={styles.smWrapper}>
                    <div className={styles.fsm1}><b className={styles.purple}>Качество</b> парфюма в распив не отличается от стандартного флакона</div>
                    <div className={styles.fsm2}><b className={styles.purple}>Удобно</b> для <br /> путешествий или ношения с собой в сумке</div>
                </div>
            </div>
        </div>
    </>
}

export default Advantages;
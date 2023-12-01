import { FC, HTMLAttributes } from "react";

import styles from './payment.pill.module.css';

interface IPaymentPill extends HTMLAttributes<HTMLDivElement> {
    header: string;
    active: boolean;
}

const PaymentPill: FC<IPaymentPill> = (props) => {
    return <>
        <div {...props} className={`${styles.paymentPill} ${props.active ? styles.active : styles.default}`}>
            <div className={styles.paymentName}>
                {props.header}
            </div>
        </div>
    </>
}

export default PaymentPill;
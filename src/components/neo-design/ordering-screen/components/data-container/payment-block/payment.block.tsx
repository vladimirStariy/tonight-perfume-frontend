import { FC, useEffect, useState } from "react";


import styles from './payment.module.css';
import PaymentPill from "../../payment-pills/payment.pill";

interface IPaymentBlock {
    handleChangePayment: (value: string) => void;
    activeDeliveryPill: number;
}

const PaymentBlock: FC<IPaymentBlock> = (props) => {
    const [paymentPillActive, setPaymentPillActive] = useState(0);

    const handleActivePaymentPill = (value: number) => {
        props.handleChangePayment(value.toString())
        setPaymentPillActive(value);
    }

    useEffect(() => {
        if(props.activeDeliveryPill === 0) {
            setPaymentPillActive(0);
            props.handleChangePayment('0');
        } else if(props.activeDeliveryPill === 1) {
            props.handleChangePayment('3')
        } else {
            props.handleChangePayment('2')
        }
    }, [props.activeDeliveryPill])

    return <div className={styles.paymentWrapper}>
        {props.activeDeliveryPill === 0 ?
            <>
                <PaymentPill 
                    header='Наличными'
                    onClick={() => handleActivePaymentPill(0)}
                    active={paymentPillActive === 0 ? true : false}
                />
                <PaymentPill 
                    header='Картой'
                    onClick={() => handleActivePaymentPill(1)}
                    active={paymentPillActive === 1 ? true : false}
                />
            </>
        : props.activeDeliveryPill === 1 ?
            <>
                <PaymentPill 
                    header='Наличный или безналичный расчёт при получении'
                    active={true}
                />
            </>
        : 
            <>
                <PaymentPill 
                    header='Наложенный платёж'
                    active={true}
                />
            </>
        }
    </div>
}

export default PaymentBlock;
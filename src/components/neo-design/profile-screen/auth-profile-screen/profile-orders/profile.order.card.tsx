import { FC, useEffect } from "react";

import styles from './profile.orders.module.css'
import { useGetOrdersQuery } from "../../../../../services/profile.service";
import TonightButton from "../../../../../UI/Components/button/tonight-button";

interface IProps {
    refetch: () => void;
}

const ProfileOrderCard: FC<IProps> = (props) => {
    const {data, refetch} = useGetOrdersQuery();
    
    const handleDate = (item: Date) => {
        let curr = new Date(item);
        const summaryString = `${curr.getUTCDate() > 9 ? '' : '0'}${curr.getUTCDate()}.${curr.getUTCMonth() > 9 ? '' : '0'}${curr.getMonth()}.${curr.getUTCFullYear()}`
        return summaryString;
    }

    useEffect(() => {
        refetch();
    }, [])

    return <>
        <div className={styles.orderCardWrapper}>
            {data ?  
                    <>
                        {data.map((item) => {
                            return <div className={styles.orderCard}>
                                <div className={styles.orderCardBody}>
                                    <div className={styles.orderInfo}>
                                        <div className={styles.orderInfoLabel}>
                                            Заказ от {handleDate(item.orderDate)}
                                        </div>
                                        <div className={styles.orderInfoLabel}>
                                            {item.orderPrice / 100} BYN
                                        </div>
                                    </div>
                                    <div className={styles.orderStatus}>
                                        {item.status}
                                    </div>
                                </div>
                                <TonightButton text="Подробнее" />
                            </div>
                        })}
                    </>
                : <></> 
            }
        </div>
    </>
}

export default ProfileOrderCard;
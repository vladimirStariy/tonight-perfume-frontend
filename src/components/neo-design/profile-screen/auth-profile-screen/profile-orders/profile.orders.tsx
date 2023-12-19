import { FC, useEffect } from "react";

import styles from './profile.orders.module.css'
import { useGetOrderProductsMutation, useGetOrdersQuery } from "../../../../../services/profile.service";
import ProfileOrderCard from "./profile.order.card";

interface IProps {
    refetch: () => void;
}

const ProfileOrders: FC<IProps> = (props) => {
    const {data, refetch} = useGetOrdersQuery();
    

    useEffect(() => {
        
    }, [])

    return <>
        <div className={styles.orderCardWrapper}>
            {data ?  
                    <>
                        {data.map((item) => {
                            return <ProfileOrderCard 
                                orderId={item.orderId}
                                orderDate={item.orderDate}
                                orderPrice={item.orderPrice}
                                status={item.status}
                            />
                        })}
                    </>
                : <></> 
            }
        </div>
    </>
}

export default ProfileOrders;
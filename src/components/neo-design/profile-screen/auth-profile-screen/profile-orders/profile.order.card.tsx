import { FC, useEffect, useState } from "react";

import styles from './profile.orders.module.css'
import TonightButton from "../../../../../UI/Components/button/tonight-button";
import { useGetOrderProductsMutation } from "../../../../../services/profile.service";

interface IProps {
    orderId: number;
    orderDate: Date;
    orderPrice: number;
    status: string;
}

const ProfileOrderCard: FC<IProps> = (props) => {
    const [show, setShow] = useState<boolean>(false);
    const [getOrderProducts] = useGetOrderProductsMutation();

    const [products, setProducts] = useState<any[]>([]);

    const handleGetOrderProducts = async () => {
        const response = await getOrderProducts(props.orderId).unwrap();
        setProducts(response);
    }

    const handleShow = () => {
        if(!show && products.length <= 0) {
            handleGetOrderProducts();
        }
        setShow(!show);
    }

    const handleDate = (item: Date) => {
        let curr = new Date(item);
        const summaryString = `${curr.getUTCDate() > 9 ? '' : '0'}${curr.getUTCDate()}.${curr.getUTCMonth() > 9 ? '' : '0'}${curr.getMonth()}.${curr.getUTCFullYear()}`
        return summaryString;
    }

    return <>     
        <div className={styles.orderCard}>
            <div className={styles.orderCardBody}>
                <div className={styles.orderInfo}>
                    <div className={styles.orderInfoLabel}>
                        Заказ от {handleDate(props.orderDate)}
                    </div>
                <div className={styles.orderInfoLabel}>
                    {props.orderPrice / 100} BYN
                </div>
                </div>
                <div className={styles.orderStatus}>
                    {props.status}
                </div>
            </div>
            <div className={`${show ? styles.displayFlex : styles.displayNone} ${styles.productsBlock}`}>
                <div className={styles.orderProductsWrapper}>
                    {products.map((item, index) => (
                        <div className={styles.orderProductCard} key={index}>
                            <div className={styles.imgBlock}></div>
                            <div className={styles.cardBody}>
                                <div>
                                    <div className={styles.brandLabel}>{item.productBrand}</div>
                                    <div className={styles.nameLabel}>{item.productName}</div>
                                </div>
                                <div>
                                    <div className={styles.nameLabel}>Количество: {item.quantity} шт.</div>
                                    <div className={styles.nameLabel}>Цена: {item.price / 100} BYN</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <TonightButton onClick={handleShow} text={`${show ? "Свернуть" : "Подробнее"}`} />                
        </div>
    </>
}

export default ProfileOrderCard;
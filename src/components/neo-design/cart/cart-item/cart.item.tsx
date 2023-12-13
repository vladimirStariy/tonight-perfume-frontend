import { FC, useEffect, useState } from "react";

import styles from './cart.item.module.css'
import VolumePills from "../../volume-pills/volume.pills";
import Counter from "../counter/counter";
import { iCartProduct, removeCartItem, updateCartItem } from "../../../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { TrashIcon } from "../../icons/icons";
import useScreenSize from "../../../utils/use-screen-size";

interface CartItem {
    product: iCartProduct;
    promocodeDiscount?: number;
}

const CartItem: FC<CartItem> = (props) => {
    const dispatch = useDispatch();
    const screenSize = useScreenSize();
    const [promocodeDiscount, setPromocodeDiscount] = useState<number | null>(null);

    const [cartItem, setCartItem] = useState<iCartProduct>(props.product)

    const [volume, setVolume] = useState(props.product.volumeId);
    const [quantity, setQuantity] = useState(props.product.quantity);
    const [price, setPrice] = useState(props.product.price);
    const [summaryPrice, setSummaryPrice] = useState(props.product.price)

    const handleRemove = () => {
        dispatch(removeCartItem({product: props.product}))
    }

    const handleSetVolume = (value: number) => {
        setVolume(value);
        setCartItem((prev) => ({ ...prev, volumeId: value }))
    }

    const handleSetQuantity = (value: number) => {
        setQuantity(value);
        setCartItem((prev) => ({ ...prev, quantity: value }))
    }

    useEffect(() => {
        if(props.promocodeDiscount && props.promocodeDiscount !== null && props.promocodeDiscount > 0) {
            setPromocodeDiscount(props.promocodeDiscount)
        }
    }, [props.promocodeDiscount])

    useEffect(() => {
        dispatch(updateCartItem({product: cartItem}))
    }, [summaryPrice])

    useEffect(() => {
        setSummaryPrice(price * quantity)
    }, [quantity])

    useEffect(() => {
        let a = props.product.prices.filter(obj => {return obj.volume_ID === volume});
        setPrice(a[0].value);
        setSummaryPrice(a[0].value * quantity)
    }, [volume])

    return <div className={styles.cartItemWrapper}>
        <div className={styles.cartItem}>        
            <div className={styles.cartContent}>
                <div className={styles.imgBlock}></div>
                <div className={styles.mainContent}>
                    <div className={styles.upperBlock}>
                        <div className={styles.brandName}>
                            <div>
                                <div className={styles.brand}>
                                    {props.product.brand}
                                </div>
                                <div className={styles.name}>
                                    {props.product.name}
                                </div>
                            </div>
                            <TrashIcon onClick={handleRemove} />
                        </div>
                        <div className={styles.priceCounter}>
                            <div className={styles.price}>
                                {promocodeDiscount && promocodeDiscount !== null && promocodeDiscount > 0 ?
                                    <>
                                        <s>{summaryPrice / 100} BYN</s>
                                        {((summaryPrice - ((summaryPrice / 100) * 10))/100).toFixed(2)} BYN
                                    </>
                                    :
                                    <>
                                        {summaryPrice / 100} BYN
                                    </>
                                }
                            </div>
                            <div className={styles.counter}>
                                <Counter initialCount={props.product.quantity} handleChangeCount={handleSetQuantity} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.volumePills}>
                        <VolumePills initialVolume={props.product.volumeId} handleChangeVolume={handleSetVolume} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CartItem;
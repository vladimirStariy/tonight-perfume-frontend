import { FC, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./product.card.module.css";

import { IProductCard } from "../../../store/models/product/IProductCard";
import { useAddToFavoriteMutation, useRemoveFavoriteMutation } from "../../../services/product-service";
import TonightButton from "../../../UI/Components/button/tonight-button";
import { useDispatch } from "react-redux";
import { addToCart, selectCartItems } from "../../../store/slices/cartSlice";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../store/slices/authSlice";

interface IProductCardScreen {
    data: IProductCard;
    refetch?: () => void;
}

const ProductCard: FC<IProductCardScreen> = props => {
    const [isFavorite, setIsFavorite] = useState<boolean>(props.data.isFavorite)

    const [addToFavorite] = useAddToFavoriteMutation();
    const [remove] = useRemoveFavoriteMutation();

    const auth = useSelector(selectCurrentToken);

    const dispatcher = useDispatch();

    const handleAddToCart = () => {
        dispatcher(addToCart({product: {
            productId: props.data.id, 
            volumeId: 1, 
            quantity: 1,
            name: props.data.name,
            brand: props.data.brand,
            price: props.data.price,
            prices: props.data.prices
        }}))
    }

    const handleAddToFavorite = async () => {
        await addToFavorite({id: props.data.id});
        setIsFavorite(true);
    }

    const handleRemove = async () => {
        await remove(props.data.id);
        setIsFavorite(false);
        if(props.refetch !== undefined)
            props.refetch();
    }

    return <>
        <div className={styles.productCard}>
            <div className={styles.productCardImgBlock}>
                <div className={props.data.discount ? styles.productCardFavoriteDiscount : styles.productCardFavorite}>
                    {props.data.discount ? 
                        <div className={styles.discountLabel}></div>
                        :
                        <></>
                    }
                    {auth ? <>
                        <svg 
                            style={{zIndex: '999'}}
                            onClick={isFavorite ? handleRemove : handleAddToFavorite}
                            width="24" height="24" viewBox="0 0 24 24" 
                            fill={isFavorite ? "#D0BEE5" : "none"} 
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0069 22L2.67077 12.7878C-2.40323 7.26048 5.05554 -3.35197 12.0069 5.2338C18.9583 -3.35197 26.3832 7.29733 21.3431 12.7878L12.0069 22Z" 
                                stroke="#D0BEE5" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    </> : <></> 
                    }
                </div>
            </div>
            <div className={styles.productCardDetails}>
                <div className={styles.brandName}>
                    <div className={styles.productCardBrand}>
                        <Link to=''>{props.data.brand}</Link>
                    </div>
                    <div className={styles.productCardName}>
                        <Link to={`/product/${props.data.id}`}>{props.data.name}</Link>
                    </div>
                </div>
                <div className={styles.productCardPrice}>
                    {props.data.discount ? 
                        <>
                            <div className={styles.crossedPrice}>
                                <div className={styles.nonDiscountPrice}>от {props.data.price} BYN</div>
                            </div>
                        </>
                    :
                        <>от {props.data.price / 100} BYN</>
                    }
                    
                </div>
                <TonightButton onClick={handleAddToCart} text="В корзину" />
            </div>
        </div>
    </>
}

export default ProductCard;
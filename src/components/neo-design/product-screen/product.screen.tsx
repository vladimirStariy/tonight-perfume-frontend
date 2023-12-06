import { FC, useEffect, useMemo, useState } from 'react';

import layout from '../layout/layout.module.css'
import styles from './product.screen.module.css'
import VolumePills from '../volume-pills/volume.pills';
import TonightButton from '../../../UI/Components/button/tonight-button';
import useScreenSize from '../../utils/use-screen-size';
import { Link, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../../services/product-service';
import Counter from '../cart/counter/counter';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/slices/cartSlice';

const ProductScreen: FC = () => {
    const {id} = useParams();
    const screenSize = useScreenSize();
    const {data: productData, isLoading, isSuccess} = useGetProductByIdQuery(Number(id));
    
    const dispatcher = useDispatch();

    const handleAddToCart = () => {
        if(productData)
            dispatcher(addToCart({product: {
                productId: productData.id, 
                volumeId: volume, 
                quantity: quantity,
                name: productData.name,
                brand: productData.brand.name,
                price: summaryPrice,
                prices: productData.prices
            }}))
    }

    const [volume, setVolume] = useState<number>(1);
    const [quantity, setQuantity] = useState(1);

    const handleSetVolume = (value: number) => {
        setVolume(value);
    }
    
    const handleSetQuantity = (value: number) => {
        setQuantity(value);
    }

    const summaryPrice = useMemo(() => {
        let _price = 0;
        if(productData) _price = productData.prices[0].value;
        productData?.prices.map((item) => {
            if(item.volume_ID === volume) {
                _price = item.value * quantity
            }
        })
        return _price;
    }, [volume, quantity, []])

    return <>
        <div className={`${layout.tonightWrapper} ${styles.commonPadding}`}>
            <div className={layout.tonightContainer}>
                <div className={styles.productWrapper}>
                    <div className={styles.breadcrumb}>
                        <Link to='/'>Главная</Link> / <Link to='/catalogue'>Каталог</Link> / Blanche
                    </div>
                    {isLoading ? <>
                    
                    </> : <>
                        <div className={styles.cardWrapper}>
                            { screenSize.width < 726 ? 
                            <>
                                <div className={styles.cardBlock}>
                                    <div className={styles.brandName}>
                                        <div className={styles.brand}>
                                            {productData?.brand.name}
                                        </div>
                                        <div className={styles.name}>
                                            {productData?.name}
                                        </div>
                                        <div className={styles.articul}>Артикул: 22452</div>
                                    </div>
                                    <div className={styles.cardImg}></div>
                                    <div className={styles.priceVolume}>
                                        <div className={styles.price}>75,00 BYN</div>
                                        <div className={styles.volume}>
                                            <div className={styles.volumeLabel}>Объем</div>
                                            <VolumePills 
                                                initialVolume={volume} 
                                                handleChangeVolume={handleSetVolume}
                                            />
                                        </div>
                                    </div>                     
                                </div>
                                <div className={styles.buttons}>
                                    <TonightButton text='Добавить в корзину'/>
                                    <Link to='/' className={styles.buttonLink}>
                                        Узнать остаток и стоимость
                                    </Link>
                                </div>
                            </>
                            :
                            <>
                                <div className={styles.cardBlock}>
                                    <div className={styles.cardImg}></div>
                                    <div className={styles.underCard}>
                                        Предложение не является публичной офертой
                                    </div>
                                </div>
                                <div className={styles.cardData}>
                                    <div className={styles.brandName}>
                                        <div className={styles.brand}>
                                            {productData?.brand.name}
                                        </div>
                                        <div className={styles.name}>
                                            {productData?.name}
                                        </div>
                                        <div className={styles.articul}>Артикул: 22452</div>
                                    </div>
                                    <div className={styles.valueData}>
                                        <div>
                                            <Counter 
                                                initialCount={quantity} 
                                                handleChangeCount={handleSetQuantity} 
                                            />
                                        </div>
                                        <div className={styles.volume}>
                                            <div className={styles.volumeLabel}>Объем</div>
                                            <VolumePills 
                                                initialVolume={volume} 
                                                handleChangeVolume={handleSetVolume}
                                            />
                                        </div>
                                        <div className={styles.price}>{summaryPrice / 100} BYN</div>
                                        <div className={styles.buttons}>
                                            <div className={styles.buttonWrapper}>
                                                <TonightButton 
                                                    text='Добавить в корзину'
                                                    onClick={handleAddToCart}    
                                                />
                                            </div>
                                            <Link to='/' className={styles.buttonLink}>
                                                Узнать остаток и стоимость
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                            }
                        </div>
                        <div className={styles.descriptionWrapper}>
                            <div className={styles.descriptionBlock}>
                                <div className={styles.descriptionLabel}>Описание</div>
                                <div className={styles.description}>
                                    {productData?.description}
                                </div>
                            </div>
                            <div className={styles.characteristicBlock}>
                                <div className={styles.descriptionLabel}>Подробные характеристики</div>
                                <div className={styles.characteristics}>
                                    <div>
                                        Категория..........................................
                                        <Link to='/' className={styles.dataLink}>{productData?.category.name}</Link>
                                    </div>
                                    <div>
                                        Страна................................................
                                        <Link to='/' className={styles.dataLink}>{productData?.country}</Link>
                                    </div>
                                    <div>
                                        Год выпуска.......................................
                                        <Link to='/' className={styles.dataLink}>{productData?.year}</Link>
                                    </div>
                                    <div>
                                        Группа ароматов..............................
                                        <Link to='/' className={styles.dataLink}>placeholder</Link>
                                    </div>
                                    <div>
                                        Верхние ноты....................................
                                        <Link to='/' className={styles.dataLink}>placeholder</Link>
                                    </div>
                                    <div>
                                        Средние ноты...................................
                                        <Link to='/' className={styles.dataLink}>placeholder</Link>
                                    </div>
                                    <div>
                                        Базовые ноты....................................
                                        <Link to='/' className={styles.dataLink}>placeholder</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                </div>
                
            </div>
        </div>
    </>
}

export default ProductScreen;
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
import { addToCart, removeCartItemById, selectCartItems } from '../../../store/slices/cartSlice';
import { useSelector } from 'react-redux';
import Loader from '../../../UI/Components/loader/loader';

const ProductScreen: FC = () => {
    const {id} = useParams();
    const screenSize = useScreenSize();
    const {data: productData, isLoading, isError} = useGetProductByIdQuery(Number(id));
    const cart = useSelector(selectCartItems);
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
                prices: productData.prices,
                imagePath: productData.imagePath
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

    const upperNotes = useMemo(() => {
        if(productData) return productData.perfumeNotes.filter(x => x.noteType === 'upper');
    }, [productData])

    const middleNotes = useMemo(() => {
        if(productData) return productData.perfumeNotes.filter(x => x.noteType === 'middle');
    }, [productData])

    const baseNotes = useMemo(() => {
        if(productData) return productData.perfumeNotes.filter(x => x.noteType === 'bottom');
    }, [productData])

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

    const handleRemoveFromCart = () => {
        dispatcher(removeCartItemById({productId: Number(id)}))
    }

    return <>
        <div className={`${layout.tonightWrapper} ${styles.commonPadding}`}>
            <div className={layout.tonightContainer}>
                <div className={styles.productWrapper}>
                    <div className={styles.breadcrumb}>
                        <Link to='/'>Главная</Link> / <Link to='/catalogue'>Каталог</Link> / {productData?.name}
                    </div>
                    {isError ? <>
                        <div className={styles.loaderWrapper}>Ошибка соединения</div>
                    </> : 
                    isLoading ? <>
                        <>
                            <div className={styles.loaderWrapper}><Loader /></div>
                        </>
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
                                    <div 
                                        style={{
                                            aspectRatio: '1 / 1',
                                            background: `url(../${productData?.imagePath})`,
                                            backgroundPosition: 'center center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                        }} 
                                        
                                    ></div>
                                    <div className={styles.priceVolume}>
                                        <div className={styles.price}>{summaryPrice / 100} BYN</div>
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
                                    {cart?.find(product => product.productId === Number(id)) !== undefined ? <>
                                        <TonightButton onClick={handleRemoveFromCart} text='Удалить из корзины' />
                                    </> : <>
                                        <TonightButton onClick={handleAddToCart} text='Добавить в корзину' />
                                    </>}
                                    <a href='https://t.me/TonightPerfume' target='_blank' className={styles.buttonLink}>
                                        Узнать остаток и стоимость
                                    </a>
                                </div>
                            </>
                            :
                            <>
                                <div className={styles.cardBlock}>
                                    <div style={{
                                           background: `url(../${productData?.imagePath})`,
                                           backgroundPosition: 'center center',
                                           backgroundRepeat: 'no-repeat',
                                           backgroundSize: 'cover',
                                           aspectRatio: '7 / 8'
                                       }} ></div>
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
                                            {cart?.find(product => product.productId === Number(id)) !== undefined ? <>
                                                <TonightButton onClick={handleRemoveFromCart} text='Удалить из корзины' />
                                            </> : <>
                                                <TonightButton onClick={handleAddToCart} text='Добавить в корзину' />
                                            </>}
                                            </div>
                                            <a href='https://t.me/TonightPerfume' target='_blank' className={styles.buttonLink}>
                                                Узнать остаток и стоимость
                                            </a>
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
                                        <Link to='/' className={styles.dataLink}>
                                            {productData?.category.name.toLowerCase()}
                                        </Link>
                                    </div>
                                    <div>
                                        Страна................................................
                                        <Link to='/' className={styles.dataLink}>{productData?.country}</Link>
                                    </div>
                                    <div>
                                        Год выпуска.......................................
                                        <Link to='/' className={styles.dataLink}>{productData?.year}</Link>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        Группа ароматов..............................
                                        <div style={{display: 'flex'}}>
                                            {productData?.aromaGroups.map((item, index) => (
                                                <>
                                                    <div key={index} className={styles.dataLink}>
                                                        {item.aromaGroup_Name}
                                                    </div>
                                                    {index + 1 < productData.aromaGroups.length ? <>,<pre key={index+99} style={{margin: '0', fontSize: '.3rem'}}> </pre></> : ''}
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                    {upperNotes ? <>
                                        <div style={{display: 'flex'}}>
                                            Верхние ноты....................................
                                            {upperNotes && upperNotes.map((item, index) => <>
                                                <div key={index} className={styles.dataLink}>
                                                    {item.perfumeNote.name}
                                                </div>
                                                {index + 1 < upperNotes.length ? <>,<pre key={index+99} style={{margin: '0', fontSize: '.3rem'}}> </pre></> : ''}
                                            </>)}
                                        </div>
                                    </> : <></>}
                                    {middleNotes ? <>
                                        <div style={{display: 'flex'}}>
                                            Средние ноты...................................
                                            {middleNotes && middleNotes.map((item, index) => <>
                                                <div key={index} className={styles.dataLink}>
                                                    {item.perfumeNote.name}
                                                </div>
                                                {index + 1 < middleNotes.length ? <>,<pre key={index+99} style={{margin: '0', fontSize: '.3rem'}}> </pre></> : ''}
                                            </>)}
                                        </div>
                                    </> : <></>}
                                    {baseNotes ? <>
                                        <div style={{display: 'flex'}}>
                                            Базовые ноты....................................
                                            {baseNotes.map((item, index) => <>
                                                <div key={index} className={styles.dataLink}>
                                                    {item.perfumeNote.name}
                                                </div>
                                                {index + 1 < baseNotes.length ? <>,<pre key={index+99} style={{margin: '0', fontSize: '.3rem'}}> </pre></> : ''}
                                            </>)}
                                        </div>
                                    </> : <></>}
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
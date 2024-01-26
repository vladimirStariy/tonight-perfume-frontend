import { FC, useState, useEffect } from "react";

import layout from '../layout/layout.module.css';
import styles from './ordering.module.css'
import secLayout from './components/ordering-screen-layout/ordering.layout.module.css'

import CommonDataBlock from "./components/data-container/common-data-block/common.data.block";
import useScreenSize from "../../utils/use-screen-size";
import TonightButton from "../../../UI/Components/button/tonight-button";
import CartItem from "../cart/cart-item/cart.item";
import { IOrder, IOrderProduct } from "../../../store/models/order/order";
import { useCreateOrderUnauthorizedMutation, useGetPromocodeDataMutation } from "../../../services/order.service";
import SuccessModal from "./components/modal-window/order.modal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../store/slices/authSlice";
import { useGetProfileDataQuery } from "../../../services/profile.service";
import { IAdress } from "../../../store/models/profile/profile";
import { clearCart, selectCartItems } from "../../../store/slices/cartSlice";
import DataInput from "../../../UI/Components/input/data.input";
import { useDispatch } from "react-redux";

export interface IFormError {
    fistname_error: boolean;
    surname_error: boolean;
    phone_error: boolean;
    
    city_error: boolean;
    region_error: boolean;
    appartaments_error: boolean;
    postNumber_error: boolean;

    hasErrors: boolean;
}

const OrderingScreen: FC = () => {
    const screenSize = useScreenSize();
    const cart = useSelector(selectCartItems);
    const token = useSelector(selectCurrentToken);
    const dispatch = useDispatch();
    const { data } = useGetProfileDataQuery();
    const [getPromocode, {isError}] = useGetPromocodeDataMutation(); 
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const [formErrors, setFormError] = useState<IFormError>({
        fistname_error: false,
        surname_error: false,
        phone_error: false,
        city_error: false,
        region_error: false,
        appartaments_error: false,
        postNumber_error: false,
        hasErrors: false
    });

    const [promo, setPromocode] = useState<string | null>(null);

    const [promocodeDiscount, setPromocodeDiscount] = useState<number>(0);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const [formData, setFormData] = useState<IOrder>(
        {
            firstname: null,
            surname: null,
            lastname: null,
            phone: '',
            email: null,
            city: null,
            region: null,
            appartaments: null,
            domophoneCode: null,
            entrance: null,
            floor: null,
            postNumber: null,
            promocode: '',
            paymentType: '0',
            deliveryType: '0',
            note: null,
            products: []
        }
    );
    
    const handleChangeFormData = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    
    const handleChangeDelivery = (value: string) => {
        setFormData((prev) => ({ ...prev, deliveryType: value}));
        setFormData((prev) => ({ ...prev, city: null}));
        setFormData((prev) => ({ ...prev, region: null}));
        setFormData((prev) => ({ ...prev, appartaments: null}));
        setFormData((prev) => ({ ...prev, domophoneCode: null}));
        setFormData((prev) => ({ ...prev, entrance: null}));
        setFormData((prev) => ({ ...prev, floor: null}));
        setFormData((prev) => ({ ...prev, postNumber: null}));
    }

    const handleSetAuthDelivery = (value: IAdress) => {
        if(value.deliveryType === 1) {
            setFormData((prev) => ({ ...prev, deliveryType: value.deliveryType.toString()}));
            setFormData((prev) => ({ ...prev, city: null}));
            setFormData((prev) => ({ ...prev, city: value.city}));
            setFormData((prev) => ({ ...prev, postNumber: value.postNumber}));
            setFormData((prev) => ({ ...prev, region: null}));
            setFormData((prev) => ({ ...prev, appartaments: null}));
            setFormData((prev) => ({ ...prev, domophoneCode: null}));
            setFormData((prev) => ({ ...prev, entrance: null}));
            setFormData((prev) => ({ ...prev, floor: null}));
            
        } else if (value.deliveryType === 2) {
            setFormData((prev) => ({ ...prev, deliveryType: value.deliveryType.toString()}));
            setFormData((prev) => ({ ...prev, city: null}));
            setFormData((prev) => ({ ...prev, city: value.city}));
            setFormData((prev) => ({ ...prev, region: value.region}));
            setFormData((prev) => ({ ...prev, appartaments: value.appartaments}));
            setFormData((prev) => ({ ...prev, domophoneCode: value.domophoneCode}));
            setFormData((prev) => ({ ...prev, entrance: value.entrance}));
            setFormData((prev) => ({ ...prev, floor: value.floor}));
            setFormData((prev) => ({ ...prev, postNumber: null}));
        }
    }

    const handleChangePhone = (e: any) => {
        setFormData({...formData, phone: e.detail.input});
    }

    const handleChangePayment = (value: string) => {
        setFormData((prev) => ({ ...prev, paymentType: value}));
    }

    const handleChangeComment = (value: string) => {
        setFormData((prev) => ({ ...prev, note: value}));
    }

    const handleClose = () => {
        setShow(false)
        navigate('/catalogue')
    }

    const [createUnauthorizedOrder, {isLoading}] = useCreateOrderUnauthorizedMutation();

    const handleCreateOrder = async () => {
        if(!validateFormData()) {
            await createUnauthorizedOrder(formData);
    
            setFormData((prev) => ({ ...prev, city: null}));
            setFormData((prev) => ({ ...prev, region: null}));
            setFormData((prev) => ({ ...prev, appartaments: null}));
            setFormData((prev) => ({ ...prev, domophoneCode: null}));
            setFormData((prev) => ({ ...prev, entrance: null}));
            setFormData((prev) => ({ ...prev, floor: null}));
            setFormData((prev) => ({ ...prev, postNumber: null}));
            setFormData((prev) => ({ ...prev, promocode: null}));

            setShow(true);
            handleClearCart();
        }
    }

    const validateFormData = () => {
        let hasErrors = false;
        if(formData.firstname === null || formData.firstname === '') {
            setFormError((prev) => ({...prev, fistname_error: true}));
            hasErrors = true;
        } else { setFormError((prev) => ({...prev, fistname_error: false}))}
        if(formData.surname === null || formData.surname === '') {
            setFormError((prev) => ({...prev, surname_error: true}));
            hasErrors = true;
        } else { setFormError((prev) => ({...prev, surname_error: false}))}
        if(formData.phone === null || formData.phone === '' || formData.phone.length < 9) {
            setFormError((prev) => ({...prev, phone_error: true}));
            hasErrors = true;
        } else { setFormError((prev) => ({...prev, phone_error: false}))}
        if(formData.deliveryType === '1') {
            if(formData.city === null || formData.city === '') {
                setFormError((prev) => ({...prev, city_error: true}));
                hasErrors = true;
            } else { setFormError((prev) => ({...prev, city_error: false}))}
            if(formData.postNumber === null || formData.postNumber === '') {
                setFormError((prev) => ({...prev, postNumber_error: true}));
                hasErrors = true;
            } else { setFormError((prev) => ({...prev, postNumber_error: false}))}
        }
        if(formData.deliveryType === '2') {
            if(formData.city === null || formData.city === '') {
                setFormError((prev) => ({...prev, city_error: true}));
                hasErrors = true;
            } else { setFormError((prev) => ({...prev, city_error: false}))}
            if(formData.region === null || formData.region === '') {
                setFormError((prev) => ({...prev, region_error: true}));
                hasErrors = true;
            } else { setFormError((prev) => ({...prev, region_error: false}))}
            if(formData.appartaments === null || formData.appartaments === '') {
                setFormError((prev) => ({...prev, appartaments_error: true}));
                hasErrors = true;
            } else { setFormError((prev) => ({...prev, appartaments_error: false}))}
        }
        return hasErrors;
    }

    const handleSetupPromocode = (e: any) => {
        setPromocode(e.target.value);
    }

    let adresses: IAdress[] = data?.profileAdresses ? data?.profileAdresses : [];
    const handleFillAdresses = () => {
        if(data && data.profileAdresses) {
            adresses = data.profileAdresses;
        }
    }

    const [summaryPrice, setSummaryPrice] = useState<number>(0);

    const handleSetPromocodeToOrder = async () => {
        if(promo !== null) {
            setPromocodeDiscount(0);
            let data = await getPromocode({promocode: promo});
            if(isError) {
                
            } else {
                setFormData((prev) => ({ ...prev, promocode: promo}));
                setPromocodeDiscount(Number(data));
            }
        }
    }

    useEffect(() => {
        
    }, [promo])

    useEffect(() => {
        if(token) {
            if(data) {
                setFormData((prev) => ({ ...prev, firstname: data.firstname }))
                setFormData((prev) => ({ ...prev, lastname: data.lastname }))
                setFormData((prev) => ({ ...prev, surname: data.middlename }))
                setFormData((prev) => ({ ...prev, phone: data.phone !== null ? data.phone : '' }))
                setFormData((prev) => ({ ...prev, email: data.email }))
                handleFillAdresses();
                setIsAuth(true);
            }
        }
    }, [])

    useEffect(() => {
        if(cart) {
            let _price = 0;
            cart.map((item) => {
                _price += item.prices[item.volumeId - 1].value * item.quantity;
            })
            setSummaryPrice(_price);
            let orderProducts: IOrderProduct[] = [];
            cart.forEach(item => {
                orderProducts.push({
                    productId: item.productId,
                    volumeId: item.volumeId,
                    quantity: item.quantity
                } as IOrderProduct)
            });
            setFormData((prev) => ({ ...prev, products: orderProducts}))
        }
    }, [cart])

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Каталог / Корзина / <br /> Оформление заказа
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Оформление заказа</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightContainer}>
                <SuccessModal show={show} handleClose={handleClose} />
                {!cart || cart.length <= 0 ? <>
                    <div className={styles.emptyCartMessage}>
                        Ваша корзина пуста! 
                        <Link style={{color: '#D0BEE5'}} to='/catalogue'>Перейти в Каталог</Link>
                    </div>
                </> : <>
                    <div className={styles.orderingWrapper}>
                        <div className={styles.dataWrapper}>
                            <CommonDataBlock 
                                handleChangeData={handleChangeFormData} 
                                handleChangeDelivery={handleChangeDelivery}
                                handleChangeAdress={handleSetAuthDelivery}
                                handleChangePayment={handleChangePayment}
                                handleChangeComment={handleChangeComment}
                                handleChangePhone={handleChangePhone}
                                isAuth={isAuth}
                                formErrors={formErrors}
                                formData={formData}
                                adresses={adresses}
                                activeDeliveryPill={Number(formData.deliveryType)} 
                            />
                            {screenSize.width <= 726 ? <></> :
                                <TonightButton isLoading={isLoading} isDisabled={isLoading} onClick={handleCreateOrder} text='Оформить заказ'/>
                            }
                        </div>
                        <div className={styles.cartWrapper}>
                            <div className={styles.cartOrder}>
                                <div className={secLayout.blockHeaderMain}>Ваш заказ</div>
                                <div onClick={handleClearCart} style={{cursor: 'pointer'}} className={styles.deleteAll}>Удалить все</div>
                            </div>
                            
                            <div className={styles.cartItems}>    
                                {cart.map((item) => {
                                    return <CartItem promocodeDiscount={promocodeDiscount} product={item} />
                                })}
                            </div>

                            <div className={styles.summary}>
                                <div className={styles.promocodeBlock}>
                                    <div className={styles.promoLabel}>
                                        У вас есть промокод? Примените его!
                                    </div>
                                    <div className={styles.promocodeFuncBlock}>
                                        <div className={styles.promoInput}>
                                            <DataInput onChange={handleSetupPromocode}/>
                                        </div>
                                        <div className={styles.promoSubmit}>
                                            <TonightButton onClick={handleSetPromocodeToOrder} text="Применить" />
                                        </div>
                                    </div>
                                    { isError ? <>
                                        <div className={styles.promoLabel} style={{color: 'red'}}>
                                            Промокод не действителен
                                        </div>
                                    </> : <></> }
                                </div>
                                <div className={styles.orderDelivery}>
                                    <div className={styles.orderSum}>
                                        <div>
                                            Сумма заказа
                                        </div>
                                        <div>
                                            {promocodeDiscount && promocodeDiscount > 0 ? 
                                                <>
                                                    {((summaryPrice - (summaryPrice / 100) * promocodeDiscount) / 100).toFixed(2)} BYN
                                                </> 
                                                :
                                                <>
                                                    {summaryPrice / 100} BYN
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <div className={styles.deliveryPrice}>
                                        <div>
                                            Доставка
                                        </div>
                                        <div>
                                            Бесплатно
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.finalSum}>
                                    {promocodeDiscount && promocodeDiscount > 0 ? 
                                        <>
                                            ИТОГО: {((summaryPrice - (summaryPrice / 100) * promocodeDiscount) / 100).toFixed(2)} BYN
                                        </> 
                                    :
                                        <>
                                            ИТОГО: {summaryPrice / 100} BYN
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        
                        {screenSize.width <= 726 ?  
                            <TonightButton onClick={handleCreateOrder} arrow={false} text='Оформить заказ' />
                        :
                            <></>
                        }
                    </div>
                </> }
            </div>
        </div>
    </>
}

export default OrderingScreen;
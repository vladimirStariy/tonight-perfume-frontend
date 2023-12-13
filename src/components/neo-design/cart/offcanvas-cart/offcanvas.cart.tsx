import { FC, useMemo, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

import styles from './offcanvas.cart.module.css';
import CartItem from '../cart-item/cart.item';
import TonightButton from '../../../../UI/Components/button/tonight-button';
import useScreenSize from '../../../utils/use-screen-size';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../../store/slices/cartSlice';
import Badge from 'react-bootstrap/Badge';

interface IOffcanvasCart {
    class? :string;
}

const OffcanvasCart: FC<IOffcanvasCart> = (props) => {
    const screenSize = useScreenSize();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const cart = useSelector(selectCartItems);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOrder = () => {
        navigate('/ordering')
        setShow(false)
    }

    const summaryPrice = useMemo(() => {
        if(cart) {
            let _price = 0;
            cart.map((item) => {
                _price += item.prices[item.volumeId - 1].value * item.quantity;
            })
            return _price;
        }
    }, [cart])

    return <>
        <Nav.Link onClick={handleShow} className={props.class}>
            <div className={styles.cartIcon}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.4902 6.93292H16.9608V6.70843C16.9608 5.33905 16.4381 4.02575 15.5078 3.05745C14.5775 2.08915 13.3157 1.54517 12 1.54517C10.6843 1.54517 9.42252 2.08915 8.4922 3.05745C7.56187 4.02575 7.03922 5.33905 7.03922 6.70843V6.93292H2.5098C2.10938 6.93292 1.72535 7.09848 1.44221 7.39318C1.15907 7.68788 1 8.08758 1 8.50435V21.9737C1 22.3905 1.15907 22.7902 1.44221 23.0849C1.72535 23.3796 2.10938 23.5452 2.5098 23.5452H21.4902C21.8906 23.5452 22.2746 23.3796 22.5578 23.0849C22.8409 22.7902 23 22.3905 23 21.9737V8.50435C23 8.08758 22.8409 7.68788 22.5578 7.39318C22.2746 7.09848 21.8906 6.93292 21.4902 6.93292ZM8.33333 6.70843C8.33333 5.69628 8.71964 4.72558 9.40728 4.00988C10.0949 3.29418 11.0275 2.8921 12 2.8921C12.9725 2.8921 13.9051 3.29418 14.5927 4.00988C15.2804 4.72558 15.6667 5.69628 15.6667 6.70843V6.93292H8.33333V6.70843ZM21.7059 21.9737C21.7059 22.0333 21.6832 22.0904 21.6427 22.1325C21.6023 22.1746 21.5474 22.1982 21.4902 22.1982H2.5098C2.4526 22.1982 2.39774 22.1746 2.35729 22.1325C2.31684 22.0904 2.29412 22.0333 2.29412 21.9737V8.50435C2.29412 8.44481 2.31684 8.38771 2.35729 8.34561C2.39774 8.30351 2.4526 8.27986 2.5098 8.27986H21.4902C21.5474 8.27986 21.6023 8.30351 21.6427 8.34561C21.6832 8.38771 21.7059 8.44481 21.7059 8.50435V21.9737Z" fill="#1E1E1E" stroke="#1E1E1E" strokeWidth="0.4"/>
                </svg>
                {cart && cart.length > 0 ? <>
                    <Badge pill className={styles.cartBadge} bg='#D0BEE5' style={{backgroundColor: '#D0BEE5'}}>
                        {cart.length}
                    </Badge>
                </> : <></>}
            </div>
        </Nav.Link>
        <Offcanvas style={screenSize.width > 726 ? {top: 110} : {top: 64}} backdropClassName={styles.backDrop} placement='end' show={show} onHide={handleClose} className={styles.offcanvas}>
            <div className={styles.offcanvasWrapper}>
                <div className={`font-manrope ${styles.cartContent}`}>
                    <div className={styles.cartContentWrapper}>
                        <Offcanvas.Header className={styles.cartHeader} closeButton>
                            <Offcanvas.Title><b className={styles.cartTitle}>Корзина</b></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className={styles.offcanvasBody}>
                            <div className={styles.overflowTest}>
                                <div className={styles.cartProducts}>
                                    {cart && cart.length > 0 ? 
                                        <>
                                            {cart.map((item) => {
                                                return <CartItem product={item} />
                                            })}
                                        </>
                                    :
                                        <>
                                            Корзина пуста
                                        </>
                                    }
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </div>
                    {cart && cart.length > 0 ? 
                        <>
                            <div className={styles.orderBlock}>
                                <b className={styles.priceLabel}>Итого: {summaryPrice && summaryPrice / 100} BYN</b>
                                <TonightButton onClick={handleOrder} text='Оформить заказ' arrow />
                            </div>
                        </> : <></>
                    }
                </div>
            </div>
        </Offcanvas>
    </>
}

export default OffcanvasCart;
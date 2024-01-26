import { FC, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import styles from './order.modal.module.css';
import TonightButton from '../../../../../UI/Components/button/tonight-button';
import { useNavigate } from 'react-router-dom';

interface IQModal {
    show: boolean;
    handleClose: () => void;
}

const SuccessModal: FC<IQModal>  = (props) => {
    const navigate = useNavigate();

    const handleAccept = () => {
        navigate('/catalogue');
    }

    return <>
        <Modal show={props.show} 
            onHide={props.handleClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={styles.modalSett}
        >
                <Modal.Body className={styles.modalBody}>
                    <div className={styles.bodyWrapper}>
                        <div className={styles.bodyContainer}>
                            <div className={styles.headerLabel} style={{
                                    color: '#1E1E1E',
                                    fontSize: '30px',
                                    fontStyle: 'normal',
                                    fontWeight: '800',
                                    lineHeight: '100%'
                                }}>
                                    Ваш заказ оформлен!
                                </div>
                            <div className={styles.headerLabel}>
                                Благодарим за заказ, ждём вас снова!
                                Зарегистрируйтесь и накапливайте бонусы с каждой покупки.
                            </div>
                            <TonightButton text='ОТЛИЧНО!' onClick={handleAccept} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
    </>
}

export default SuccessModal;
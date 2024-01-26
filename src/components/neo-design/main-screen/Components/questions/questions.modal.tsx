import { FC, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import styles from './questions.modal.module.css';
import TonightButton from '../../../../../UI/Components/button/tonight-button';
import DataInput from '../../../../../UI/Components/input/data.input';
import { useRequestConsultationMutation } from '../../../../../services/consultation.service';
import MaskedInput from '../../../../../UI/Components/mask-input/mask.input';

interface IQModal {
    show: boolean;
    handleClose: () => void;
}

const QuestionsModal: FC<IQModal>  = (props) => {
    const [phase, setPhase] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const [sendRequest, {isLoading}] = useRequestConsultationMutation();

    const handleSetPhone = (e: any) => {
        if(e.detail.input.length === 9) setPhoneError(false)
        setPhone(e.detail.input);
    }

    const handleSetName = (e: any) => {
        if(e.currentTarget.value !== '' || e.currentTarget.value !== ' ') setNameError(false);
        setName(e.currentTarget.value);
    }

    const handleSendRequest = async () => {
        if(name.trim() === '') {
            setNameError(true);
            return;
        } 
        if(phone.length < 9) {
            setPhoneError(true);
            return;
        }
        await sendRequest({name: name, phone: phone})
        .unwrap()
        .then((payload) => {
            setPhase(1);
        })
        .catch((error) => console.log(error));
    }

    return <>
        <Modal show={props.show} 
            onHide={props.handleClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={styles.modalSett}
        >
                <Modal.Header className={styles.modalHeader} closeButton>
                    
                </Modal.Header>
                {phase === 0 ? <>
                    <Modal.Body className={styles.modalBody}>
                        <div className={styles.bodyWrapper}>
                            <div className={styles.bodyContainer}>
                                <div className={styles.headerLabel}>
                                    Оставьте свой номер телефона и мы перезвоним вам в ближайшее время
                                </div>
                                <div className={styles.inputGroup}>
                                    <div className={styles.inputData}>
                                        <div className={styles.inputLabel}>Имя</div>
                                        <DataInput 
                                            onChange={(e) => handleSetName(e)}
                                            value={name}
                                        />
                                        {nameError ? <>
                                            <div style={{color: 'red'}}>Имя введено неправильно.</div>
                                        </> : <></>}
                                    </div>
                                    <div className={styles.inputData}>
                                        <div className={styles.inputLabel}>Номер телефона</div>
                                        <MaskedInput 
                                            type="text"
                                            mask="+375 (__) ___-__-__" 
                                            replacement="_" 
                                            placeholder='+375'
                                            initialValue={''}
                                            handleInput={handleSetPhone} 
                                        />
                                        {phoneError ? <>
                                            <div style={{color: 'red'}}>Номер телефона введен неправильно.</div>
                                        </> : <></>}
                                    </div>
                                </div>
                                <TonightButton isLoading={isLoading} text='Отправить' onClick={handleSendRequest} />
                            </div>
                        </div>
                    </Modal.Body>
                </> : <>
                <Modal.Body className={styles.modalBody}>
                        <div className={styles.bodyWrapper}>
                            <div className={styles.bodyContainer}>
                                <div className={styles.headerLabel} style={{
                                    color: '#1E1E1E',
                                    fontSize: '40px',
                                    fontStyle: 'normal',
                                    fontWeight: '800',
                                    lineHeight: '100%'
                                }}>
                                    Отправлено!
                                </div>
                                <div className={styles.headerLabel}>
                                    Мы получили вашу заявку, ожидайте, мы перезвоним в ближайшее время
                                </div>
                                <TonightButton text='Ок' onClick={props.handleClose} />
                            </div>
                        </div>
                    </Modal.Body>
                </>}
            </Modal>
    </>
}

export default QuestionsModal;
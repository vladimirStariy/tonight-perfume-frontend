import { FC, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import styles from './questions.modal.module.css';
import TonightButton from '../../../../../UI/Components/button/tonight-button';
import DataInput from '../../../../../UI/Components/input/data.input';
import { useRequestConsultationMutation } from '../../../../../services/consultation.service';

interface IQModal {
    show: boolean;
    handleClose: () => void;
}

const QuestionsModal: FC<IQModal>  = (props) => {
    const [phase, setPhase] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [sendRequest] = useRequestConsultationMutation();

    const handleSendRequest = async () => {
        let returned = await sendRequest({name: name, phone: phone}).unwrap();
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
                                            onChange={(e) => setName(e.currentTarget.value)}
                                            value={name}
                                        />
                                    </div>
                                    <div className={styles.inputData}>
                                        <div className={styles.inputLabel}>Номер телефона</div>
                                        <DataInput 
                                            onChange={(e) => setPhone(e.currentTarget.value)}
                                            value={phone}
                                        />
                                    </div>
                                </div>
                                <TonightButton text='Отправить' onClick={handleSendRequest} />
                            </div>
                        </div>
                    </Modal.Body>
                </> : <>
                    
                </>}
            </Modal>
    </>
}

export default QuestionsModal;
import { FC } from 'react';
import Modal from 'react-bootstrap/Modal';

import styles from './questions.modal.module.css';
import TonightButton from '../../../../../UI/Components/button/tonight-button';
import DataInput from '../../../../../UI/Components/input/data.input';

interface IQModal {
    show: boolean;
    handleClose: () => void;
}

const QuestionsModal: FC<IQModal>  = (props) => {
    return <>
        <Modal show={props.show} 
            onHide={props.handleClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={styles.modalSett}
        >
                <Modal.Header className={styles.modalHeader} closeButton>
                    
                </Modal.Header>

                <Modal.Body className={styles.modalBody}>
                    <div className={styles.bodyWrapper}>
                        <div className={styles.bodyContainer}>
                            <div className={styles.headerLabel}>
                                Оставьте свой номер телефона и мы перезвоним вам в ближайшее время
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputData}>
                                    <div className={styles.inputLabel}>Имя</div>
                                    <DataInput />
                                </div>
                                <div className={styles.inputData}>
                                    <div className={styles.inputLabel}>Номер телефона</div>
                                    <DataInput />
                                </div>
                            </div>
                            <TonightButton text='Отправить' onClick={props.handleClose} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
    </>
}

export default QuestionsModal;
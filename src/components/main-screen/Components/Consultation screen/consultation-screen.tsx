import { FC, useState } from "react";

import styles from '../../../styles/main-screen-modules/consultation.module.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import TonightButton from "../../../../UI/Components/button/tonight-button";

const ConsultationScreen: FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div className={styles.consultWrapper}>
        <div className={styles.consultBlock}>
            <div className={styles.imageBlock}></div>
            <div className={styles.infoBlock}>
                <div className={styles.infoSubBlock}>
                    <h1 className="block-title"><b>У вас есть вопросы?</b></h1>
                    <h3 className={styles.blockInfoText}>Наш сотрудник оперативно свяжется с вами и не только ответит на ваши вопросы, но и поможет с выбором</h3>
                </div>
                <div className={styles.consultButton}>
                    <TonightButton text="Бесплатная консультация" onClick={handleShow}/>
                </div>
            </div>
            
            <Modal show={show} 
                   onHide={handleClose} 
                   aria-labelledby="contained-modal-title-vcenter"
                   centered
                   className={styles.modalSett}
            >
                <Modal.Header closeButton>
                    
                </Modal.Header>

                <Modal.Body>
                    Оставьте свой номер телефона и мы перезвоним вам в ближайшее время
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                className={styles.inputSett}
                            />
                            </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className={styles.modalButton}>
                        Отправить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>
}

export default ConsultationScreen;
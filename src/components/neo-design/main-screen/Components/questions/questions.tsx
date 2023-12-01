import { FC, useState } from "react";

import styles from './questions.module.css';

import TonightButton from "../../../../../UI/Components/button/tonight-button";
import QuestionsModal from "./questions.modal";
import { Button, Modal } from "react-bootstrap";

const Questions: FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return <>
        <div className={styles.questionsBlock}>
            <div className={styles.questionBodyWrapper}>
                <div className={styles.textBlock}>
                    <div className={styles.textHeader}>
                        У вас есть вопросы?
                    </div>
                    <div className={styles.textMain}>
                        Наш сотрудник оперативно свяжется с вами и не только ответит на ваши вопросы, но и поможет с выбором
                    </div>
                </div>
                <div className={styles.buttonBlock}>
                    <TonightButton onClick={handleShow} text="Бесплатная консультация" />
                </div>

                <QuestionsModal show={show} handleClose={handleClose} />
            </div>
        </div>
    </>
}

export default Questions;
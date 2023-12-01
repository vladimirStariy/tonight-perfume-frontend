import { FC } from "react";
import Accordion from 'react-bootstrap/Accordion';

import styles from '../../styles/main-screen-modules/answer.accordion.module.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useScreenSize from "../../utils/use-screen-size";

const AnswerAccordion: FC = () => {
    const screenSize = useScreenSize();
    return <>
        <div className={styles.answersWrapper}>
            <div className={styles.labelBlock}>
                <h1 className='block-title'><b>Ответы на вопросы</b></h1>
            </div>
            <Row className={styles.answersRow}>
                <Col className={styles.left}>
                    <div className={styles.accordionContainer}>
                        <Accordion className={styles.accordion} defaultActiveKey="0" flush>
                            <Accordion.Item className={styles.customAcc} eventKey="0">
                                <Accordion.Header className={styles.accItemHeader}><b className={styles.answerLabel}>Что такое атомайзер?</b></Accordion.Header>
                                <Accordion.Body>
                                    <label className={styles.answerText}>Атомайзер — это стеклянная, пластиковая или металлическая ёмкость со спреем или без, предназначенная для хранения небольшого (как правило, от 1 до 50 мл) объёма парфюмерной жидкости.</label>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={styles.customAcc} eventKey="1">
                                <Accordion.Header><b className={styles.answerLabel}>Что такое селективная парфюмерия?</b></Accordion.Header>
                                <Accordion.Body>
                                    Атомайзер — это стеклянная, пластиковая или металлическая ёмкость со спреем или без, предназначенная для хранения небольшого (как правило, от 1 до 50 мл) объёма парфюмерной жидкости.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={styles.customAcc} eventKey="2">
                                <Accordion.Header><b className={styles.answerLabel}>Вы продаете оригинальную парфюмерию?</b></Accordion.Header>
                                <Accordion.Body>
                                    Атомайзер — это стеклянная, пластиковая или металлическая ёмкость со спреем или без, предназначенная для хранения небольшого (как правило, от 1 до 50 мл) объёма парфюмерной жидкости.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={styles.customAcc} eventKey="3">
                                <Accordion.Header><b className={styles.answerLabel}>Как я могу получить свой заказ?</b></Accordion.Header>
                                <Accordion.Body>
                                    Атомайзер — это стеклянная, пластиковая или металлическая ёмкость со спреем или без, предназначенная для хранения небольшого (как правило, от 1 до 50 мл) объёма парфюмерной жидкости.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={styles.customAcc} eventKey="4">
                                <Accordion.Header><b className={styles.answerLabel}>У вас есть бонусная программа?</b></Accordion.Header>
                                <Accordion.Body>
                                    Атомайзер — это стеклянная, пластиковая или металлическая ёмкость со спреем или без, предназначенная для хранения небольшого (как правило, от 1 до 50 мл) объёма парфюмерной жидкости.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                {screenSize.width < 1200 ? <></> : 
                <Col className={styles.right}>
                    <div className={styles.imgHolder}>
                        <div className={styles.imageBlock}></div>
                    </div>
                </Col>
                }
            </Row>
            
        </div>
        
    </>
}

export default AnswerAccordion;
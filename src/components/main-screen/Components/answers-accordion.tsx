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
                                <Accordion.Header className={styles.accItemHeader}><b className={styles.answerLabel}>Что такое парфюм в распив?</b></Accordion.Header>
                                <Accordion.Body>
                                    <label className={styles.answerText}>Это возможность приобрести 2-15 мл аромата из оригинального флакона в удобном атомайзере.</label>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={styles.customAcc} eventKey="1">
                                <Accordion.Header><b className={styles.answerLabel}>Есть ли разница между мужским и женским парфюмом?</b></Accordion.Header>
                                <Accordion.Body>
                                    Да, основное отличие заключается в композиции аромата и том, как он воспринимается окружающими. Многие ароматы сейчас доступны как для мужчин, так и для женщин, и выбор парфюма в конечном итоге зависит от индивидуальных предпочтений и химии кожи каждого человека.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={styles.customAcc} eventKey="2">
                                <Accordion.Header><b className={styles.answerLabel}>Как выбрать парфюм на подарок?</b></Accordion.Header>
                                <Accordion.Body>
                                    Выбор парфюма для подарка может быть сложным, но даже эту задачу поможет выполнить наш консультант, задав вам несколько уточняющих вопросов.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={styles.customAcc} eventKey="3">
                                <Accordion.Header><b className={styles.answerLabel}>Вы продаете оригинальную парфюмерию?</b></Accordion.Header>
                                <Accordion.Body>
                                    Да, в нашем ассортименте ТОЛЬКО оригинальная парфюмерия.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={styles.customAcc} eventKey="4">
                                <Accordion.Header><b className={styles.answerLabel}>У вас есть бонусная программа?</b></Accordion.Header>
                                <Accordion.Body>
                                    Да, авторизируйтесь на сайте для отслеживания ваших бонусов.
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
import { FC } from "react";

import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

import styles from '../../../styles/filter/accordion.module.css'
import { Link } from "react-router-dom";
import TonightInput from "../../../../UI/Components/input/tonight-input";
import TonightButton from "../../../../UI/Components/button/tonight-button";

const FilterAccordion: FC = () => {
    return <div className={styles.accordionContainer}>
        <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen flush>
            <Accordion.Item className={styles.customAcc} eventKey="0">
                <Accordion.Header>Категория</Accordion.Header>
                <Accordion.Body>
                    <Form.Check 
                        type='checkbox'
                        id={`default-checkbox-1`}
                        label={`default checkbox`}
                    />
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="1">
                <Accordion.Header>Бренд</Accordion.Header>
                <Accordion.Body>
                    <Form.Check 
                        type='checkbox'
                        id={`default-checkbox-1`}
                        label={`default checkbox`}
                    />
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="2">
                <Accordion.Header>Страна бренда</Accordion.Header>
                <Accordion.Body>
                    <Form.Check 
                        type='checkbox'
                        id={`default-checkbox-1`}
                        label={`default checkbox`}
                    />
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="3">
                <Accordion.Header>Группа ароматов</Accordion.Header>
                <Accordion.Body>
                    <Form.Check 
                        type='checkbox'
                        id={`default-checkbox-1`}
                        label={`default checkbox`}
                    />
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="4">
                <Accordion.Header>Ноты</Accordion.Header>
                <Accordion.Body>
                    <TonightInput />
                    <Form.Check 
                        type='checkbox'
                        id={`default-checkbox-1`}
                        label={`default checkbox`}
                    />
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <TonightButton text="Показать 130 товаров" />
    </div>
}

export default FilterAccordion;
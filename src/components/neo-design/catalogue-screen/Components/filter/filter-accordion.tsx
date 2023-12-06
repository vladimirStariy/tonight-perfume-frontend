import { FC } from "react";

import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

import styles from '../../../../styles/filter/accordion.module.css'
import { Link } from "react-router-dom";
import TonightInput from "../../../../../UI/Components/input/tonight-input";
import TonightButton from "../../../../../UI/Components/button/tonight-button";

import { filterAPI } from "../../../../../services/filter.service";

interface IFilterAccordion {
    handleBrand: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCountry: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNotes: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleGroup: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheckData: () => void;
}

const FilterAccordion: FC<IFilterAccordion> = (props) => {
    const {data: filter, error, isLoading} = filterAPI.useFetchFilterQuery(7);

    return <div className={styles.accordionContainer}>
        <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen flush>
            <Accordion.Item className={styles.customAcc} eventKey="0">
                <Accordion.Header>Категория</Accordion.Header>
                <Accordion.Body>
                    {
                        filter?.categories.map((category, index) => (
                            <Form.Check 
                                onChange={(e) => props.handleCategory(e)}
                                key={index}
                                type='checkbox'
                                value={`${category.category_ID}`}
                                id={`category-checkbox-${category.category_ID}`}
                                label={`${category.name}`}
                            />
                        ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="1">
                <Accordion.Header>Бренд</Accordion.Header>
                <Accordion.Body>
                    {
                        filter?.brands.map((brand, index) => (
                            <Form.Check
                                onChange={(e) => props.handleBrand(e)}
                                key={index}
                                type='checkbox'
                                value={`${brand.brand_ID}`}
                                id={`brand-checkbox-${brand.brand_ID}`}
                                label={`${brand.name}`}
                            />
                        ))
                    }
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="2">
                <Accordion.Header>Страна бренда</Accordion.Header>
                <Accordion.Body>
                    {
                        filter?.countries.map((country, index) => (
                            <Form.Check
                                onChange={(e) => props.handleCountry(e)}
                                key={index}
                                type='checkbox'
                                value={`${country}`}
                                id={`brand-checkbox-${country}`}
                                label={`${country}`}
                            />
                        ))
                    }
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="3">
                <Accordion.Header>Группа ароматов</Accordion.Header>
                <Accordion.Body>
                    {
                        filter?.aromaGroups.map((aromaGroup, index) => (
                            <Form.Check 
                                key={index}
                                type='checkbox'
                                id={`aromaGroup-checkbox-${aromaGroup.aromaGroup_ID}`}
                                label={`${aromaGroup.aromaGroup_Name}`}
                            />
                        ))
                    }
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="4">
                <Accordion.Header>Ноты</Accordion.Header>
                <Accordion.Body>
                    <TonightInput />
                    {
                        filter?.perfumeNotes.map((note, index) => (
                            <Form.Check
                                onChange={(e) => props.handleNotes(e)}
                                key={index}
                                type='checkbox'
                                value={`${note.note_ID}`}
                                id={`notes-checkbox-${note.note_ID}`}
                                label={`${note.name}`}
                            />
                        ))
                    }
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <TonightButton onClick={props.handleCheckData} text="Показать 130 товаров" />
    </div>
}

export default FilterAccordion;
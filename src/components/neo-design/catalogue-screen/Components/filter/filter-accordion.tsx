import { FC, useEffect, useState } from "react";

import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

import styles from '../../../../styles/filter/accordion.module.css'
import { Link } from "react-router-dom";
import TonightInput from "../../../../../UI/Components/input/tonight-input";
import TonightButton from "../../../../../UI/Components/button/tonight-button";

import { filterAPI } from "../../../../../services/filter.service";
import { IFilter } from "../../../../../store/models/filter/IFilter";
import TonightCheckbox from "../../../../../UI/Components/custom-checkbox/tonight.checkbox";

interface IFilterAccordion {
    filter: IFilter | undefined;
    checkedBrands: any[];
    handleBrand: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checkedCategories: any[];
    handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checkedCountries: any[];
    handleCountry: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checkedNotes: any[];
    handleNotes: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checkedGroups: any[];
    handleGroup: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheckData: () => void;

    handleShowAllBrands: () => void;
    handleCollapseBrands: () => void;

    accordionBrands: any[];
    accordionNotes: any[];
    accordionCountries: any[];
    accordionGroups: any[];
}

const FilterAccordion: FC<IFilterAccordion> = (props) => {
    const [isBrandsShowed, setIsBrandsShowed] = useState(false);
    const [isCountriesShowed, setIsCountriesShowed] = useState(false);
    const [isGroupsShowed, setIsGroupsShowed] = useState(false);
    const [isNotesShowed, setIsNotesShowed] = useState(false);

    const handleShowAllBrands = () => {
        setIsBrandsShowed(true);
        props.handleShowAllBrands();
    }

    const handleCollapseAllBrands = () => {
        setIsBrandsShowed(false)
        props.handleCollapseBrands();
    }

    return <div className={styles.accordionContainer}>
        <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen flush>
            <Accordion.Item className={styles.customAcc} eventKey="0">
                <Accordion.Header>Категория</Accordion.Header>
                <Accordion.Body>
                    {
                        props.filter?.categories.map((category, index) => (
                            <Form.Check
                                onChange={(e) => props.handleCategory(e)}
                                key={index}
                                type='checkbox'
                                value={`${category.category_ID}`}
                                id={`category-checkbox-${category.category_ID}`}
                                label={`${category.name}`}
                                checked={props.checkedCategories.includes(category.category_ID.toString())}
                            />
                        ))
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="1">
                <Accordion.Header>Бренд</Accordion.Header>
                <Accordion.Body>
                    {
                        props.accordionBrands.map((brand, index) => (
                            <Form.Check
                                onChange={(e) => props.handleBrand(e)}
                                key={index}
                                type='checkbox'
                                value={`${brand.brand_ID}`}
                                id={`brand-checkbox-${brand.brand_ID}`}
                                label={`${brand.name}`}
                                checked={props.checkedBrands.includes(brand.brand_ID.toString())}
                            />
                        ))
                    }
                    {isBrandsShowed ? <>
                        <div onClick={handleCollapseAllBrands} style={{textDecoration: 'underline', cursor: 'pointer'}}>Свернуть</div>
                    </> : <>
                        <div onClick={handleShowAllBrands} style={{textDecoration: 'underline', cursor: 'pointer'}}>Показать все</div>
                    </>}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className={styles.customAcc} eventKey="2">
                <Accordion.Header>Страна бренда</Accordion.Header>
                <Accordion.Body>
                    {
                        props.filter?.countries.map((country, index) => (
                            <Form.Check
                                onChange={(e) => props.handleCountry(e)}
                                key={index}
                                type='checkbox'
                                value={`${country}`}
                                id={`brand-checkbox-${country}`}
                                label={`${country}`}
                                checked={props.checkedCountries.includes(country)}
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
                        props.filter?.aromaGroups.map((aromaGroup, index) => (
                            <Form.Check 
                                key={index}
                                type='checkbox'
                                id={`aromaGroup-checkbox-${aromaGroup.aromaGroup_ID}`}
                                label={`${aromaGroup.aromaGroup_Name}`}
                                value={aromaGroup.aromaGroup_ID}
                                onChange={(e) => props.handleGroup(e)}
                                checked={props.checkedGroups.includes(aromaGroup.aromaGroup_ID.toString())}
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
                        props.filter?.perfumeNotes.map((note, index) => (
                            <Form.Check
                                onChange={(e) => props.handleNotes(e)}
                                key={index}
                                type='checkbox'
                                value={`${note.note_ID}`}
                                id={`notes-checkbox-${note.note_ID}`}
                                label={`${note.name}`}
                                checked={props.checkedNotes.includes(note.note_ID.toString())}
                            />
                        ))
                    }
                    <Link to='' style={{textDecoration: 'underline'}}>Показать все</Link>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <TonightButton onClick={props.handleCheckData} text="Применить фильтр" />
    </div>
}

export default FilterAccordion;
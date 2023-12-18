import { FC, useState } from 'react';
import Offcanvas from "react-bootstrap/Offcanvas";
import ProductFilter from './filter';

import styles from '../../../../styles/filter/filter.module.css'

import FilterRangedSlider from './filter-ranged-slider';
import FilterPills from './filter-pills/filter-pill/filter.pills';
import FilterAccordion from './filter-accordion';
import { useFetchFilterQuery } from '../../../../../services/filter.service';
import { IFilter } from '../../../../../store/models/filter/IFilter';

interface IProps {
    handleClose: () => void;
    show: boolean;

    brandsInfo: any[];
    handleBrand: (e: React.ChangeEvent<HTMLInputElement>) => void;
    categoriesInfo: any[];
    handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
    countriesInfo: any[]
    handleCountry: (e: React.ChangeEvent<HTMLInputElement>) => void;
    notesInfo: any[];
    handleNotes: (e: React.ChangeEvent<HTMLInputElement>) => void;
    groupsInfo: any[]
    handleGroup: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheckData: () => void;

    filter: IFilter;
    values: number[];

    handlePrice: (value: number[]) => void;

    selectedPills: number[];
    handleSelectVolumes: (value: number) => void;

    handleShowAllBrands: () => void;
    handleCollapseBrands: () => void;
    handleShowAllCountries: () => void;
    handleCollapseCountries: () => void;
    handleShowAllNotes: () => void;
    handleCollapseNotes: () => void;
    handleShowAllGroups: () => void;
    handleCollapseGroups: () => void;

    accordionBrands: any[];
    accordionNotes: any[];
    accordionCountries: any[];
    accordionGroups: any[];
}

const FilterOffcanvas: FC<IProps> = (props) => {
    return <>
        <Offcanvas show={props.show} onHide={props.handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Фильтры
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className={styles.filterContent}>
                    <div className={styles.rangeSliderContainer}>
                        <FilterRangedSlider 
                            values={props.values}
                            minPrice={props.filter.minPrice}
                            maxPrice={props.filter.maxPrice}
                            handleSetPrice={props.handlePrice}
                        />
                        <div className={styles.checkBtnGroup}>
                            <FilterPills 
                                initialValues={[2, 5, 8, 10, 15]}
                                selected={props.selectedPills} 
                                handleSelectValues={props.handleSelectVolumes}
                            />
                        </div>
                    </div>
                    <FilterAccordion
                        filter={props.filter}
                        checkedBrands={props.brandsInfo}
                        checkedCategories={props.categoriesInfo}
                        checkedCountries={props.countriesInfo}
                        checkedGroups={props.groupsInfo}
                        checkedNotes={props.notesInfo}
                        
                        handleBrand={props.handleBrand}
                        handleCategory={props.handleCategory}
                        handleGroup={props.handleGroup}
                        handleCountry={props.handleCountry}
                        handleNotes={props.handleNotes}
                        handleCheckData={props.handleCheckData}

                        handleShowAllBrands={props.handleShowAllBrands}
                        handleCollapseBrands={props.handleCollapseBrands}
                        handleShowAllGroups={props.handleShowAllGroups}
                        handleCollapseGroups={props.handleCollapseGroups}
                        handleShowAllNotes={props.handleShowAllNotes}
                        handleCollapseNotes={props.handleCollapseGroups}
                        handleShowAllCountries={props.handleShowAllCountries}
                        handleCollapseCountries={props.handleCollapseCountries}

                        accordionBrands={props.accordionBrands}
                        accordionCountries={props.accordionCountries}
                        accordionGroups={props.accordionGroups}
                        accordionNotes={props.accordionNotes}
                    />
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}

export default FilterOffcanvas;
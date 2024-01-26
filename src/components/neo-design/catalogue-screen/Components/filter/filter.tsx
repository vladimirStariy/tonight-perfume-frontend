import { FC, useEffect } from 'react'

import styles from '../../../../styles/filter/filter.module.css'

import FilterAccordion from './filter-accordion';
import FilterRangedSlider from './filter-ranged-slider';

import FilterPills from './filter-pills/filter-pill/filter.pills';
import { IFilter } from '../../../../../store/models/filter/IFilter';

interface IProductFilter {
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

    priceValues: number[];
    handlePrice: (value: number[]) => void;

    filter: IFilter;

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

    isForOrder: boolean;
}

const ProductFilter: FC<IProductFilter> = (props) => {
    return <>
        <div className={styles.filterContent}>
            {!props.isForOrder ? <div className={styles.rangeSliderContainer}>
                <FilterRangedSlider 
                    values={props.priceValues}
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
            </div> : <></>}
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
    </>
}

export default ProductFilter;
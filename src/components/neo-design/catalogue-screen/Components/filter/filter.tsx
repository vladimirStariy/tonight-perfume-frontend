import { FC } from 'react'

import styles from '../../../../styles/filter/filter.module.css'

import FilterAccordion from './filter-accordion';
import FilterRangedSlider from './filter-ranged-slider';

import FilterPills from './filter-pills/filter-pill/filter.pills';
import { useFetchFilterQuery } from '../../../../../services/filter.service';

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

    minPrice: number;
    maxPrice: number;
    handlePrice: (value: number[]) => void;

    selectedPills: number[];
    handleSelectVolumes: (value: number) => void;
}

const ProductFilter: FC<IProductFilter> = (props) => {
    const {data: filter, error, isLoading} = useFetchFilterQuery(7)

    return <>
        <div className={styles.filterContent}>
            <div className={styles.rangeSliderContainer}>
                <FilterRangedSlider 
                    minPrice={props.minPrice}
                    maxPrice={props.maxPrice}
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
                filter={filter ? filter : undefined}
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
            />
        </div>
    </>
}

export default ProductFilter;
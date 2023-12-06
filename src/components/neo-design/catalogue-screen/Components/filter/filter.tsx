import { FC } from 'react'

import Row from 'react-bootstrap/Row'

import styles from '../../../../styles/filter/filter.module.css'

import FilterAccordion from './filter-accordion';
import FilterRangedSlider from './filter-ranged-slider';

import FilterPillItem from './filter-pills/filter-pill-item/filter.pill.item';
import FilterPills from './filter-pills/filter-pill/filter.pills';

interface IProductFilter {
    handleBrand: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCountry: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNotes: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleGroup: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCheckData: () => void;
    handlePrice: (value: number[]) => void;

    selectedPills: number[];
    handleSelectVolumes: (value: number) => void;
}

const ProductFilter: FC<IProductFilter> = (props) => {

    return <>
        <div className={styles.filterContent}>
            <div className={styles.rangeSliderContainer}>
                <FilterRangedSlider 
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
import { FC, useEffect, useState } from "react";

import layout from '../layout/layout.module.css';
import styles from './catalogue.screen.module.css'
import useScreenSize from "../../utils/use-screen-size";
import CatalogueHeader from "./Components/catalogue-header/catalogue.header";
import ProductFilter from "../catalogue-screen/Components/filter/filter";
import ProductGrid from "../product-grid/product.grid";
import { useFetchFilterBrandsMutation, useFetchFilterQuery, useSendFilterMutation } from "../../../services/filter.service";
import { IFilterRequest } from "../../../store/models/filter/IFIlterRequest";
import { IProductsWithPagination } from "../../../store/models/product/IProductsWithPagination";
import Loader from "../../../UI/Components/loader/loader";

const CatalogueScreen: FC = () => {
    const screenSize = useScreenSize();

    const [sendFilter, {data, isError}] = useSendFilterMutation();
    const {data: filter, error, isLoading: filterIsLoading, refetch} = useFetchFilterQuery(7)
    const [showAllBrands, {isError: brandsError}] = useFetchFilterBrandsMutation();

    const [fetchedData, setfetchedData] = useState<IProductsWithPagination>();

    const [page, setPage] = useState(1);

    const [values, setValues] = useState<number[]>([]);
    const [brandInfo, setBrandInfo] = useState<Array<any>>([]);
    const [categoryInfo, setCategoryInfo] = useState<Array<any>>([]);
    const [groupInfo, setGroupInfo] = useState<Array<any>>([]);
    const [countriesInfo, setCountriesInfo] = useState<Array<any>>([]);
    const [notesInfo, setNotesInfo] = useState<Array<any>>([]);
    const [selectedVolumes, setSelectedVolumes] = useState<number[]>([]);

    const [accordionBrands, setAccordionBrands] = useState<Array<any>>([]);
    const [accordionCountries, setAccordionCountries] = useState<Array<any>>([]);
    const [accordionAromaGroups, setAccordionAromaGroups] = useState<Array<any>>([]);
    const [accordionNotes, setAccordionNotes] = useState<Array<any>>([]);

    const filterRequestData: IFilterRequest = {
        page: page,
        volumes: selectedVolumes,
        prices: values,
        brands: brandInfo,
        aromaGroups: groupInfo,
        categories: categoryInfo,
        perfumeNotes: notesInfo,
        countries: countriesInfo
    }

    const handleSelectVolumes = (value: number) => {
        if(selectedVolumes.includes(value)) setSelectedVolumes(selectedVolumes.filter((item) => item !== value))
        else setSelectedVolumes((prev) => [...prev, value])
    }

    const handleCheckBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (brandInfo.includes(e.target.value)) {
            const idCollection = brandInfo.filter((id) => id !== e.target.value);
            setBrandInfo(idCollection);
        } else {
            const idCollection = [...brandInfo];
            idCollection.push(e.target.value);
            setBrandInfo(idCollection);
        }
    }

    const handleCheckCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (categoryInfo.includes(e.target.value)) {
            const idCollection = categoryInfo.filter((id) => id !== e.target.value);
            setCategoryInfo(idCollection);
        } else {
            const idCollection = [...categoryInfo];
            idCollection.push(e.target.value);
            setCategoryInfo(idCollection);
        }
    }

    const handleCheckGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (groupInfo.includes(e.target.value)) {
            const idCollection = groupInfo.filter((id) => id !== e.target.value);
            setGroupInfo(idCollection);
        } else {
            const idCollection = [...groupInfo];
            idCollection.push(e.target.value);
            setGroupInfo(idCollection);
        }
    }

    const handleCheckCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (countriesInfo.includes(e.target.value)) {
            const idCollection = countriesInfo.filter((id) => id !== e.target.value);
            setCountriesInfo(idCollection);
        } else {
            const idCollection = [...countriesInfo];
            idCollection.push(e.target.value);
            setCountriesInfo(idCollection);
        }
    }

    const handleCheckNotes = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (notesInfo.includes(e.target.value)) {
            const idCollection = notesInfo.filter((id) => id !== e.target.value);
            setNotesInfo(idCollection);
        } else {
            const idCollection = [...notesInfo];
            idCollection.push(e.target.value);
            setNotesInfo(idCollection);
        }
    }

    const handleCheckData = async () => {
        try {
            const returned = await sendFilter(filterRequestData).unwrap();
            setfetchedData(returned);
        } catch {}
    }

    const handleNextPage = () => {
        if(fetchedData && fetchedData.pagination.currentPage < fetchedData.pagination.totalPages) {
            setPage(page+1)
        }
    }

    const handlePrevPage = () => {
        if(fetchedData && fetchedData.pagination.currentPage > 1)
            setPage(page-1)
    }

    const handleShowAllBrands = async () => {
        const response = await showAllBrands().unwrap();
        setAccordionBrands(response)
    }
    const handleCollapseBrands = async () => {
        if(filter) setAccordionBrands(filter?.brands)
    }

    useEffect(() => {
        if(filter) {
            setValues([filter.minPrice, filter.maxPrice])

            setAccordionAromaGroups(filter.aromaGroups);
            setAccordionBrands(filter.brands);
            setAccordionCountries(filter.countries)
            setAccordionNotes(filter.perfumeNotes)
        } 
    }, [filter])

    useEffect(() => {
        handleCheckData();
    }, [page])

    return <>
        
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Каталог
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Каталог</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>
            <div className={`${layout.tonightContainer} ${layout.gap}`}>
                {filter ? <>
                    <CatalogueHeader
                        brandsInfo={brandInfo}
                        handleBrand={handleCheckBrand}
                        categoriesInfo={categoryInfo}
                        handleCategory={handleCheckCategory}
                        groupsInfo={groupInfo}
                        handleGroup={handleCheckGroup}
                        countriesInfo={countriesInfo}
                        handleCountry={handleCheckCountry}
                        notesInfo={notesInfo}
                        handleNotes={handleCheckNotes}

                        handleShowAllBrands={handleShowAllBrands}
                        handleCollapseBrands={handleCollapseBrands}

                        handleCheckData={handleCheckData}

                        selectedPills={selectedVolumes}
                        
                        filter={filter}
                        values={values}

                        handlePrice={setValues}
                        handleSelectVolumes={handleSelectVolumes}

                        accordionBrands={accordionBrands}
                        accordionCountries={accordionCountries}
                        accordionGroups={accordionAromaGroups}
                        accordionNotes={accordionNotes}
                    />
                </> : <></>}
                <div className={styles.catalogueContentFull}>
                    {screenSize.width < 1248 ? <></> : <>
                        {filterIsLoading ? <>
                            <div className={styles.loaderWrapper}><Loader /></div>
                        </> : <>
                            {filter ? <>
                                <div className={styles.catalogueFilterContainer}>
                                    <ProductFilter 
                                        brandsInfo={brandInfo}
                                        handleBrand={handleCheckBrand}
                                        categoriesInfo={categoryInfo}
                                        handleCategory={handleCheckCategory}
                                        groupsInfo={groupInfo}
                                        handleGroup={handleCheckGroup}
                                        countriesInfo={countriesInfo}
                                        handleCountry={handleCheckCountry}
                                        notesInfo={notesInfo}
                                        handleNotes={handleCheckNotes}

                                        filter={filter}

                                        handleCheckData={handleCheckData}
                                        selectedPills={selectedVolumes}
                                        priceValues={values}
                                        handlePrice={setValues}
                                        handleSelectVolumes={handleSelectVolumes}

                                        handleShowAllBrands={handleShowAllBrands}
                                        handleCollapseBrands={handleCollapseBrands}
                                        
                                        accordionBrands={accordionBrands}
                                        accordionCountries={accordionCountries}
                                        accordionGroups={accordionAromaGroups}
                                        accordionNotes={accordionNotes}
                                    />
                                </div>
                            </> : <>
                            
                            </>}
                        </>}
                    </>
                        
                    }
                    <div className={styles.catalogueProductContainer}>
                        {isError ? <div className={styles.errorPlaceholder}>
                            <b>Ошибка соединения</b>
                        </div> : <>
                            {fetchedData !== undefined ? 
                                <ProductGrid products={fetchedData.items} />
                                    :
                                <>
                                    <div className={styles.loaderWrapper}><Loader /></div>
                                </>
                            }
                        </>}
                    </div>
                </div>
            </div>
            <div className={layout.tonightContainer}>
                <div className={styles.paginationContainer}>

                    <div className={fetchedData && fetchedData.pagination.currentPage > 1 ? styles.leftArrow : styles.arrowDisabled}>
                        <svg onClick={handlePrevPage} xmlns="http://www.w3.org/2000/svg" width="34" height="25" viewBox="0 0 34 25" fill="none">
                            <path d="M0.939339 13.5607C0.353554 12.9749 0.353554 12.0251 0.939339 11.4393L10.4853 1.8934C11.0711 1.30761 12.0208 1.30761 12.6066 1.8934C13.1924 2.47919 13.1924 3.42893 12.6066 4.01472L4.12132 12.5L12.6066 20.9853C13.1924 21.5711 13.1924 22.5208 12.6066 23.1066C12.0208 23.6924 11.0711 23.6924 10.4853 23.1066L0.939339 13.5607ZM34 14H2V11H34V14Z"/>
                        </svg>
                    </div>
                    
                    <div className={styles.pages}>
                        {
                            fetchedData ? 
                                Array.from({length: fetchedData.pagination.totalPages}, (_, i) => 
                                    <div 
                                        style={page === i+1 ? {color: '#D0BEE5'} : {color: '#1E1E1E'}} 
                                        key={i} 
                                        onClick={() => setPage(i+1)} 
                                        className={styles.pageTab}
                                    >
                                            <b>{i+1}</b>
                                    </div>
                                )
                            :
                                <></>
                        }
                    </div>
                    
                    <div className={fetchedData && fetchedData.pagination.currentPage < fetchedData.pagination.totalPages ? styles.rightArrow : styles.arrowDisabled}>
                        <svg onClick={handleNextPage} xmlns="http://www.w3.org/2000/svg" width="34" height="25" viewBox="0 0 34 25" fill="none">
                            <path d="M33.0607 13.5607C33.6464 12.9749 33.6464 12.0251 33.0607 11.4393L23.5147 1.8934C22.9289 1.30761 21.9792 1.30761 21.3934 1.8934C20.8076 2.47919 20.8076 3.42893 21.3934 4.01472L29.8787 12.5L21.3934 20.9853C20.8076 21.5711 20.8076 22.5208 21.3934 23.1066C21.9792 23.6924 22.9289 23.6924 23.5147 23.1066L33.0607 13.5607ZM0 14H32V11H0V14Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CatalogueScreen;
import { FC } from "react";

import layout from '../layout/layout.module.css';

import SwiperSlider from "./Components/Main slider/swiper-slider";
import Advantages from "./Components/advantages/advantages";
import Questions from "./Components/questions/questions";
import AnswerAccordion from "../../main-screen/Components/answers-accordion";
import BrandSlider from "./Components/brand-slider/brand-slider";
import ProductSlider from "./Components/product-slider/product-slider";
import { useGetPopularProductsQuery } from "../../../services/filter.service";


const MainScreen: FC = () => {
    const {data: products, isSuccess} = useGetPopularProductsQuery();

    return <>
        <SwiperSlider />
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightContainer}>
                {isSuccess ? <>
                    <ProductSlider />
                </> : <></>}
            </div>
            <div className={layout.tonightContainer}>
                <Advantages />
            </div>
            <div className={layout.tonightContainer}>
                <BrandSlider />
            </div>
            <div className={layout.tonightContainer}>
                <AnswerAccordion />
            </div>
            <div className={layout.tonightContainer}>
                <Questions />
            </div>
            <div className={layout.tonightContainer}>
                
            </div>
        </div>
    </>
}

export default MainScreen;
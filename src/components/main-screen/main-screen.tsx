import { FC } from "react";

import SwiperSlider from "./Components/Slider/swiper-slider";
import ProductSlider from "../neo-design/main-screen/Components/product-slider/product-slider";
import AdvantagesScreen from "./Components/advantages-screen";
import BrandSlider from "../neo-design/main-screen/Components/brand-slider/brand-slider";
import AnswerAccordion from "./Components/answers-accordion";
import ConsultationScreen from "./Components/Consultation screen/consultation-screen";

import '../styles/layouts/main.layout.css'

const MainScreen: FC = () => {
    return <main>
        <SwiperSlider />
        <div className="main-wrapper">
            <div className='main-container'>
                <div>
                    <ProductSlider />
                </div>
                <div>
                    <AdvantagesScreen />
                </div>
                <div>
                    <BrandSlider />
                </div>
                <div>
                    <AnswerAccordion />
                </div>
                <div>
                    <ConsultationScreen />
                </div>
            </div>
        </div>
        
    </main>
}

export default MainScreen;
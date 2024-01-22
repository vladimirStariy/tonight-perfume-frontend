import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import layout from '../../../layout/layout.module.css'

import BrandCard from "./brand-card";
import TonightArrowGroup from "../../../../../UI/Components/arrow-group/tonight-arrow-group";
import useScreenSize from "../../../../utils/use-screen-size";
import { useGetBrandsQuery } from "../../../../../services/brand.service";

register();

const BrandSlider = () => {
    const screenSize = useScreenSize();
    const swiperRef = useRef(null);
    const {data: brands} = useGetBrandsQuery();

    const handleNext = () => {
        swiperRef.current.swiper.slideNext()
    }

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev()
    }

    useEffect(() => {
        const params = {
            loop: true,
            autoplay: false,
            
            breakpoints: {
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 24,
                },
                726: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1248: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                },
            },
            injectStyles: [],
        }

        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    return <>
            <div className={layout.cardLabel}>
                Бренды
                {screenSize.width <= 725 ? <></> :
                    <TonightArrowGroup
                        prevHandle={handlePrev}
                        nextHandle={handleNext}
                    />   
                }
            </div>

            <swiper-container ref={swiperRef} init="false">
                {brands ? brands.map((item) => (
                    <swiper-slide>
                        <BrandCard id={item.brand_ID} imagePath={`/${item.imagePath}`} />
                    </swiper-slide>
                )) : <></>}
            </swiper-container>
    </>
}

export default BrandSlider;
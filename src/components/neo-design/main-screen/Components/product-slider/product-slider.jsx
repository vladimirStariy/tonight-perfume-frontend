import { useEffect, useRef, FC } from "react";

import { register } from "swiper/element/bundle";
import ProductCard from "../../../product-grid/product.card";

import useScreenSize from "../../../../utils/use-screen-size";
import styles from './product.slider.module.css'
import layout from '../../../layout/layout.module.css'
import TonightArrowGroup from "../../../../../UI/Components/arrow-group/tonight-arrow-group";
import Loader from "../../../../../UI/Components/loader/loader";
import { useGetPopularProductsQuery } from "../../../../../services/filter.service";

register();

const ProductSlider = () => {
    const screenSize = useScreenSize();
    const swiperRef = useRef(null);
    
    const {data: products, refetch, isLoading} = useGetPopularProductsQuery();

    const handleNext = () => {
        swiperRef.current.swiper.slideNext()
    }

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev()
    }

    useEffect(() => {
        const params = {
            slidesPerView: 4,
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
        {isLoading ? <>
            <div className={styles.loaderWrapper}><Loader /></div>
        </> : <>
            {products !== undefined ? <>
                <div className={layout.cardLabel}>
                    Хиты продаж
                    {screenSize.width <= 725 ? <></> :
                        <TonightArrowGroup
                            prevHandle={handlePrev}
                            nextHandle={handleNext}
                        />   
                    }
                </div>

                <swiper-container ref={swiperRef} init="false">
                    {products.map((item) => (
                        <swiper-slide key={item.id}><ProductCard data={item} refetch={refetch} /></swiper-slide>
                    ))}
                </swiper-container>
            </> : <>
                <div className={styles.loaderWrapper}><Loader /></div>
            </>}
        </>}
    </>
}

export default ProductSlider;
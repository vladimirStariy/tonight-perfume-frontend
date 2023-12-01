import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import styles from '../../../styles/main-screen-modules/review.slider.module.css';
import ReviewCard from "./review-card";
import ProductCard from "../../../product/product-card";

register();

const ReviewSlider = () => {
    const swiperRef = useRef(null);
    
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
            
            injectStyles: [],
        }

        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    return <>
        <div className={styles.sliderContentRow}>
            <div className={styles.commonReviews}></div>
            <swiper-container ref={swiperRef} init="false">
                <swiper-slide>slide 1</swiper-slide>
                <swiper-slide>slide 1</swiper-slide>
                <swiper-slide>slide 1</swiper-slide>
                <swiper-slide>slide 1</swiper-slide>
            </swiper-container>
        </div>
        
    </>
}

export default ReviewSlider;
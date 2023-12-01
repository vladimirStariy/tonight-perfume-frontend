import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import styles from "../../../styles/swiper.module.css";
import './slider.css'

register();

const SwiperSlider = () => {
    const swiperRef = useRef(null);
    const delay = 3000;
    useEffect(() => {
        const params = {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: delay,
                disableOnInteraction: true,
            },
            clickable: true,
            pagination: {
                clickable: true,
                type: 'bullets',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"><div class="swiper-custom-bullet"></div><b></b></span>';
                },
            },
            injectStyles: [
                `
                .swiper-wrapper {
                  background-color: blue;
                }
                .swiper-pagination-bullet {
                    position: relative;
                    width: 176px;
                    height: 2px;
                    text-align: left;
                    border-radius: 0;
                    opacity: 1;
                }
                .swiper-custom-bullet {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    z-index: 1;
                    width: 176px;
                    height: 2px;
                    background-color: #1E1E1E;
                }
                .swiper-pagination-bullet-active {
                    background-color: transparent;
                }
                .swiper-pagination-bullet-active b {
                    position: absolute;
                    bottom: 0;
                    left:  0;
                    z-index: 2;
                    width: 0%;
                    height: 2px;
                    background-color: #FFFFFF;
                }
                .swiper-pagination-bullet-active b {  
                    animation-name: countingBar;
                    animation-duration: 3s;
                    animation-timing-function: ease-in;
                    animation-iteration-count: 1;
                    animation-direction: alternate ;
                    animation-fill-mode: forwards;
                }
                @keyframes countingBar {
                    0% {width: 0;}
                    100% {width:100%;}
                }
                `,
            ],
            on: {
                init() {
                    console.log('hello');
                }
            }
        }

        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
      }, []);

    return (
        <>
            <swiper-container ref={swiperRef} init="false">
                <swiper-slide><div className={styles.yellowSlide}></div></swiper-slide>
                <swiper-slide><div className={styles.yellowSlide}></div></swiper-slide>
                <swiper-slide><div className={styles.yellowSlide}></div></swiper-slide>
            </swiper-container>
        </>
    )
}

export default SwiperSlider;
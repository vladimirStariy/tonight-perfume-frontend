import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import styles from "./swiper.module.css";
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
                  background-color: #F2F2F2;
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
                @media only screen and (max-width: 375px) {

                }
                
                @media only screen and (min-width: 375px) {
                    .swiper-pagination-bullet {
                        width: 100px;
                    }
                    .swiper-custom-bullet {
                        width: 100px;
                    }
                }
                
                @media only screen and (min-width: 726px) {
                    .swiper-pagination-bullet {
                        width: 176px;
                    }
                    .swiper-custom-bullet {
                        width: 176px;
                    }
                }
                
                @media only screen and (min-width: 936px) {
                    
                }
                
                @media only screen and (min-width: 1248px) {
                    
                }
                `,
            ],
        }

        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
      }, []);

    return (
        <>
            <swiper-container ref={swiperRef} init="false">
                <swiper-slide><div className={styles.yellowSlide}></div></swiper-slide>
                <swiper-slide>
                    <div 
                        className={styles.socialSlide}
                        style={{backgroundImage: `url('${process.env.PUBLIC_URL}/slider/social/social.jpg')`}}
                    >

                    </div>
                </swiper-slide>
                <swiper-slide><div className={styles.yellowSlide}></div></swiper-slide>
            </swiper-container>
        </>
    )
}

export default SwiperSlider;
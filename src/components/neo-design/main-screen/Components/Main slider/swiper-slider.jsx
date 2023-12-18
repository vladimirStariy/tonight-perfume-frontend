import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import styles from "./swiper.module.css";
import './slider.css'
import TonightButton from "../../../../../UI/Components/button/tonight-button";
import useScreenSize from "../../../../utils/use-screen-size";

register();

const SwiperSlider = () => {
    const screenSize = useScreenSize();
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
                        width: 60px;
                    }
                    .swiper-custom-bullet {
                        width: 60px;
                    }
                }
                
                @media only screen and (min-width: 726px) {
                    .swiper-pagination-bullet {
                        width: 125px;
                    }
                    .swiper-custom-bullet {
                        width: 125px;
                    }
                }
                
                @media only screen and (min-width: 936px) {
                    .swiper-pagination-bullet {
                        width: 176px;
                    }
                    .swiper-custom-bullet {
                        width: 176px;
                    }
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
                    <swiper-slide>
                        <div 
                            className={styles.socialSlide}
                            style={{backgroundImage: `url('${process.env.PUBLIC_URL}/slider/social/${screenSize.width < 768 ? 'social_mob.jpg' : 'social.jpg'}')`}}
                        >
                            <div className={styles.labelAdsBlock}>
                                <div className={styles.firstSlideLbl}>
                                    Следите за нашими новостями и обновлениями
                                    <div className={styles.firstIcons}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M73.366 6.66406C75.6258 6.66406 77.3306 8.81207 76.4187 12.8074L65.3575 69.2999C64.5844 73.3167 62.3444 74.2833 59.252 72.4145L32.8676 51.2996C32.7653 51.2201 32.6819 51.1153 32.6244 50.9939C32.5669 50.8725 32.5369 50.738 32.5369 50.6015C32.5369 50.4651 32.5669 50.3306 32.6244 50.2092C32.6819 50.0878 32.7653 49.983 32.8676 49.9034L61.81 22.8171C63.1976 21.4853 61.5126 20.8409 59.6889 22.0438L22.9759 45.457C22.8599 45.539 22.7282 45.5913 22.5909 45.6099C22.4535 45.6285 22.314 45.6129 22.183 45.5644L5.94791 40.0011C2.34012 38.8627 2.34012 36.1777 6.76066 34.2659L71.7207 7.11514C72.2358 6.84733 72.7953 6.69396 73.366 6.66406Z" fill="#1E1E1E"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                            <path d="M40 30C37.3478 30 34.8043 31.0536 32.9289 32.9289C31.0536 34.8043 30 37.3478 30 40C30 42.6522 31.0536 45.1957 32.9289 47.0711C34.8043 48.9464 37.3478 50 40 50C42.6522 50 45.1957 48.9464 47.0711 47.0711C48.9464 45.1957 50 42.6522 50 40C50 37.3478 48.9464 34.8043 47.0711 32.9289C45.1957 31.0536 42.6522 30 40 30Z" fill="#1E1E1E"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4 6C20.9896 6 15.8008 8.14928 11.975 11.975C8.14928 15.8008 6 20.9896 6 26.4L6 53.6C6 59.0104 8.14928 64.1992 11.975 68.025C15.8008 71.8507 20.9896 74 26.4 74H53.6C59.0104 74 64.1992 71.8507 68.025 68.025C71.8507 64.1992 74 59.0104 74 53.6V26.4C74 20.9896 71.8507 15.8008 68.025 11.975C64.1992 8.14928 59.0104 6 53.6 6L26.4 6ZM24.1333 40C24.1333 35.7919 25.805 31.7562 28.7806 28.7806C31.7562 25.805 35.7919 24.1333 40 24.1333C44.2081 24.1333 48.2439 25.805 51.2194 28.7806C54.195 31.7562 55.8667 35.7919 55.8667 40C55.8667 44.2081 54.195 48.2439 51.2194 51.2194C48.2439 54.195 44.2081 55.8667 40 55.8667C35.7919 55.8667 31.7562 54.195 28.7806 51.2194C25.805 48.2439 24.1333 44.2081 24.1333 40ZM55.8667 20.1667C55.8667 22.3574 57.6426 24.1333 59.8333 24.1333C62.0241 24.1333 63.8 22.3574 63.8 20.1667C63.8 17.9759 62.0241 16.2 59.8333 16.2C57.6426 16.2 55.8667 17.9759 55.8667 20.1667Z" fill="#1E1E1E"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className={styles.socialSlide}
                            style={{
                                backgroundImage: `url('${process.env.PUBLIC_URL}/slider/social/${screenSize.width < 768 ? 'bonusses_mob.jpg' : 'bonesses_full.jpg'}')`,
                                backgroundPosition: '30% 100%'
                            }}
                        >
                            <div className={styles.defaultWrapper}>
                                <div className={styles.slideHeaderLabel}>Внимание, бонусы!</div>
                                <div className={styles.slideDescriptionLabel}>Регистрируйтесь на сайте, копите баллы и получайте подарки</div>
                                <TonightButton text="Зарегистрироваться" arrow/>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div 
                            className={styles.socialSlide}
                            style={{
                                backgroundImage: `url('${process.env.PUBLIC_URL}/slider/social/${screenSize.width < 768 ? 'discount_mob.jpg' : 'disk10full.jpg'}')`,
                                backgroundPosition: '33% 100%'
                            }}
                        >
                            <div className={styles.defaultWrapper}>
                                <div className={styles.slideHeaderLabel}>-10% на ваш первый заказ!</div>
                                <div className={styles.slideDescriptionLabel}>Акция для новых клиентов: активируйте промокод, чтобы получить бонус</div>
                                <TonightButton text="Активировать промокод" arrow/>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div 
                            className={styles.socialSlide}
                            style={{
                                backgroundImage: `url('${process.env.PUBLIC_URL}/slider/social/not_found_aroma_full.jpg')`,
                                backgroundPosition: '30% 100%'
                            }}
                        >
                            <div className={styles.defaultWrapper}>
                                <div className={styles.slideHeaderLabel}>Не нашли свой аромат?</div>
                                <div className={styles.slideDescriptionLabel}>Мы можем привезти его под заказ!</div>
                                <TonightButton text="Перейти на страницу" arrow/>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div 
                            className={styles.socialSlide}
                            style={{backgroundImage: `url('${process.env.PUBLIC_URL}/slider/social/${screenSize.width < 768 ? 'mobile_disc.jpg' : 'discount_full.jpg'}`}}
                        >
                            <div className={styles.defaultWrapper}>
                                <div className={styles.slideHeaderLabel}>Скидки до 40%</div>
                                <div className={styles.slideDescriptionLabel}>Выгодные предложения на широкий ассортимент товаров уже в каталоге!</div>
                                <TonightButton text="Перейти на страницу" arrow/>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>
        </>
    )
}

export default SwiperSlider;
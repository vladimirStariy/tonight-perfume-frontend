import { FC, HTMLAttributes } from "react";

import styles from './tonight.arrow.module.css';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    direction: string;
}

const TonightArrow: FC<IProps> = ({...props}) => {
    return <>
        {props.direction === 'left' ?  
            <span className={styles.arrow} {...props}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
                    <g clip-path="url(#clip0_1045_35526)">
                        <path d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM34 13.5H2V10.5H34V13.5Z"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1045_35526">
                            <rect width="34" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </span>
            :
            <span className={styles.arrow} {...props}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none">
                    <g clip-path="url(#clip0_1045_35528)">
                        <path d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5H32V10.5H0V13.5Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1045_35528">
                            <rect width="34" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </span>
        }
    </>
}

export default TonightArrow;
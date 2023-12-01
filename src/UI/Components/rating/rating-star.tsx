import { FC } from "react";

import styles from './rating.module.css';

interface IProps {
    isActive: boolean;
}

const RatingStar: FC<IProps> = (props) => {
    return <span className={props.isActive ? styles.ratingStarActive : styles.ratingStarDisabled}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1L12.1246 7.49342H19L13.4377 11.5066L15.5623 18L10 13.9868L4.43772 18L6.56234 11.5066L1.00003 7.49342H7.87542L10 1Z" />
        </svg>
    </span>
}

export default RatingStar;
import { FC, HTMLAttributes } from "react";

import styles from './rating.module.css'
import RatingStar from "./rating-star";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    isView?: boolean;
    isEditable?: boolean;
    rating: number;
}

const ProductRating: FC = () => {
    return <span className={styles.rating}>
        <RatingStar isActive={true} />
        <RatingStar isActive={false} />
        <RatingStar isActive={false} />
        <RatingStar isActive={false} />
        <RatingStar isActive={false} />
    </span>
}

export default ProductRating;
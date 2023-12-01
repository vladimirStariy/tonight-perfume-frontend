import { FC } from "react";

import styles from '../../../styles/main-screen-modules/review.card.module.css';
import ProductRating from "../../../../UI/Components/rating/rating";

const ReviewCard: FC = () => {
    
    return <div>
        <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
                <div className={styles.reviewer}>
                    <h4 className={styles.title}><b>Vova Starovoyt</b></h4>
                </div>
                <div className={styles.reviewRating}>
                    <ProductRating />
                </div>
            </div>
            <div className={styles.reviewBody}>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
            </div>
        </div>  
    </div>
}

export default ReviewCard;
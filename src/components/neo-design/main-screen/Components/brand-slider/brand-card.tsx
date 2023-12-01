import { FC } from "react";

import styles from './brand.card.module.css';
import { Link } from "react-router-dom";

const BrandCard: FC = () => {
    return <>
        <Link to=''>
            <div className={styles.brandCard}>
                
            </div>
        </Link>
    </>
}

export default BrandCard;
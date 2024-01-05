import { FC } from "react";

import styles from './brand.card.module.css';
import { Link } from "react-router-dom";

interface BrandCardProps {
    imagePath: string;
}

const BrandCard: FC<BrandCardProps> = (props) => {
    return <>
        <Link to=''>
            <div 
                style={{
                    background: `url(${props.imagePath})`,
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    aspectRatio: '1 / 1'
                }}
                className={styles.brandCard}>
            </div>
        </Link>
    </>
}

export default BrandCard;
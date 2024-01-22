import { FC } from "react";

import styles from './brand.card.module.css';
import { Link, useNavigate } from "react-router-dom";

interface BrandCardProps {
    id: number;
    imagePath: string;
}

const BrandCard: FC<BrandCardProps> = (props) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/catalogue', { replace: true, state: { brand: props.id }})
    }

    return <>
        <div onClick={handleNavigate}
            style={{
                background: `url(${props.imagePath})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                aspectRatio: '1 / 1',
                cursor: 'pointer'
            }}
            className={styles.brandCard}>
        </div>
    </>
}

export default BrandCard;
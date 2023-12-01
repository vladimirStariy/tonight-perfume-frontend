import { FC } from "react";

import layout from '../layout/layout.module.css';
import styles from './discount.module.css'
import ProductGrid from "../product-grid/product.grid";
import TonightButton from "../../../UI/Components/button/tonight-button";

const DiscountScreen: FC = () => {

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Скидки
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Скидки</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightContainer}>
                <div className={layout.cardLabel}>Акции месяца</div>
                <div className={styles.mainDiscountCard}>
                    <div className={styles.mainDiscountImage}>
                        <b>PLACEHOLDER</b>
                    </div>
                    <div className={styles.mainDiscountBody}>

                    </div>
                </div>
            </div>
            <div className={layout.tonightContainer}>
                <div className={layout.cardLabel}>Смотрите также</div>
                <div className={styles.secondaryDiscountCardWrapper}>
                    <div className={styles.secondaryDiscountCard}>
                        <div className={styles.secondaryCardImage}>
                            <b>PLACEHOLDER</b>
                        </div>
                        <div className={styles.secondaryCardBody}>
                            <div className={styles.secondaryCardTitle}>
                                VILHELM PARFUMERIE fleur burlesque
                            </div>
                            <div className={styles.secondaryCardDescription}>
                                Аромабокс из 3-х миниатюр
                            </div>
                            <div className={styles.secondaryDiscountCardButton}>
                                <TonightButton text="Перейти на страницу" arrow/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.secondaryDiscountCard}>
                        <div className={styles.secondaryCardImage}>
                            <b>PLACEHOLDER</b>
                        </div>
                        <div className={styles.secondaryCardBody}>
                            <div className={styles.secondaryCardTitle}>
                                VILHELM PARFUMERIE fleur burlesque
                            </div>
                            <div className={styles.secondaryCardDescription}>
                                Аромабокс из 3-х миниатюр
                            </div>
                            <div className={styles.secondaryDiscountCardButton}>
                                <TonightButton text="Перейти на страницу" arrow/>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                
            </div>
        </div>
    </>
}

export default DiscountScreen;
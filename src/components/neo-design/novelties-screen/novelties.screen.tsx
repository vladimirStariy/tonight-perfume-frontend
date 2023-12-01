import { FC } from "react";

import layout from '../layout/layout.module.css';
import styles from './novelties.module.css'
import ProductGrid from "../product-grid/product.grid";
import TonightButton from "../../../UI/Components/button/tonight-button";

const NoveltiesScreen: FC = () => {

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Новинки
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Новинки</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightContainer}>
                <div className={layout.cardLabel}>Главные новинки</div>
                <div className={styles.noveltiesWrapper}>
                    <div className={styles.noveltyCard}>
                        <div className={styles.noveltyCardImage}>
                            PLACEHOLDER
                        </div>
                        <div className={styles.noveltyCardBody}>
                            <div className={styles.noveltyCardTitle}>
                                VILHELM PARFUMERIE fleur burlesque
                            </div>
                            <div className={styles.noveltyCardDescription}>
                                Аромабокс из 3-х миниатюр
                            </div>
                            <div className={styles.noveltyCardButton}>
                                <TonightButton text="Перейти на страницу" arrow/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.noveltyCard}>
                        <div className={styles.noveltyCardImage}>
                            PLACEHOLDER
                        </div>
                        <div className={styles.noveltyCardBody}>
                            <div className={styles.noveltyCardTitle}>
                                VILHELM PARFUMERIE fleur burlesque
                            </div>
                            <div className={styles.noveltyCardDescription}>
                                Аромабокс из 3-х миниатюр
                            </div>
                            <div className={styles.noveltyCardButton}>
                                <TonightButton text="Перейти на страницу" arrow/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={layout.tonightContainer}>
                <div className={layout.cardLabel}>Смотрите также</div>
                
            </div>
        </div>
    </>
}

export default NoveltiesScreen;
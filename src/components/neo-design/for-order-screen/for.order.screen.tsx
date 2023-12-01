import { FC } from "react";

import layout from '../layout/layout.module.css';
import styles from './for.order.module.css'
import ProductGrid from "../product-grid/product.grid";

const ForOrderScreen: FC = () => {

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Под заказ
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Под заказ</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>
           <div className={layout.tonightContainer}>
            
           </div>
        </div>
    </>
}

export default ForOrderScreen;
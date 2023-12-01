import { FC, useState } from "react";

import styles from './catalogue.products.module.css'

import { fakeData } from "../../../../../fakedatas/productFakeData";
import ProductCard from "../../../../product/product-card";
import useScreenSize from "../../../../utils/use-screen-size";

const CatalogueProducts: FC = () => {
    const screenSize = useScreenSize();

    return <>
            <div>
                {screenSize.width <= 1247 ? 
                        <div className={styles.productsWrapper}>
                            {fakeData.map((item) => (
                                <ProductCard key={item.id} {...item}/>
                            ))}
                        </div>
                    :
                        <div className={styles.productsWrapper}>
                            {fakeData.map((item) => (
                                <ProductCard key={item.id} {...item}/>
                            ))}
                        </div>
                }
            </div>
    </>
}

export default CatalogueProducts;
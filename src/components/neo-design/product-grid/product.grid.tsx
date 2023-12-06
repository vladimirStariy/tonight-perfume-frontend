import { FC } from "react";

import styles from "./product.grid.module.css";

import ProductCard from "./product.card";
import { IProductCard } from "../../../store/models/product/IProductCard";

interface IProductGrid {
    productType?: string;
    products: IProductCard[];
    refetch?: () => void;
}

const ProductGrid: FC<IProductGrid> = props => {

    return <>
        <div className={styles.gridWrapper}>
        {
            <>
                {
                    props.products !== null ? 
                        props.products.map((item) => (
                            <ProductCard refetch={props.refetch} data={item} key={item.id} />
                        ))
                    :
                    <>Не найдено подходящих ароматов</>
                }
            </>
        }
        </div>
    </>
}

export default ProductGrid;
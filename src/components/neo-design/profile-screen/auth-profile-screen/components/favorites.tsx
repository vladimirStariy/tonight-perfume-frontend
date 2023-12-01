import { useState, useEffect, FC } from 'react';
import { useGetFavoritesQuery } from "../../../../../services/product-service";
import { IProductsWithPagination } from '../../../../../store/models/product/IProductsWithPagination';
import ProductGrid from '../../../product-grid/product.grid';

import styles from './favorites.module.css';

interface IFavorite {
    data?: IProductsWithPagination;
    refetch?: () => void;
}

const Favorites: FC<IFavorite> = (props) => {
    return <>
        <div className={styles.catalogueProductContainer}>
            {props.data !== undefined ? 
                <ProductGrid refetch={props.refetch} products={props.data.items} />
                :
                <>
                    NOT FOUND
                </>
            }
        </div>
    </>
}

export default Favorites;
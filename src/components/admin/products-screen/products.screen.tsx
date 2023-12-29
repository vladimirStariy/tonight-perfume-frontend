import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import styles from './products.screen.module.css'
import { useGetTableProductsQuery } from '../../../services/product-service';
import { useEffect, useState } from 'react';
import { TableProduct } from '../../../store/models/admin/Product';
import { useNavigate } from 'react-router-dom';

const ProductsScreen = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState<TableProduct[]>([]);

    const {data: _products, isLoading} = useGetTableProductsQuery();

    useEffect(() => {
        if(_products) setProducts(_products)
    }, [_products])

    const handleNavigateAddnewProduct = () => {
        navigate('/admin/add-product');
    }

    return <div className={styles.productsScreenWrapper}>
        <div className={styles.productsToolbar}>
            <div className={styles.pageName}>
                Парфюмерия
            </div>
            <Button onClick={handleNavigateAddnewProduct}>
                Добавить новый парфюм
            </Button>
        </div>
        <Table responsive="sm">
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>#</th>
                    <th style={{textAlign: 'center'}}>Наименование</th>
                    <th style={{textAlign: 'center'}}>Бренд</th>
                    <th style={{textAlign: 'center'}}>Категория</th>
                    <th style={{textAlign: 'center'}}>Действия</th>
                </tr>
            </thead>
            <tbody>
                {products && products.length > 0 && products.map((item, index) => (
                    <tr key={index}>
                        <td style={{textAlign: 'center'}}>{index+1}</td>
                        <td style={{textAlign: 'center'}}>{item.name}</td>
                        <td style={{textAlign: 'center'}}>{item.brand}</td>
                        <td style={{textAlign: 'center'}}>{item.category}</td>
                        <td style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div className={styles.actionButtonWrapper}>
                                <Button>Изменить</Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
}

export default ProductsScreen;
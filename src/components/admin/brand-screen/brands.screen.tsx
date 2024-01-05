import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import styles from './brands.screen.module.css'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IBrand } from '../../../store/models/brand/IBrand';
import { useGetBrandsQuery } from '../../../services/brand.service';

const BrandsScreen = () => {
    const navigate = useNavigate();
    const [brands, setBrands] = useState<IBrand[]>([]);

    const {data: _brands, isLoading} = useGetBrandsQuery();

    useEffect(() => {
        if(_brands) setBrands(_brands)
    }, [_brands])

    const handleNavigateAddnewBrand = () => {
        navigate('/admin/add-brand');
    }

    return <div className={styles.productsScreenWrapper}>
        <div className={styles.productsToolbar}>
            <div className={styles.pageName}>
                Бренды
            </div>
            <Button onClick={handleNavigateAddnewBrand}>
                Добавить новый бренд
            </Button>
        </div>
        <Table responsive="sm">
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>#</th>
                    <th style={{textAlign: 'center'}}>Наименование</th>
                </tr>
            </thead>
            <tbody>
                {brands && brands.length > 0 && brands.map((item, index) => (
                    <tr key={index}>
                        <td style={{textAlign: 'center'}}>{index+1}</td>
                        <td style={{textAlign: 'center'}}>{item.name}</td>
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

export default BrandsScreen;
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import styles from './category.screen.module.css'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../../services/category.service';
import { ICategory } from '../../../store/models/category/ICategory';

const CategoriesScreen = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<ICategory[]>([]);

    const {data: _categories, isLoading} = useGetCategoriesQuery();

    useEffect(() => {
        if(_categories) setCategories(_categories)
    }, [_categories])

    const handleNavigateAddnewBrand = () => {
        navigate('/admin/add-category');
    }

    return <div className={styles.productsScreenWrapper}>
        <div className={styles.productsToolbar}>
            <div className={styles.pageName}>
                Категории
            </div>
            <Button onClick={handleNavigateAddnewBrand}>
                Добавить новую категорию
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
                {categories && categories.length > 0 && categories.map((item, index) => (
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

export default CategoriesScreen;
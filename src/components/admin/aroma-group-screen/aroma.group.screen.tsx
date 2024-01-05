import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import styles from './aroma.group.module.module.css'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetGroupsQuery } from '../../../services/aroma.group.service';
import { IAromaGroup } from '../../../store/models/aroma-group/IAromaGroup';

const AromaGroupsScreen = () => {
    const navigate = useNavigate();
    const [groups, setGroups] = useState<IAromaGroup[]>([]);

    const {data: _groups, isLoading} = useGetGroupsQuery();

    useEffect(() => {
        if(_groups) setGroups(_groups)
    }, [_groups])

    const handleNavigateAddnewBrand = () => {
        navigate('/admin/add-group');
    }

    return <div className={styles.productsScreenWrapper}>
        <div className={styles.productsToolbar}>
            <div className={styles.pageName}>
                Группы ароматов
            </div>
            <Button onClick={handleNavigateAddnewBrand}>
                Добавить новую группу
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
                {groups && groups.length > 0 && groups.map((item, index) => (
                    <tr key={index}>
                        <td style={{textAlign: 'center'}}>{index+1}</td>
                        <td style={{textAlign: 'center'}}>{item.aromaGroup_Name}</td>
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

export default AromaGroupsScreen;
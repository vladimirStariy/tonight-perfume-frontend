import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import styles from './notes.screen.module.css'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INote } from '../../../store/models/notes/INote';
import { useGetNotesQuery } from '../../../services/note.service';

const NotesScreen = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState<INote[]>([]);

    const {data: _notes, isLoading} = useGetNotesQuery();

    useEffect(() => {
        if(_notes) setNotes(_notes)
    }, [_notes])

    const handleNavigateAddnewBrand = () => {
        navigate('/admin/add-note');
    }

    return <div className={styles.productsScreenWrapper}>
        <div className={styles.productsToolbar}>
            <div className={styles.pageName}>
                Ноты
            </div>
            <Button onClick={handleNavigateAddnewBrand}>
                Добавить новую ноту
            </Button>
        </div>
        <Table responsive="sm">
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>#</th>
                    <th style={{textAlign: 'center'}}>Наименование</th>
                    <th style={{textAlign: 'center'}}>Тип</th>
                </tr>
            </thead>
            <tbody>
                {notes && notes.length > 0 && notes.map((item, index) => (
                    <tr key={index}>
                        <td style={{textAlign: 'center'}}>{index+1}</td>
                        <td style={{textAlign: 'center'}}>{item.name}</td>
                        <td style={{textAlign: 'center'}}>{item.type}</td>
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

export default NotesScreen;
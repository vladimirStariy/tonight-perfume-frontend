import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import Form from 'react-bootstrap/Form';

import styles from './brand.editor.screen.module.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCreateBrandMutation } from "../../../../services/brand.service";

interface Options {
    value: string;
    label: string;
}

interface Props {
    mode: string;
}

const BrandEditorScreen: FC<Props> = (props) => {
    const navigate = useNavigate();
    const [createBrand] = useCreateBrandMutation();

    const uploadRef = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File>();

    const handleSetFile = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) setFile(e.target.files[0]);
    }

    const handleLeaveWithoutSaving = () => {
        navigate('/admin');
    }

    useEffect(() => {
        
    }, [props.mode])

    const [name, setName] = useState<string>('');

    const handleChangeName = (value: string) => { setName(value) }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        if(file) formData.append('file', file);

        await createBrand(formData);
    }

    return <>
        <div className={styles.editorWrapper}>
            <div className={styles.dataHeader}>
                <div style={{display:'flex', gap: '1rem'}}>
                    
                </div>
                <div className={styles.activeButtonsGroup}>
                    <Button onClick={handleSubmit}>Сохранить изменения</Button>
                    <Button onClick={handleLeaveWithoutSaving}>Выйти без сохранения</Button>
                </div>
            </div>
            <div className={styles.mainDataProductWrapper}>
                <div className={styles.blockHeader}>Общая информация</div>
                <div className={styles.dataWrapper}>
                    <div className={styles.inputGroupBlock}>
                        <Form.Group controlId="form.nameInput">
                            <Form.Label className={styles.zxzczv}>Наименование</Form.Label>
                            <Form.Control onChange={(e) => handleChangeName(e.target.value)} type="text" />
                        </Form.Group>
                    </div>
                    <div className={styles.inputGroupImageBlock}>
                        <div 
                            className={styles.uploadedImage}
                            style={file ? {
                                backgroundImage: `url(${URL.createObjectURL(file)})`,
                                backgroundSize: 'cover'
                            } : {}}
                        ></div>
                        <input
                            type='file'
                            ref={uploadRef}
                            onChange={(e) => handleSetFile(e)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default BrandEditorScreen;
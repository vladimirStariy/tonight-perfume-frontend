import { FC, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import styles from './adress.add.modal.module.css';
import DataInput from '../../../../../../UI/Components/input/data.input';
import TonightButton from '../../../../../../UI/Components/button/tonight-button';
import { IAdress } from '../../../../../../store/models/profile/profile';

interface IQModal {
    show: boolean;
    handleClose: () => void;
    handleSendForm: (data: IAdress) => void;
}

const AdressAddModal: FC<IQModal>  = (props) => {
    const [formData, setFormData] = useState<IAdress>(
        {
            id: 0,
            name: '',
            city: '',
            region: '',
            appartaments: '',
            domophoneCode: 0,
            entrance: 0,
            floor: 0,
            postNumber: '',
            deliveryType: 1
        }
    );

    const handleChangeName = (e: any) => {setFormData({...formData, name: e.target.value});}
    const handleChangeCity = (e: any) => {setFormData({...formData, city: e.target.value});}
    const handleChangeRegion = (e: any) => {setFormData({...formData, region: e.target.value});}
    const handleChangeApps = (e: any) => {setFormData({...formData, appartaments: e.target.value});}
    const handleChangeDomophone = (e: any) => {setFormData({...formData, domophoneCode: e.target.value});}
    const handleChangeEntrance = (e: any) => {setFormData({...formData, entrance: e.target.value});}
    const handleChangeFloor = (e: any) => {setFormData({...formData, floor: e.target.value});}
    const handleChangePost = (e: any) => {setFormData({...formData, postNumber: e.target.value});}
    
    const handleChangeDel = (value: number) => {   
        setFormData({...formData, deliveryType: value});
        setFormData({...formData, city: ''}); 
        setFormData({...formData, region: ''}); 
        setFormData({...formData, appartaments: ''}); 
        setFormData({...formData, domophoneCode: 0}); 
        setFormData({...formData, entrance: 0}); 
        setFormData({...formData, floor: 0}); 
        setFormData({...formData, postNumber: ''}); 
    }

    const handleSubmit = () => {
        props.handleSendForm(formData);
        props.handleClose();
    }

    return <>
        <Modal show={props.show} 
            onHide={props.handleClose} 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={styles.modalSett}
        >
                <Modal.Header className={styles.modalHeader} closeButton>
                    
                </Modal.Header>

                <Modal.Body className={styles.modalBody}>
                    <div className={styles.bodyWrapper}>
                        <div className={styles.bodyContainer}>
                            <div className={styles.headerLabel}>
                                Добавление адреса
                            </div>
                            <div className={styles.inputGroup}>
                                <div className={styles.inputData}>
                                    <div className={styles.inputLabel}>Название адреса</div>
                                    <DataInput onChange={handleChangeName} />
                                </div>
                                <div className={styles.inputData}>
                                    <div className={styles.inputLabel}>Вид доставки</div>
                                    <div className={styles.deliveryTypes}>
                                        <div onClick={() => handleChangeDel(1)} 
                                             className={`${styles.deliveryType} ${formData.deliveryType === 1 ? styles.deliveryTypeActive : styles.deliveryTypeDisabled}`}
                                        >
                                            Европочта (доставка до отделения)
                                        </div>
                                        <div onClick={() => handleChangeDel(2)} 
                                             className={`${styles.deliveryType} ${formData.deliveryType === 2 ? styles.deliveryTypeActive : styles.deliveryTypeDisabled}`}>
                                            Autolight Express (курьерская доставка до двери)
                                        </div>
                                    </div>
                                </div>
                                {
                                    formData.deliveryType === 2 ? <>
                                        <div className={styles.inputData}>
                                            <div className={styles.inputLabel}>Город/Населённый пункт</div>
                                            <DataInput onChange={handleChangeCity} />
                                        </div>
                                        <div className={styles.inputData}>
                                            <div className={styles.inputLabel}>Улица</div>
                                            <DataInput onChange={handleChangeRegion} />
                                        </div>
                                        <div className={styles.inputData}>
                                            <div className={styles.inputLabel}>Квартира</div>
                                            <DataInput onChange={handleChangeApps} />
                                        </div>
                                        <div className={styles.inputData}>
                                            <div className={styles.inputLabel}>Подъезд</div>
                                            <DataInput onChange={handleChangeEntrance} />
                                        </div>
                                        <div className={styles.inputData}>
                                            <div className={styles.inputLabel}>Этаж</div>
                                            <DataInput onChange={handleChangeFloor} />
                                        </div> 
                                    </>
                                    :
                                    <>
                                        <div className={styles.inputData}>
                                            <div className={styles.inputLabel}>Номер отделения Европочты</div>
                                            <DataInput onChange={handleChangePost} />
                                        </div>
                                        <div className={styles.inputData}>
                                            <div className={styles.inputLabel}>Город/Населённый пункт</div>
                                            <DataInput onChange={handleChangeCity}/>
                                        </div>
                                    </>
                                }
                            </div>
                            <TonightButton text='Сохранить' onClick={handleSubmit} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
    </>
}

export default AdressAddModal;
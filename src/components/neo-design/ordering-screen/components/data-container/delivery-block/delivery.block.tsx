import { FC, useState } from "react";

import styles from './delivery.module.css'
import DeliveryPill from "../../delivery-pills/delivery.pill";
import DataInput from "../../../../../../UI/Components/input/data.input";
import { IFormError } from "../../../ordering.screen";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../../../store/slices/authSlice";
import AdressCard from "../../../../profile-screen/auth-profile-screen/adress-card/adress.card";
import { IAdress } from "../../../../../../store/models/profile/profile";

interface IDelivery {
    handleChangeData: ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => void; 
    handleChangeDelivery: (value: string) => void;
    handleSetDelivery: (value: number) => void;
    handleChangeAdress: (value: IAdress) => void;
    deliveryPillActive: number;
    adresses: IAdress[];
    formErrors: IFormError;
}

const DeliveryBlock: FC<IDelivery> = (props) => {
    const auth = useSelector(selectCurrentToken);
    const [active, setActive] = useState<number>(-1)

    const handleActiveDeliveryPill = (value: number) => {
        console.log(value)
        props.handleSetDelivery(value);
        props.handleChangeDelivery(value.toString());
        setActive(-1);
    }

    const handleChangeAdressCard = (value: IAdress) => {
        props.handleChangeAdress(value);
        setActive(value.id);
    }

    return <div className={styles.deliveryWrapper}>
        <div className={styles.deliveryPillsWrapper}>
            <DeliveryPill 
                header='Cамовывоз (г.Полоцк, ул.Хруцкого 10)'
                price='Бесплатно'
                active={props.deliveryPillActive === 0 ? true : false}
                onClick={() => handleActiveDeliveryPill(0)}
            />
            <DeliveryPill 
                header='Autolight Express (курьерская доставка до двери)'
                price='12,00 BYN'
                active={props.deliveryPillActive === 1 ? true : false}
                onClick={() => handleActiveDeliveryPill(1)}
            />
            <DeliveryPill 
                header='Европочта (доставка до отделения)'
                price='5,00 BYN'
                active={props.deliveryPillActive === 2 ? true : false}
                onClick={() => handleActiveDeliveryPill(2)}
            />
        </div>
        <div className={styles.deliveryTypeContent}>
            {props.deliveryPillActive === 1 ? 
                <>
                {auth ? 
                    <>
                        <div className={styles.courierDeliveryDataContainer}>
                            {props.adresses ? 
                                <>
                                    <div style={{marginBottom: '8px'}} className={styles.inputLabel}>Ваши адреса: </div>
                                    {props.adresses.map((item) => {
                                        if(item.deliveryType === 1) {
                                            return <>
                                                <div className={`${active === item.id ? styles.activeAdressCard : ''} ${styles.adressCard}`} onClick={() => handleChangeAdressCard(item)}>
                                                    <div>{item.city}, отделение {item.postNumber}</div>
                                                </div>
                                            </>
                                        }
                                    })}
                                </>
                                : <></>
                            }
                            <div className={styles.addNewBtn}>
                                Добавить адрес
                            </div>
                        </div>
                    </>
                :
                <>
                    <div className={styles.courierDeliveryDataContainer}>
                        <div className={styles.dataRow}>           
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Населенный пункт*</label>
                                {props.formErrors.city_error ? 
                                    <>
                                        <label style={{color: 'red'}}>Населённый пункт обязателен для заполнения</label>
                                    </>
                                :
                                <></>
                            }
                                <DataInput 
                                    name='city' 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)} 
                                    />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Улица, номер дома*</label>
                                {props.formErrors.region_error ? 
                                    <>
                                        <label style={{color: 'red'}}>Улица, номер дома обязательны для заполнения</label>
                                    </>
                                :
                                    <></>
                                }
                                <DataInput 
                                    name='region'
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)}
                                    />
                            </div>
                        </div>
                        <div className={styles.dataRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Квартира/офис*</label>
                                {props.formErrors.appartaments_error ? 
                                    <>
                                        <label style={{color: 'red'}}>Квартира/офис обязательны для заполнения</label>
                                    </>
                                :
                                <></>
                            }
                                <DataInput 
                                    name='appartaments'
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Код домофона</label>
                                <DataInput 
                                    name='domophoneCode' 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)}
                                />
                            </div>
                        </div>
                        <div className={styles.dataRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Подъезд</label>
                                <DataInput 
                                    name='entrance' 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Этаж</label>
                                <DataInput 
                                    name='floor' 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)}
                                    />
                            </div>
                        </div>
                    </div>
                </> 
                }
            </> : <></>}
            {props.deliveryPillActive === 2 ? 
                <>
                    {auth ? 
                        <>
                            <div className={styles.courierDeliveryDataContainer}>
                                {props.adresses ? 
                                    <>
                                        <div style={{marginBottom: '8px'}} className={styles.inputLabel}>Ваши адреса: </div>
                                        {props.adresses.map((item) => {
                                            if(item.deliveryType === 2) {
                                                return <>
                                                    <div className={`${active === item.id ? styles.activeAdressCard : ''} ${styles.adressCard}`} onClick={() => handleChangeAdressCard(item)}>
                                                        <div>{item.city}, {item.region}, {item.appartaments}</div>
                                                    </div>
                                                </>
                                            }
                                        })}
                                    </>
                                    : <></>
                                }
                                <div className={styles.addNewBtn}>
                                    Добавить адрес
                                </div>
                            </div>
                        </>
                    : 
                        <>
                            <div className={styles.europosDataContainer}>
                                <div className={styles.dataRow}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Населенный пункт*</label>
                                        {props.formErrors.city_error ? 
                                            <>
                                                <label style={{color: 'red'}}>Населенный пункт обязателен для заполнения</label>
                                            </>
                                        :
                                            <></>
                                        }
                                        <DataInput 
                                            name='city' 
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)}
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.inputLabel}>Номер почтового отделения*</label>
                                        {props.formErrors.city_error ? 
                                            <>
                                                <label style={{color: 'red'}}>Номер почтового отделения обязателен для заполнения</label>
                                            </>
                                        :
                                            <></>
                                        }
                                        <DataInput 
                                            name='postNumber'
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    } 
                </> : <></>}
        </div>
    </div>
}

export default DeliveryBlock;
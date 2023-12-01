import { FC, useEffect } from "react";

import styles from './adress.card.module.css'
import { IAdress } from "../../../../../store/models/profile/profile";

interface IAdressCard {
    data: IAdress;
    handleDelete: (id: number) => void;
}

const AdressCard: FC<IAdressCard> = (props) => {
    return <>
        <div className={styles.cardWrapper}>
            <div className={styles.cardLabels}>
                <div className={styles.adressCardName}>
                    {props.data.name}
                </div>
                <div>
                    {props.data.deliveryType === 1 ? 
                        <>
                            {props.data.city}, отделение {props.data.postNumber}
                        </>
                    :   
                        <>
                            {props.data.city}, {props.data.region}, {props.data.appartaments}
                        </>
                    }
                </div>
                <div>
                    {props.data.deliveryType === 1 ? 
                            <>
                                Европочта
                            </>
                        :
                            <>
                                Курьерская доставка
                            </>
                    }
                </div>
            </div>
            <div onClick={() => props.handleDelete(props.data.id)} className={styles.removeLabel}>
                Удалить
            </div>
        </div>    
    </>
}

export default AdressCard;
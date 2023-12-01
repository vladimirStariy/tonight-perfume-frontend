import { FC, useMemo } from "react";

import DataInput from "../../../../../../UI/Components/input/data.input";

import styles from './personal.data.module.css'
import latoyt from '../../ordering-screen-layout/ordering.layout.module.css';
import MaskedInput from "../../../../../../UI/Components/mask-input/mask.input";
import { IFormError } from "../../../ordering.screen";
import { IOrder } from "../../../../../../store/models/order/order";

interface IPersonalDataBlock {
    handleChangeData: ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePhone: (e: any) => void;
    formData: IOrder;
    formErrors: IFormError;
    isAuth?: boolean;
}

const PersonalDataBlock: FC<IPersonalDataBlock> = (props) => {

    const initialPhoneValue = useMemo(() => {
        if(props.formData.phone !== undefined) {

        }
    }, [props.formData.phone])

    return <div className={styles.personalDataWrapper}>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Имя*</label>
            {props.formErrors.fistname_error ? 
                <>
                    <label style={{color: 'red'}}>Имя обязательно для заполнения</label>
                </>
            :
                <></>
            }
            <DataInput name='firstname' value={props.formData.firstname} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)} />
        </div>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Фамилия*</label>
            {props.formErrors.surname_error ? 
                <>
                    <label style={{color: 'red'}}>Фамилия обязательна для заполнения</label>
                </>
            :
                <></>
            }
            <DataInput name='surname' value={props.formData.surname} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)} />
        </div>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Отчество</label>
            <DataInput name='lastname' value={props.formData.lastname} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)} />
        </div>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Номер телефона*</label>
            {props.formErrors.phone_error ? 
                <>
                    <label style={{color: 'red'}}>Телефон обязателен для заполнения</label>
                </>
            :
                <></>
            }

            {props.isAuth ? <>
                <MaskedInput 
                    type="text"
                    mask="+375 (__) ___-__-__" 
                    replacement="_" 
                    placeholder="+375"
                    disabled
                    initialValue={props.formData.phone}
                    handleInput={props.handleChangePhone} 
                />
            </> : <>
                <MaskedInput 
                    type="text"
                    mask="+375 (__) ___-__-__" 
                    replacement="_" 
                    placeholder="+375"
                    initialValue={''}
                    handleInput={props.handleChangePhone} 
                />
            </>}
        </div>
        <div className={styles.inputGroup}>
            <label className={latoyt.blockHeader}>Email</label>
            <DataInput name='email' value={props.formData.email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChangeData(event)} />
        </div>
    </div>
}

export default PersonalDataBlock;
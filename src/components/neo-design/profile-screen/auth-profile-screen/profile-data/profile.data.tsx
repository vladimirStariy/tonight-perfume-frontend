import { useState, FC, useEffect } from "react";

import styles from './profile.data.module.css';
import DataInput from "../../../../../UI/Components/input/data.input";
import TonightButton from "../../../../../UI/Components/button/tonight-button";
import AdressCard from "../adress-card/adress.card";
import AdressAddModal from "../adress-card/adress-add/adress.add.modal";
import { IAdress, IProfileData, IUpdateProfile } from "../../../../../store/models/profile/profile";
import { useAddAdressMutation, useGetProfileDataQuery, useRemoveAdressMutation, useUpdateProfileDataMutation } from "../../../../../services/profile.service";
import MaskedInput from "../../../../../UI/Components/mask-input/mask.input";

interface IntProfileData {
    data: IProfileData;
    refetch: () => void;
}

const ProfileData: FC<IntProfileData> = (props) => {
    const [show, setShow] = useState(false);

    const [isChanged, setIsChanged] = useState(false);

    const [profileData, setProfileData] = useState<IUpdateProfile>({
        firstname: props.data.firstname,
        middlename: props.data.middlename,
        lastname: props.data.lastname,
        birthday: props.data.birthday,
        email: props.data.email,
        phone: props.data.phone,
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [createAdress, {isLoading: isAddAdressLoading}] = useAddAdressMutation();
    const [deleteAdress, {isLoading: isDeleteAdressLoading}] = useRemoveAdressMutation();
    const [updateProfileData, {isLoading: isUpdateProfileLoading}] = useUpdateProfileDataMutation();

    const handleDeleteAdress = async (id: number) => {
        await deleteAdress(id);
        props.refetch();
    }

    const handleUpdateProfile = async () => {
        await updateProfileData(profileData);
        props.refetch();
    }

    const handleCreateAdress = async (adress: IAdress) => {
        await createAdress(adress);
        props.refetch();
    } 

    const handleChangeFirstname = (e: any) => {setProfileData({...profileData, firstname: e.target.value});}
    const handleChangeMiddlename = (e: any) => {setProfileData({...profileData, middlename: e.target.value});}
    const handleChangeLastname = (e: any) => {setProfileData({...profileData, lastname: e.target.value});}
    const handleChangeBirthday = (e: any) => {setProfileData({...profileData, birthday: e.target.value});}
    const handleChangeEmail = (e: any) => {setProfileData({...profileData, email: e.target.value});}
    const handleChangePhone = (e: any) => {setProfileData({...profileData, phone: e.detail.input});}

    return <>
        <div className={styles.mainWrapper}>
            <div className={styles.profileDataWrapper}>
                <div className={styles.dataBlock}>
                    <div className={styles.blockLabel}>
                        Мои данные
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.blockHeader}>Имя</label>
                        <DataInput onChange={(event) => handleChangeFirstname(event)} value={profileData.firstname}  />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.blockHeader}>Фамилия</label>
                        <DataInput onChange={(event) => handleChangeMiddlename(event)} value={profileData.middlename} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.blockHeader}>Отчество</label>
                        <DataInput onChange={(event) => handleChangeLastname(event)} value={profileData.lastname} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.blockHeader}>Дата рождения</label>
                        <DataInput onChange={(event) => handleChangeBirthday(event)} value={profileData.birthday} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.blockHeader}>Номер телефона</label>
                        <MaskedInput
                            disabled 
                            type="text" 
                            mask="+375 (__) ___-__-__" 
                            replacement="_" 
                            placeholder="+375"
                            initialValue={profileData.phone ? profileData.phone : ''}
                            handleInput={handleChangePhone} 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.blockHeader}>Email</label>
                        <DataInput onChange={(event) => handleChangeEmail(event)} value={profileData.email} />
                    </div>
                </div>
                <div className={styles.dataBlock}>
                    <div className={styles.blockLabel}>
                        Адреса
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.adressCards}>
                            {
                                props.data.profileAdresses ? <>
                                    {
                                        props.data.profileAdresses.map((item) => (
                                            <AdressCard handleDelete={handleDeleteAdress} data={item} />
                                        ))
                                    }
                                </>
                                :
                                <>Loading...</>
                            }
                        </div>
                        <div onClick={handleShow} className={styles.addNewBtn}>
                            Добавить адрес
                        </div>
                        <AdressAddModal handleSendForm={handleCreateAdress} show={show} handleClose={handleClose} />
                    </div>
                </div>
            </div>
            <TonightButton 
                isLoading={isUpdateProfileLoading} 
                isDisabled={isUpdateProfileLoading} 
                onClick={handleUpdateProfile} 
                text="Сохранить" 
            />
        </div>
    </>
}

export default ProfileData;
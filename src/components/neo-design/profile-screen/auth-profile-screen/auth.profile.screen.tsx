import { useEffect, useState } from 'react';

import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../../store/slices/authSlice";

import styles from '../profile.module.css';
import layout from '../../layout/layout.module.css';
import Favorites from "./components/favorites";
import { useGetFavoritesQuery } from "../../../../services/product-service";
import ProfileData from './profile-data/profile.data';
import { useGetProfileDataQuery } from '../../../../services/profile.service';
import ProfileOrderCard from './profile-orders/profile.order.card';
import ProfileOrders from './profile-orders/profile.orders';

const AuthProfileScreen = () => {
    const tabs = ["orders", "favorites", "promocodes", "settings"]
    const [tab, setTab] = useState<number>(0);

    const token = useSelector(selectCurrentToken);
    const {data, refetch} = useGetFavoritesQuery(1);
    const {data: profileData, refetch: profileRefetch} = useGetProfileDataQuery();

    const handleRefetch = () => {
        refetch();
    }

    const handleRefetchProfile = () => {
        profileRefetch();
    }

    const handleSetTab = (tab: number) => {
        setTab(tab);
    }

    useEffect(() => {
        refetch();
        profileRefetch();
    }, [])

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Мой профиль
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Мой профиль</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightContainer}>
                <div className={styles.profileWrapper}>
                    <div className={styles.profileControl}>

                        <div className={styles.userProfileData}>
                            <div className={styles.userProfileImage}>
                                <div className={styles.profileBuble}></div>
                            </div>
                            <div className={styles.profileUser}>
                                <div className={styles.profileName}>
                                    Владимир
                                </div>
                                <div className={styles.bonusData}>
                                    <div>
                                        Еще 12 мл до бонуса
                                    </div>
                                    <div className={styles.progressBar}>
                                        <div className={styles.progressBarProg}></div>
                                    </div>
                                    <div className={styles.bonusCounter}>
                                        28/40
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.userCard}>
                            <div className={styles.profileMenuWrapper}>
                                <div className={styles.profileMenu}>
                                    <div onClick={() => handleSetTab(0)} className={styles.profileMenuItem}>Заказы</div>
                                    <div onClick={() => handleSetTab(1)} className={styles.profileMenuItem}>Избранное</div>
                                    <div onClick={() => handleSetTab(2)} className={styles.profileMenuItem}>Промокоды</div>
                                    <div onClick={() => handleSetTab(3)} className={styles.profileMenuItem}>Настройки</div>
                                </div>
                            </div>
                            <div className={styles.profileSettings}>
                                <div className={styles.profileSetting}>Выйти из профиля</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.content}>
                        {tab === 0 ? 
                            <ProfileOrders refetch={handleRefetchProfile}/>
                        :
                        tab === 1 ? 
                            <Favorites refetch={handleRefetch} data={data}/>
                        :
                        tab === 3 ? 
                            profileData ? 
                                <ProfileData refetch={handleRefetchProfile} data={profileData} />
                            : 
                            <></>
                        :
                        <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AuthProfileScreen;
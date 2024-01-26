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
    const [tab, setTab] = useState<number>(1);

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
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                    <path d="M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z" fill="#F2F2F2"/>
                                    <mask id="mask0_1011_18701" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
                                        <circle cx="36" cy="36" r="36" fill="#F2F2F2"/>
                                    </mask>
                                    <g mask="url(#mask0_1011_18701)">
                                        <path d="M49.0913 33.544C49.0913 40.7739 43.2303 46.6349 36.0004 46.6349C28.7704 46.6349 22.9094 40.7739 22.9094 33.544C22.9094 26.3141 28.7704 20.4531 36.0004 20.4531C43.2303 20.4531 49.0913 26.3141 49.0913 33.544Z" fill="#D0BEE5"/>
                                        <path d="M65.864 78.9531C65.864 95.4464 52.4936 108.817 36.0004 108.817C19.5071 108.817 6.13672 95.4464 6.13672 78.9531C6.13672 62.4599 19.5071 49.0895 36.0004 49.0895C52.4936 49.0895 65.864 62.4599 65.864 78.9531Z" fill="#D0BEE5"/>
                                    </g>
                                </svg>
                            </div>
                            <div className={styles.profileUser}>
                                <div className={styles.profileName}>
                                    {profileData?.firstname}
                                </div>
                                <div className={styles.bonusData}>
                                    <div>
                                        {profileData ? <>
                                            Еще {40 - profileData?.discountProgress} мл до бонуса
                                        </> : <></>}
                                    </div>
                                    <div className={styles.progressBar}>
                                        <div style={{
                                            width: `${profileData ? profileData.discountProgress * 100 / profileData.accumulativeDiscount : 0}%`
                                          }} 
                                          className={styles.progressBarProg}>
                                        </div>
                                    </div>
                                    <div className={styles.bonusCounter}>
                                        {profileData?.discountProgress}/40
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
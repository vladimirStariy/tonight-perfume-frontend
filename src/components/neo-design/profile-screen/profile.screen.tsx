import { FC } from "react";

import layout from '../layout/layout.module.css';
import styles from './profile.module.css'
import LoginScreen from "../auth/login.screen";

const ProfileScreen: FC = () => {

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
        <LoginScreen />
    </>
}

export default ProfileScreen;
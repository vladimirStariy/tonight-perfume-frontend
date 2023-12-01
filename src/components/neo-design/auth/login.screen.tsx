import { FC, useState } from "react";

import { authAPI, useLoginMutation, useRegisterMutation } from "../../../services/auth.service";

import layout from '../layout/layout.module.css';
import styles from './login.screen.module.css'; 
import DataInput from "../../../UI/Components/input/data.input";
import TonightButton from "../../../UI/Components/button/tonight-button";
import { ILoginRequest } from "../../../store/models/auth/auth.model";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import MaskedInput from "../../../UI/Components/mask-input/mask.input";

const LoginScreen: FC = () => {
    const [successAction, setSuccessAction] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [authType, setAuthType] = useState<boolean>(true)
    const [formData, setFormData] = useState<ILoginRequest>({phone: '', password: '', deviceData: 'test'});

    const [login, {isSuccess: loginSuccess, isLoading: loginLoading, isError: loginError}] = useLoginMutation();
    const [register, {isSuccess: regSuccess, isLoading: regLoading, isError: regError, status: regStatus}] = useRegisterMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if(authType) {
            let flag = false;
            const loginRes = await login(formData).unwrap();

            handleSuccess(flag)
            if(!flag) {
                dispatch(setCredentials(loginRes))
                navigate('/my-profile');
            }
        } else {
            let flag = false;
            const regRes = await register({phone: formData.phone}).unwrap().catch(
                (error) => {
                    if(error) flag = true;
                    else flag = false;
            });
            handleSuccess(flag)
        }
    }

    const handleSuccess = (error: boolean) => {
        if(!error) setSuccessAction(1);
        else setSuccessAction(-1);
    }

    const handleChangeForm = () => {
        setAuthType(!authType);
        setFormData({phone: '', password: '', deviceData: 'test'})
        setSuccessAction(0);
    }

    const handleChangePhone = (e: any) => {
        setFormData({...formData, phone: e.detail.input});
    }

    const handleChangePassword = (e: any) => {
        setFormData({...formData, password: e.target.value});
    }

    return <>
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightConteiner}>
                <div className={styles.loginWrapper}>
                    {authType ? <>
                            <div className={layout.cardLabel}>Вход в личный кабинет</div>
                            <div className={styles.loginForm}>
                                
                                <div className={styles.inputBlock}>
                                    <MaskedInput type="text" 
                                                 mask="+375 (__) ___-__-__" 
                                                 replacement="_" 
                                                 placeholder="+375" 
                                                 initialValue={''}
                                                 handleInput={handleChangePhone}
                                    />
                                </div>
                                <div className={styles.inputBlock}><DataInput onChange={handleChangePassword} placeholder="Пароль" /></div>
                                <TonightButton 
                                    isDisabled={loginLoading ? true : false} 
                                    isLoading={loginLoading} 
                                    onClick={handleSubmit} 
                                    text="Отправить"/>
                                <div onClick={handleChangeForm} className={styles.ctaLink}>Нет аккаунта? Зарегистрируйтесь!</div>
                            </div>
                        </>
                        : <>
                            <div className={layout.cardLabel}>Регистрация</div>
                            <div className={styles.loginForm}>
                                {successAction === 0 ? <>
                                    <div className={styles.shadowedLabel}>Мы отправим на номер SMS-сообщение с данными для входа</div>
                                    <div className={styles.inputBlock}>
                                        <MaskedInput type="text" 
                                                    mask="+375 (__) ___-__-__" 
                                                    replacement="_" 
                                                    placeholder="+375" 
                                                    initialValue={''}
                                                    handleInput={handleChangePhone}
                                        />
                                    </div>
                                    <TonightButton 
                                        isDisabled={regLoading ? true : false} 
                                        isLoading={regLoading} 
                                        onClick={handleSubmit} 
                                        text="Отправить"/>
                                    <div onClick={handleChangeForm} className={styles.ctaLink}>Уже зарегистрированы? Войти в аккаунт!</div>
                                </> : successAction === 1 ? <>
                                    <div className={styles.shadowedLabel}>Успешно! На ваш телефон отправлено SMS с паролем для входа.</div>
                                    <div onClick={handleChangeForm} className={styles.ctaLink}>Войти в аккаунт</div>
                                </> : <>
                                    <div className={styles.shadowedLabel}>Мы отправим на номер SMS-сообщение с данными для входа</div>
                                    <div style={{color: 'red'}} className={styles.shadowedLabel}>Пользователь с таким телефоном уже зарегистрирован.</div>
                                    <div className={styles.inputBlock}><DataInput onChange={handleChangePhone} placeholder="Номер телефона" /></div>
                                    <TonightButton 
                                        isDisabled={regLoading ? true : false} 
                                        isLoading={regLoading} 
                                        onClick={handleSubmit} 
                                        text="Отправить"
                                    />
                                    <div onClick={handleChangeForm} className={styles.ctaLink}>Уже зарегистрированы? Войти в аккаунт!</div>
                                </>
                                }
                            </div> 
                        </>
                    }
                </div>
            </div>
        </div>
    </>
}

export default LoginScreen;
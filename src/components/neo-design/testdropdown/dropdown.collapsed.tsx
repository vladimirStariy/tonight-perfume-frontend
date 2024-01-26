import { FC } from "react";

import styles from './dropdown.collapsed.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IDropdown {
    class?: string;
    handleExpand: () => void;
}

const DropDownCollapsedLink: FC<IDropdown> = (props) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (mode: string) => {
        navigate('/catalogue', { replace: true, state: { mode: mode } })
        setShow(false);
        props.handleExpand();
    }

    const handleShow = () => {
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

    return <div className={`${styles.liWrap} ${show ? styles.paddingTopActive : ''}`}>
        <div onClick={handleShow} className={props.class}>
            <div className={styles.catalogueLabel}>
                <div>Каталог</div>
                <div className={show ? styles.showed : styles.collapsed}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M5 6.5L0 0.5H10L5 6.5Z" fill="#1E1E1E"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className={`${styles.collapsedWrapper} ${show ? styles.show : styles.hide}`}>
            <div className={styles.categoriesWrapper}>
                    <div className={styles.categoriesContainer}>
                        <div className={styles.smCategoreis}>
                            <div onClick={() => handleNavigate('forhim')} className={styles.smCategory1}>
                                <b className={styles.categoryText}>Для него</b>
                            </div>
                            <div onClick={() => handleNavigate('forher')} className={styles.smCategory2}>
                                <b className={styles.categoryText}>Для неё</b>
                            </div>
                        </div>
                        <div onClick={() => handleNavigate('unisex')} className={styles.lgCategory}>
                            <b className={styles.categoryText}>Унисекс</b>
                        </div>
                        <div onClick={() => handleNavigate('aromabox')} className={styles.boxBlock}>
                            <b className={styles.categoryText}>Аромабоксы</b>
                        </div> 
                    </div>
            </div>
        </div>
    </div>
}

export default DropDownCollapsedLink;
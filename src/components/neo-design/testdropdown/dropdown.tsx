import { FC } from "react";

import styles from './dropdown.module.css'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

interface IDropdown {
    handleExpand?: () => void;
    class?: string;
}

const DropDownLink: FC<IDropdown> = (props) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

    return <div className={styles.parentBlock} onMouseOver={handleShow} onMouseOut={handleHide}>
        <Nav.Link 
            onClick={handleHide} 

            to="/catalogue" as={NavLink} className={props.class}>
            Каталог
        </Nav.Link>

        <div className={`${styles.absoluteTest} ${show ? styles.show : styles.hide}`}>
            <div className={styles.categoriesWrapper}>
                    <div className={styles.categoriesContainer}>
                        <div className={styles.categoriesBlock}>
                            <div className={styles.smCategoreis}>
                                <div className={styles.smCategory1}>
                                    <b className={styles.categoryText}>Для него</b>
                                </div>
                                <div className={styles.smCategory2}>
                                    <b className={styles.categoryText}>Для неё</b>
                                </div>
                            </div>
                            <div className={styles.lgCategory}>
                                <b className={styles.categoryText}>Унисекс</b>
                            </div>
                        </div>  
                        <div className={styles.boxBlock}>
                            <b className={styles.categoryText}>Аромабоксы</b>
                        </div>
                    </div>
            </div>
        </div>
    </div>
}

export default DropDownLink;
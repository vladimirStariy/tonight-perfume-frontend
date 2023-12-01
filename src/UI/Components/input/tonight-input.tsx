import { FC, HTMLAttributes } from "react";

import styles from './input.module.css';

interface IInput extends HTMLAttributes<HTMLInputElement> {
    isSearch?: boolean;
} 

const TonightInput: FC<IInput> = ({...props}) => {
    return <div className={styles.inputWrapper}>
        <input type="text" {...props}/>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M7.875 2C6.61415 2 5.38161 2.37389 4.33324 3.07438C3.28488 3.77487 2.46778 4.77051 1.98527 5.93539C1.50276 7.10027 1.37652 8.38207 1.6225 9.6187C1.86848 10.8553 2.47564 11.9912 3.3672 12.8828C4.25876 13.7744 5.39467 14.3815 6.6313 14.6275C7.86793 14.8735 9.14973 14.7472 10.3146 14.2647C11.4795 13.7822 12.4751 12.9651 13.1756 11.9168C13.8761 10.8684 14.25 9.63585 14.25 8.375C14.2499 6.68428 13.5782 5.06283 12.3827 3.86731C11.1872 2.67179 9.56572 2.00011 7.875 2Z" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M12.75 13.25L16.5 17" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            </svg>
        </span>
    </div>
}

export default TonightInput;
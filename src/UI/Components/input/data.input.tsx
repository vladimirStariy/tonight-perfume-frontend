import { FC, HTMLAttributes } from "react";

import styles from './data.input.module.css';

interface IInput extends HTMLAttributes<HTMLInputElement> {
    bigText?: boolean;
    value?: any;
    name?: string;
} 

const DataInput: FC<IInput> = ({...props}) => {
    return <>
        {props.bigText ? 
            <textarea name={props.name} value={props.value ? props.value : null} className={styles.textArea}/>
        :
            <input name={props.name} type="text" value={props.value ? props.value : null} className={styles.dataInput} {...props}/>
        }
    </>
}

export default DataInput;
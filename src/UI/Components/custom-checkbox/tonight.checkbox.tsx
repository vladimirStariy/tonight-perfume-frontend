import { FC, HTMLAttributes, useEffect, useState } from "react";

import styles from './tonight.checkbox.module.css'

interface ITonightCheckbox {
    label: string;
    isChecked: boolean;
    value: number;
    idNamespace: string;
    onChange: () => void;
} 

const TonightCheckbox: FC<ITonightCheckbox> = (props) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    
    const handleCheck = () => {
        setIsChecked(!isChecked)
        props.onChange();
    }

    useEffect(() => {
        console.log(isChecked)
        setIsChecked(isChecked)
    }, [props.isChecked])

    return <>
        <label>
            <input 
                type="checkbox" 
                id={`${props.idNamespace}-checkbox-${props.value}`}
                checked={isChecked} 
                value={props.value} 
                onChange={handleCheck}
            />
            <span>{props.label}</span>
        </label>
    </>
}

export default TonightCheckbox;
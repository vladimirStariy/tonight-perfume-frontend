import { useState, FC, HTMLAttributes, useEffect } from "react";

import styles from './mask.input.module.css';
import { InputMask, MaskEvent, type MaskEventDetail } from "@react-input/mask";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../store/slices/authSlice";

interface IInput extends HTMLAttributes<HTMLInputElement> {
    mask: string;
    replacement: string;
    type?: string;
    initialValue: string;
    disabled?: boolean;
    handleInput: (event: any) => void;
} 

const MaskedInput: FC<IInput> = ({...props}) => {
    const [detail, setDetail] = useState<MaskEventDetail | null>(null);

    const auth = useSelector(selectCurrentToken);

    const handleDetail = (event: any) => {
        setDetail(event.detail);
        props.handleInput(event);
    }

    const eventDetail: MaskEventDetail = {
        value: '',
        input: '',
        parts: [
            {type: 'mask', value: '+', index: 0},
            {type: 'mask', value: '3', index: 1},
            {type: 'mask', value: '7', index: 2},
            {type: 'mask', value: '5', index: 3},
            {type: 'mask', value: ' ', index: 4},
            {type: 'mask', value: '(', index: 5},
            {type: 'replacement', value: '_', index: 6}, 
            {type: 'replacement', value: '_', index: 7},
            {type: 'mask', value: ')', index: 8}, 
            {type: 'mask', value: ' ', index: 9}, 
            {type: 'replacement', value: '_', index: 10}, 
            {type: 'replacement', value: '_', index: 11},
            {type: 'replacement', value: '_', index: 12},
            {type: 'mask', value: '-', index: 13},
            {type: 'replacement', value: '_', index: 14},
            {type: 'replacement', value: '_', index: 15},
            {type: 'mask', value: '-', index: 16},
            {type: 'replacement', value: '_', index: 17},
            {type: 'replacement', value: '_', index: 18},
        ],
        pattern: '^\+375 \(..\) ...-..-..$',
        isValid: false
    }

    useEffect(() => {
        if(props.initialValue !== undefined && props.initialValue !== '' && auth) {
            if(props.initialValue[0]) eventDetail.parts[6].value = props.initialValue[0]
            else eventDetail.parts[6].value = 'a';
            if(props.initialValue[1]) eventDetail.parts[7].value = props.initialValue[1]
            else eventDetail.parts[7].value = 'a';
            if(props.initialValue[2]) eventDetail.parts[10].value = props.initialValue[2]
            else eventDetail.parts[10].value = 'a';
            if(props.initialValue[3]) eventDetail.parts[11].value = props.initialValue[3]
            else eventDetail.parts[11].value = 'a';
            if(props.initialValue[4]) eventDetail.parts[12].value = props.initialValue[4]
            else eventDetail.parts[12].value = 'a';
            if(props.initialValue[5]) eventDetail.parts[14].value = props.initialValue[5]
            else eventDetail.parts[14].value = 'a';
            if(props.initialValue[6]) eventDetail.parts[15].value = props.initialValue[6]
            else eventDetail.parts[15].value = 'a';
            if(props.initialValue[7]) eventDetail.parts[17].value = props.initialValue[7]
            else eventDetail.parts[17].value = 'a';
            if(props.initialValue[8] !== undefined) eventDetail.parts[18].value = props.initialValue[8]
            else eventDetail.parts[18].value = 'a';
            eventDetail.input = props.initialValue
            eventDetail.value = `+375 (${props.initialValue[0]}${props.initialValue[1]}) ${props.initialValue[2]}${props.initialValue[3]}${props.initialValue[4]}-${props.initialValue[5]}${props.initialValue[6]}-${props.initialValue[7]}${props.initialValue[8]}`
            setDetail(eventDetail);
        }
    }, [props.initialValue])

    return <>
        <InputMask
            className={styles.dataInput}  
            value={detail?.value ?? ''}
            onMask={(event) => handleDetail(event)}
            disabled={props.disabled ? true : false}
            {...props}
        >
            
        </InputMask>
    </>
}

export default MaskedInput;
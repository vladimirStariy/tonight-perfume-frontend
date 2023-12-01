import { FC } from 'react'

import styles from './title.module.css';

interface ITitle {
    text: string;
}

const BlockTitle: FC<ITitle> = (props) => {
    return <h1 className={styles.title}>
        <b>{props.text}</b>
    </h1>
}

export default BlockTitle;
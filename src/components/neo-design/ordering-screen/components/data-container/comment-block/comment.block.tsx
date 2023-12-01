import { FC } from "react";

import styles from './comment.module.css';
import layout from '../../ordering-screen-layout/ordering.layout.module.css'
import DataInput from "../../../../../../UI/Components/input/data.input";

interface ICommentBlock {
    handleChangeComment: (value: string) => void;
}

const CommentBlock: FC<ICommentBlock> = (props) => {

    const handleComment = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        props.handleChangeComment(value);
    }

    return <div className={styles.commentWrapper}>
        <div className={layout.headerBlock}>Примечание к заказу</div>
        <DataInput bigText name="note" onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleComment(event)}/>
    </div>
}

export default CommentBlock;
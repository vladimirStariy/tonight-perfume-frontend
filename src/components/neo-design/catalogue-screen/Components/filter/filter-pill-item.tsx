import { FC } from 'react'
import Nav from "react-bootstrap/Nav";
import styles from '../../../../styles/filter/pill.item.module.css'
import { IVolume } from '../../../../../models/IVolume';

const FilterPillItem: FC<IVolume> = (volume: IVolume) => {
    return <>
        <Nav.Item>
            <Nav.Link className={styles.volumePill} eventKey={`link-${volume.id}`}>
                <b className={styles.volumePillLabel}>
                    {volume.name}
                </b>
            </Nav.Link>
        </Nav.Item>
    </>
}

export default FilterPillItem;
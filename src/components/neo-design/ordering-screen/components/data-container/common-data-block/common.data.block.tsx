import { FC, useState } from "react";
import useScreenSize from "../../../../../utils/use-screen-size";
import Accordion from "react-bootstrap/Accordion";

import styles from './common.data.module.css'
import layout from '../../ordering-screen-layout/ordering.layout.module.css';

import PersonalDataBlock from "../personal-data-block/personal.data.block";
import DeliveryBlock from "../delivery-block/delivery.block";
import PaymentBlock from "../payment-block/payment.block";
import CommentBlock from "../comment-block/comment.block";
import { IFormError } from "../../../ordering.screen";
import { IOrder } from "../../../../../../store/models/order/order";
import { IAdress } from "../../../../../../store/models/profile/profile";

interface ICommonBlock {
    activeDeliveryPill: number;
    handleChangeData: ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeDelivery: (value: string) => void;
    handleChangePayment: (value: string) => void;
    handleChangeComment: (value: string) => void;
    handleChangePhone: (e:any) => void;
    handleChangeAdress: (value: IAdress) => void;
    isAuth: boolean;
    adresses: IAdress[];
    formErrors: IFormError;
    formData: IOrder;
}

const CommonDataBlock: FC<ICommonBlock> = (props) => {
    const screenSize = useScreenSize();

    const [deliveryPillActive, setDeliveryPillActive] = useState(0);

    const handleSetDelivery = (value: number) => {
        setDeliveryPillActive(value);
    }

    return <>
        {screenSize.width <= 726 ? 
            <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item className={styles.accordionItem} eventKey="0">
                    <Accordion.Header>Ваши данные</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <PersonalDataBlock 
                            formErrors={props.formErrors}
                            formData={props.formData}
                            handleChangeData={props.handleChangeData} 
                            handleChangePhone={props.handleChangePhone} 
                        />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.accordionItem} eventKey="1">
                    <Accordion.Header>Адрес и доставка</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <DeliveryBlock 
                            handleChangeAdress={props.handleChangeAdress}
                            formErrors={props.formErrors}
                            handleSetDelivery={handleSetDelivery}
                            handleChangeDelivery={() => props.handleChangeDelivery}
                            deliveryPillActive={deliveryPillActive}
                            handleChangeData={props.handleChangeData}
                            adresses={props.adresses}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.accordionItem} eventKey="2">
                    <Accordion.Header>Оплата</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <PaymentBlock 
                            handleChangePayment={props.handleChangePayment}
                            activeDeliveryPill={deliveryPillActive}
                        />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.accordionItem} eventKey="3">
                    <Accordion.Header>Комментарий</Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <CommentBlock handleChangeComment={props.handleChangeComment} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            :
            
            <div className={styles.fullWrapper}>
                <div>
                    <div className={layout.blockHeaderMain}>Ваши данные</div>
                    <PersonalDataBlock 
                        formErrors={props.formErrors}
                        formData={props.formData}
                        isAuth={props.isAuth}
                        handleChangeData={props.handleChangeData} 
                        handleChangePhone={props.handleChangePhone} 
                    />
                </div>
                <div>
                    <div className={layout.blockHeaderMain}>Адрес и доставка</div>
                    <DeliveryBlock 
                        handleChangeAdress={props.handleChangeAdress}
                        formErrors={props.formErrors}
                        handleSetDelivery={handleSetDelivery}
                        handleChangeDelivery={() => props.handleChangeDelivery}
                        deliveryPillActive={deliveryPillActive}
                        handleChangeData={props.handleChangeData}
                        adresses={props.adresses}
                    />
                </div>
                <div>
                    <div className={layout.blockHeaderMain}>Оплата</div>   
                    <PaymentBlock 
                        handleChangePayment={props.handleChangePayment}
                        activeDeliveryPill={deliveryPillActive}
                    />
                </div>
                <div>
                    <div className={layout.blockHeaderMain}>Комментарий</div>
                    <CommentBlock handleChangeComment={props.handleChangeComment} />
                </div>
                
            </div>

        }
    </>
}

export default CommonDataBlock;
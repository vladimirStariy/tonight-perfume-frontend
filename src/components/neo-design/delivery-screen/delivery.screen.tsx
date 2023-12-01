import { FC } from "react";

import layout from '../layout/layout.module.css';
import styles from './delivery.screen.module.css'

const DeliveryScreen: FC = () => {

    return <>
        <div className={styles.portraitImageBlock}>
            <div className={layout.tonightContainer}>
                <div className={layout.breadcrumbContainer}>
                    <div className={layout.breadcrumbLinkText}>
                        Главная / Доставка и оплата
                    </div>
                    <div className={layout.breadcrumbHeaderText}>
                        <b>Доставка и оплата</b>
                    </div>
                </div>
            </div>
        </div>
        <div className={layout.tonightWrapper}>
            <div className={`${layout.tonightContainer} ${styles.infoGap}`}>
                <div className={styles.infoHeader}>Информация о доставке</div>
                <div className={styles.deliveryInfoXl}>
                    <div className={styles.deliveryCardXl}>
                        <div className={styles.cardBody}>
                            <div className={styles.bodyInfo}>
                                <div className={styles.upperInfo}>
                                    <b className={styles.cardLabel}>Европочта</b><br />
                                    <div className={styles.cardText}>
                                        доставка до отделения
                                    </div>
                                </div>
                                <div className={styles.bottomInfo}>
                                    <div className={styles.boldInfoText}><b>Сроки доставки:</b></div>
                                    <div className={styles.cardText}>
                                        день отправления + 3 рабочих дня
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            5,00 BYN + 1.5% от суммы <br/> наложенного платежа / <br/> от 150,00 BYN бесплатно
                        </div>
                    </div>
                    <div className={styles.deliveryCardXl}>
                        <div className={styles.cardBody}>
                            <div className={styles.bodyInfo}>
                                <div className={styles.upperInfo}>
                                    <b className={styles.cardLabel}>Autolight Express</b><br />
                                    <div className={styles.cardText}>
                                        курьерская доставка до двери
                                    </div>
                                </div>
                                <div className={styles.bottomInfo}>
                                    <div className={styles.boldInfoText}><b>Сроки доставки:</b></div>
                                    <div className={styles.cardText}>
                                        день отправления + 1-2 рабочих дня
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            12,00 BYN +1.5% от суммы <br/> наложенного платежа
                        </div>
                    </div>
                    <div className={styles.deliveryCardXl}>
                        <div className={styles.cardBody}>
                            <div className={styles.bodyInfo}>
                                <div className={styles.upperInfo}>
                                    <b className={styles.cardLabel}>Самовывоз</b><br />
                                    <div className={styles.cardText}>
                                        г.Полоцк, ул.Хруцкого 10
                                    </div>
                                </div>
                                <div className={styles.bottomInfo}>
                                    <div className={styles.boldInfoText}><b>Выдача заказа:</b></div>
                                    <div className={styles.cardText}>
                                        после согласования даты и времени
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            Бесплатно
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${layout.tonightContainer} ${styles.infoGap}`}>
                <div className={styles.infoHeader}>Информация об оплате</div>
                <div className={styles.payInfoXl}>
                    <div className={styles.payCard}>
                        <div className={styles.payCardHeader}>
                            Наложенный платёж для Европочты и AutolightExpress
                        </div>
                        <div className={styles.payCardBody}>
                            <div className={styles.bodyHeader}>
                                Форма оплаты:
                            </div>
                            <div className={styles.bodyText}>
                                наличные, безналичные
                            </div>
                            <div className={styles.bodyText}>
                                сумма +1.5% от суммы наложенного платежа
                            </div>
                        </div>
                    </div>
                    <div className={styles.payCard}>
                        <div className={styles.payCardHeader}>
                            Оплата при самовывозе
                        </div>
                        <div className={styles.payCardBody}>
                            <div className={styles.bodyHeader}>
                                Форма оплаты:
                            </div>
                            <div className={styles.bodyText}>
                                наличные, безналичные
                            </div>
                        </div>
                    </div>
                    <div className={styles.payCard}>
                        <div className={styles.payCardHeader}>
                            Дистанционная оплата (предоплата) по ЕРИП
                        </div>
                        <div className={styles.payCardBody}>
                            <div className={styles.bodyHeader}>
                                Инструкция:
                            </div>
                            <div className={styles.bodyText}>
                                <div className={styles.payGapper}>
                                    <div className={styles.payList}>
                                        <b>1.</b>
                                        <div>
                                            - Система "Расчет" (ЕРИП) <br />
                                            - Cервис E-POS <br />
                                            - E-POS - оплата товаров и услуг
                                        </div>
                                    </div> 
                                    <div><b>2. </b> Для оплаты "Товара" ввести номер лицевого счета - 2345234554</div> 
                                    <div><b>3. </b> Ввести сумму платежа (если не указана)</div>
                                    <div><b>4. </b> Проверить корректность информации</div>
                                    <div><b>5. </b> Совершить платеж</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default DeliveryScreen;
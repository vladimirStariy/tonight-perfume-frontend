import { FC } from 'react';

import styles from './footer.module.css';
import layout from '../layout/layout.module.css';
import { Link } from 'react-router-dom';
import { ExpressPayIcon, InstagramLightIcon, LogoLight, TelegramLightIcon } from '../icons/icons';

const Footer: FC = () => {
    return <>
        <div className={styles.footerWrapper}>
            <div className={styles.footerMainBlock}>
                <div className={`${layout.tonightContainer}`}>
                    <div className={styles.contentRow}>
                        <div className={styles.logoHolder}>
                            <LogoLight />
                            <div className={styles.socialLinks}>
                                <TelegramLightIcon />
                                <InstagramLightIcon />
                            </div>
                        </div>
                        <div className={styles.infoHolder}>
                            <div className={styles.footerBlock}>
                                <div className={styles.blockHeader}>График работы</div>
                                <div className={styles.footerLinkGroup}>
                                    <div className={styles.footerLink}>ПН-ПТ: с 10:00 до 20:00</div>
                                    <div className={styles.footerLink}>СБ-ВС: выходные</div>
                                </div>
                            </div>
                            <div className={styles.footerBlock}>
                                <div className={styles.blockHeader}>Клиенту</div>
                                <div className={styles.footerLinkGroup}>
                                    <Link className={styles.footerLink} to=''>Доставка и оплата</Link>
                                    <Link className={styles.footerLink} to=''>Бонусная программа</Link>
                                </div>
                            </div>
                            <div className={styles.footerBlock}>
                                <div className={styles.blockHeader}>О нас</div>
                                <div className={styles.footerLinkGroup}>
                                    <Link className={styles.footerLink} to=''>Политика конфиденциальности</Link>
                                    <Link className={styles.footerLink} to=''>Контакты</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerSecondaryBlock}>
                <div className={`${layout.tonightContainer}`}>
                    <div className={styles.secondaryWrapper}>
                        <div className={styles.secondaryLogoBlock}>
                            <div className={styles.expressPay}></div>
                            <div className={styles.pos}></div>
                        </div>
                        <div className={styles.secondaryTextBlock}>
                            ИП Хохолко Дмитрий Юрьевич | УНП – 391966667 | Юридический адрес: Республика Беларусь, г.Полоцк, ул.Хруцкого 10/2 | Регистрационный номер в Торговом реестре 546576 выданный Полоцким районным исполнительным комитетом 29.11.2022 | Дата внесения в Единый государственный реестр 22.11.2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer;
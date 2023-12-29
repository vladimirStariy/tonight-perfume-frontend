import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import OrdersScreen from '../orders-screen/orders.screen';
import ProductEditorScreen from '../products-screen/product-editor/product.editor.screen';
import ProductsScreen from '../products-screen/products.screen';
import styles from './admin.screen.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const AdminScreen = () => {
    const [currentTab, setCurrentTab] = useState("products");

    const handleSetCurrentTab = (tab: string) => {
        setCurrentTab(tab);
    }

    return <>
        <div className={styles.adminScreenWrapper}>
            <div className={styles.adminNavigator}>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button>Заказы</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button onClick={() => handleSetCurrentTab("products")}>Парфюмы</Button>
                        <Button onClick={() => handleSetCurrentTab("brands")}>Бренды</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <Button>Ноты</Button> 
                        <Button>Категории</Button> 
                        <Button>Группы ароматов</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            <div>
                {currentTab === "products" ? <>
                    <ProductsScreen />
                </> : <></>}
            </div>
        </div>
    
    </> 
}

export default AdminScreen;
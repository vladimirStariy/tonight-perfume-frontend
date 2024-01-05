import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import OrdersScreen from '../orders-screen/orders.screen';
import ProductEditorScreen from '../products-screen/product-editor/product.editor.screen';
import ProductsScreen from '../products-screen/products.screen';
import styles from './admin.screen.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import BrandsScreen from '../brand-screen/brands.screen';
import NotesScreen from '../notes-screen/notes.screen';
import CategoriesScreen from '../category-screen/category.screen';
import AromaGroupsScreen from '../aroma-group-screen/aroma.group.screen';

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
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <Button>Скидки</Button> 
                        <Button>Промокоды</Button> 
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button onClick={() => handleSetCurrentTab("products")}>Парфюмы</Button>
                        <Button onClick={() => handleSetCurrentTab("brands")}>Бренды</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="Second group">
                        <Button onClick={() => handleSetCurrentTab("notes")}>Ноты</Button> 
                        <Button onClick={() => handleSetCurrentTab("categories")}>Категории</Button> 
                        <Button onClick={() => handleSetCurrentTab("groups")}>Группы ароматов</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            <div>
                {currentTab === "products" ? <>
                    <ProductsScreen />
                </> : 
                currentTab === "brands" ? <>
                    <BrandsScreen />
                </> : 
                currentTab === "notes" ? <>
                    <NotesScreen />
                </> : 
                currentTab === "categories" ? <>
                    <CategoriesScreen />
                </> : 
                currentTab === "groups" ? <>
                    <AromaGroupsScreen />
                </> : <></>}
            </div>
        </div>
    
    </> 
}

export default AdminScreen;
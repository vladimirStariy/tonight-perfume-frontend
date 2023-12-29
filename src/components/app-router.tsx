import { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'

import MainScreen from './neo-design/main-screen/main.screen';

import CatalogueScreen from './neo-design/catalogue-screen/catalogue.screen'
import DeliveryScreen from './neo-design/delivery-screen/delivery.screen';
import ClientScreen from './neo-design/client-screen/client.screen';
import ForOrderScreen from './neo-design/for-order-screen/for.order.screen';
import DiscountScreen from './neo-design/discount-screen/discount.screen';
import NoveltiesScreen from './neo-design/novelties-screen/novelties.screen';
import ProfileScreen from './neo-design/profile-screen/profile.screen';
import OrderingScreen from './neo-design/ordering-screen/ordering.screen';
import ProductScreen from './neo-design/product-screen/product.screen';
import LoginScreen from './neo-design/auth/login.screen';
import Layout from './neo-design/layout';
import ProtectedRoute from './neo-design/auth/protected.route';
import AuthProfileScreen from './neo-design/profile-screen/auth-profile-screen/auth.profile.screen';
import AdminScreen from './admin/admin-screen/admin.screen';
import AdminLayout from './admin/layout/admin.layout';
import ProductEditorScreen from './admin/products-screen/product-editor/product.editor.screen';

const AppRouter: FC = () => {
  const {pathname} = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return <>
    <Routes>
        <Route path='/' element={<Layout />}>
            {/* PUBLIC */}
            <Route index element={<MainScreen />}/>
            <Route element={<CatalogueScreen />} path='/catalogue' />
            <Route element={<DeliveryScreen />} path='/delivery' />
            <Route element={<ClientScreen />} path='/client' />
            <Route element={<ForOrderScreen />} path='/for-order' />
            <Route element={<DiscountScreen />} path='/stock' />
            <Route element={<NoveltiesScreen />} path='/novelties' />
            <Route element={<ProfileScreen />} path='/profile' />
            <Route element={<OrderingScreen />} path='/ordering' />
            <Route element={<ProductScreen />} path='/product/:id' />
            <Route element={<LoginScreen />} path='/auth' />

            {/* PROTECTED */}
            <Route element={<ProtectedRoute /> }>
              <Route path='my-profile' element={<AuthProfileScreen />} />
            </Route>
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<AdminScreen />} />
            <Route element={<ProductEditorScreen mode='insert' />} path='/admin/add-product' />
        </Route>
        
    </Routes>
  </>
}

export default AppRouter;

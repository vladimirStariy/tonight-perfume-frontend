import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface iCartProduct {
    productId: number;
    volumeId: number;
    name: string;
    brand: string;
    price: number;
    prices: iPrice[];
    quantity: number;
} 

export interface iPrice {
    price_ID: number,
    product_ID: number,
    volume_ID: number,
    value: number,
}

interface iCartState {
    products: iCartProduct[] | null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: { products: [] } as iCartState,
    reducers: {
        addToCart: (state, { payload: { product } }: PayloadAction<{product: iCartProduct}>) => {
            state.products?.push(product);
        },
        updateCartItem: (state, { payload: { product } }: PayloadAction<{product: iCartProduct}>) => {
            let newProducts: iCartProduct[] = [];
            current(state).products?.forEach(item => {
                if(item.productId === product.productId) {
                    newProducts.push(product);
                } else {
                    newProducts.push(item);
                }
            })
            state.products = newProducts;
        },
        removeCartItem: (state, { payload: { product } }: PayloadAction<{product: iCartProduct}>) => {
            if(current(state).products && current(state).products !== null) {
                const newProducts = current(state)?.products?.filter(obj => {return obj !== product})
                if(newProducts) state.products = newProducts;
            }
        },
        removeCartItemById: (state, { payload: { productId } }: PayloadAction<{productId: number}>) => {
            if(current(state).products && current(state).products !== null) {
                const newProducts = current(state)?.products?.filter(obj => {return obj.productId !== productId})
                if(newProducts) state.products = newProducts;
            }
        },
        clearCart: (state) => {
            state.products = null;
        }
    }
})

export const { addToCart, removeCartItem, updateCartItem, clearCart, removeCartItemById } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCartItems = (state: RootState) => state.cart.products;
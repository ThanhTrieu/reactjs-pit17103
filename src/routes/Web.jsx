import { createBrowserRouter } from 'react-router-dom'

import HomePage from "../pages/home/Index"
import CartPage from "../pages/cart/Index"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/cart",
        element: <CartPage/>
    }
])
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Web";

// arrow function (JS)
// function components
const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}
// memo : ho tro viec kiem soat render giao dien trong  component
export default React.memo(App);
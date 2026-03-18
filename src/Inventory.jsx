import Products from "./inventory_components/Products";
import Create from "./inventory_components/Create";

import { useContext, useState } from "react";
import { AppNameContext } from "./context/AppNameContext";
import { ProductContext } from "./context/ProductContext";

import App from "./App";


const Inventory = () => {
    //how to use context: to use context you need to call hook useContext()

    const {appName} = useContext(AppNameContext);  //which context you won use
    const {products} =  useContext(ProductContext);

    


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center pt-5">
                    <h1> {appName} </h1>
                    <h4>Total Products: {products.length} </h4>
                </div>
            </div>
            {/* other components goes here */}
            <Create />
            <Products />
        
        </div>
    )

}
export default Inventory;
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const Products = () => {

    const {products, delete_product} = useContext(ProductContext);

    return(
        <div className="col-md-8 offset-md-2 py-5">
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && products.map((pro, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{pro.name}</td>
                                    <td>{pro.price}</td>
                                    <td> <button className="btn btn-danger btn-sm" onClick={()=>{delete_product(pro.id)}}>Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}
export default Products;
import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Create = () => {
    //these data: products and setProducts are coming from our ProductContext
    const {products, setProducts} = useContext(ProductContext);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");
    const [form, setForm] = useState({       //a state to manage all forms elements and id
        id : "",
        name : "",
        price : ""
    }); 
    //a function that responds when the form is submitted
    function handle_submit(e){
        e.preventDefault();
        if(form.name == "" || form.price == ""){
            alert("All fields are required")

        }else{
            //generate a random id with time
            let id = Date.now();
            setForm({...form, id: id});
            //send what we collected from the form to an api
            // combine everything to form an object
            // const data = {
            //     id: id,
            //     name: name,
            //     price: price
            // }
            setProducts([...products, form]);
        }
    }

    function updateFormState(e){
        setForm({...form, [e.target.name] : e.target.value})
    }


    return(
        <div className="row">
            <div className="col-md-8 offset-md-2 pb-2">
                <form onSubmit={handle_submit}>
                    <input type="text" className="form-control mb-2" name="name" placeholder="Product Name" value={form.name} onChange={updateFormState}/>
                    <input type="number" className="form-control mb-2" name="price" placeholder="Product Price" value={form.price} onChange={updateFormState}/>
                    <button className="btn btn-primary">Add Product</button>
                </form>
            </div>
        </div>
    )

}
export default Create;
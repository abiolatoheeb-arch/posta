
//import the images like a component
import bc from "../images/care.jpg";

const Main = ({products}) => {
    let sn = 1;

    const appname = "Chopchop Main Dishes";
    const rowStyle = {
        border: "5px groove orange",
        Heigth: "40px",
        fontColor: "tomato"
    }

    return(
        <div className="col-md-8" style={rowStyle}>
            <h1>{ appname} Section</h1>
            <img src={bc} alt="care image" className="img-fluid" />
            <table className="table">
                <thead>
                    <th>SN</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </thead>
                <tbody>
                    {
                        products.map((pro)=>{
                            return(
                                <tr key={pro.id}>
                                    <td>{sn++}</td>
                                    <td>{pro.name}</td>
                                    <td>{pro.price}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
            <span> Please select your favorite dishes from our { appname } section listed</span>
            <button className="btn btn-outline-success btn-lg" onClick={ () => {alert(`We have delicious delicacies at ${appname}`)} } >Click To See Dishes</button>
        </div>
    )

}

export default Main;
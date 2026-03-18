
const Footer = (props) => {

    const appname = "Chopchop Footer";
    const rowStyle = {
        border: "5px groove green",
        fontSize: "40px",
        padding: "30px 25px"
    }

    return(
        <div className="row" style={rowStyle}>
            <div className="col-md-12">
                <h1>{ appname }</h1>
                <p>Welcome to our favorite {appname} restaurant.</p>
                <h3>Your wallett balance is {props.wb} </h3>
            </div>
        </div>
    )

}

export default Footer;
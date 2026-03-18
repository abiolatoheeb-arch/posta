
const Sidebar = ({students}) => {

    const appname = "Chopchop Side Nav";
    const rowStyle = {
        border: "5px solid blue",
        minHeight: "50px",
        minWidth: "60px",
        fontSize: "40px"
    }

    return(
        <div className="col-md-4" style={rowStyle}>
            <h1>{ appname }</h1>
            <p>Please check our { appname } menu's for available dishes</p>
            <ul>
                {
                    students.map((std, index)=>{
                        return <li key={index}> {std} </li>
                    })
                }
            </ul>
        </div>
    )

}

export default Sidebar;
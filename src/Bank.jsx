import Counter from "./bank_components/Counter";
import Atm from "./bank_components/Atm";
import Pos from "./bank_components/Pos";
import Success from "./bank_components/Success";
import Warning from "./bank_components/Warning";
import {useState} from "react";

const Bank = () => {
    // let accountBalance = 1000;  //if account balance will be changing, we should never store it in a variable. because whenever it changes, react will not uupdate the dom
    //keeping account balance inside states
        const [accountBalance, setAccountBalance] = useState(1000);
        // a state to manage what user is typing in input amount
        const [amount, setAmount] = useState(0);

        function update_amount(e){
            setAmount(e.target.value);
        }


    return(
        <div className="container">
            <h1>Bank Application: {accountBalance} </h1>
            {accountBalance > 1000 ? <Success /> : <Warning />}
            <button className="btn btn-danger" onClick={()=>{
                if(amount < accountBalance){
                    setAccountBalance(accountBalance-amount)
                }else{
                    alert("You can't withdraw more than what you have");
                }
            }}>Withdraw</button>
            
            <input type="number" value={amount} onChange={update_amount} />

            <button className="btn btn-primary" onClick={()=>{
                setAccountBalance(accountBalance+ Number(amount))
            }}>Deposit</button>

            <Counter ab={accountBalance}/>
            <Atm ab={accountBalance}/>
            <Pos ab={accountBalance}/>
        </div>
    )

}
export default Bank;